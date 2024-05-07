import { differenceInCalendarDays } from 'date-fns';
import {
  CircleDollarSign,
  ConciergeBell,
  Dot,
  MessageSquareText,
  Minus,
  MoveLeft,
  User,
  Utensils,
} from 'lucide-react';

import Badge from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getBookingById } from '@/lib/actions/bookings';
import { formatDate } from '@/utils/dateFormatter';
import { formatMoney } from '@/utils/moneyFormatter';

type BookingInfoProps = {
  params: {
    bookingId: string;
  };
};

const BookingInfoPage = async ({ params }: BookingInfoProps) => {
  const booking = await getBookingById(params.bookingId);

  return (
    <>
      <header className='flex justify-between mb-6 lg:mt-2 lg:mb-8'>
        <h1 className='text-lg lg:text-xl font-semibold'>
          Booking information
        </h1>
        <Badge
          color={
            booking.status === 'checked-in'
              ? 'green'
              : booking.status === 'unconfirmed'
              ? 'gray'
              : 'red'
          }
          text={booking.status}
        />
      </header>
      <section className='bg-background-2 rounded-md overflow-hidden'>
        <div className='bg-special p-4 flex flex-col gap-2 lg:flex-row lg:justify-between lg:p-5'>
          <h2 className='flex items-center gap-2'>
            <ConciergeBell
              size={20}
              strokeWidth={2}
            />
            {differenceInCalendarDays(
              booking.dateRange.endDate,
              booking.dateRange.startDate
            )}{' '}
            nights in a{' '}
            <span className='capitalize font-semibold'>
              {booking.roomId.type}
            </span>{' '}
            room
          </h2>
          <h3 className='flex items-center gap-1'>
            {formatDate(booking.dateRange.startDate, {
              dateStyle: 'medium',
            })}
            <Minus size={16} />
            {formatDate(booking.dateRange.endDate, {
              dateStyle: 'medium',
            })}
          </h3>
        </div>
        <ul className='p-4 flex flex-col gap-3 lg:p-8 lg:px-10'>
          <li className='flex items-center gap-3'>
            <User
              size={20}
              className='text-special'
            />
            <p className='text-sm md:text-base md:flex md:gap-1'>
              Juan I. Llaberia <Dot className='hidden md:block' />
              <span className='text-text-2'>juanillaberia200@gmail.com</span>
            </p>
          </li>
          <li className='flex items-center gap-3'>
            <MessageSquareText
              size={20}
              className='text-special'
            />
            {booking.observations ? (
              <p className='text-text-1'>{booking.observations}</p>
            ) : (
              <p className='text-text-2'>No observations</p>
            )}
          </li>
          <li className='flex items-center gap-3'>
            <Utensils
              size={20}
              className='text-special'
            />
            <p>Breakfast included? {booking.hasBreakfast ? 'Yes' : 'No'}</p>
          </li>
        </ul>
        <div className='flex p-4 justify-between items-center bg-orange-100 text-orange-800 dark:bg-orange-700/90 dark:text-orange-100 m-3 lg:mx-10 rounded-md'>
          <div className='flex gap-4'>
            <p className='flex gap-2 items-center font-medium'>
              <CircleDollarSign size={20} /> Total price
            </p>
            <p>{formatMoney(booking.totalPrice)}</p>
          </div>
          <p className='uppercase text-sm font-semibold'>
            {booking.isPaid ? 'paid' : 'not paid'}
          </p>
        </div>
        <p className='text-text-2 text-sm text-end p-4'>
          Booked {formatDate(booking.createdAt, { dateStyle: 'long' })}
        </p>
      </section>
      <footer className='flex flex-col gap-2 mt-5 lg:flex-row lg:justify-end'>
        <Button>Check in booking</Button>
        <Button variant='ghost'>
          <MoveLeft
            size={16}
            className='mr-3'
          />
          Go back
        </Button>
      </footer>
    </>
  );
};

export default BookingInfoPage;
