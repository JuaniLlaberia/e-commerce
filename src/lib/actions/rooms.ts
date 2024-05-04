'use server';

import { revalidatePath } from 'next/cache';

import Room from '../schemas/rooms';
import { connectDB } from '../mongoose';
import { RoomValidator } from '../validators/rooms';
import { RoomType } from '@/app/admin/rooms/(components)/rooms-form';

export const getRooms = async (type: string, page: number) => {
  connectDB();

  let query = Room.find();

  if (type && type !== 'all') query.where({ type });

  const pageNum = Number(page) || 1;
  const limit = 10;
  const skip = (pageNum - 1) * limit;

  query.skip(skip).limit(limit);

  return query;
};

export const createRoom = async (prevState: unknown, formData: FormData) => {
  connectDB();

  const result = RoomValidator.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (result.success === false) return result.error.formErrors.fieldErrors;

  await Room.create({
    name: result.data.name,
    description: result.data.description,
    type: result.data.type,
    capacity: 2,
  });

  revalidatePath('/admins/rooms');
};

export const updateRoom = async (
  id: string,
  prevState: unknown,
  formData: FormData
) => {
  connectDB();

  const result = RoomValidator.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (result.success === false) return result.error.formErrors.fieldErrors;

  await Room.updateOne(
    { _id: id },
    {
      name: result.data.name,
      description: result.data.description,
      type: result.data.type,
      capacity: 2,
    }
  );

  revalidatePath('/admins/rooms');
};

export const duplicateRoom = async (room: RoomType) => {
  connectDB();

  await Room.create({
    ...room,
    _id: undefined,
    name: `Duplicate of ${room.name}`,
    capacity: 2,
  });
  revalidatePath('/admins/rooms');
};

export const deleteRoom = async (id: string) => {
  connectDB();

  await Room.deleteOne({ _id: id });
  revalidatePath('/admins/rooms');
};
