'use server';

import { revalidatePath } from 'next/cache';

import Booking from '../schemas/booking';
import { connectDB } from '../mongoose';
import { notFound } from 'next/navigation';

export const getBookings = async ({
  status,
  sort,
  page,
}: {
  status: string;
  sort: string;
  page: string;
}) => {
  connectDB();

  let query = Booking.find();

  if (status && status !== 'all') query.where({ status });

  if (sort) {
    const [sortType, sortVal] = sort.split('-');

    if (sortType === 'createdAt')
      query.sort({ 'dateRange.startDate': sortVal === 'desc' ? -1 : 1 });
    if (sortType === 'totalPrice')
      query.sort({ totalPrice: sortVal === 'desc' ? -1 : 1 });
  }

  const pageNum = Number(page) || 1;
  const limit = 10;
  const skip = (pageNum - 1) * limit;

  query.skip(skip).limit(limit);
  query.select('guest dateRange status totalPrice');

  return await query;
};

export const getBookingById = async (id: string) => {
  if (!id) return notFound();

  const booking = await Booking.findById(id);
  if (!booking) return notFound();

  return booking;
};

export const updateBooking = async (
  id: string,
  prevState: unknown,
  formData: FormData
) => {};

export const deleteBooking = async (id: string) => {
  connectDB();

  await Booking.deleteOne({ _id: id });
  revalidatePath('/admin/bookings');
};
