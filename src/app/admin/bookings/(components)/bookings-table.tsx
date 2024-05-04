import { Minus, MoveRight } from 'lucide-react';
import { formatDistanceToNowStrict, differenceInCalendarDays } from 'date-fns';

import Badge from '@/components/ui/badge';
import BookingActions from './booking-actions';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatMoney } from '@/utils/moneyFormatter';
import { formatDate } from '@/utils/dateFormatter';
import { getBookings } from '@/lib/actions/bookings';

type BookingType = {
  _id: string;
  totalPrice: number;
  hasBreakfast: boolean;
  isPaid: boolean;
  totalGuests: number;
  dateRange: {
    startDate: Date;
    endDate: Date;
  };
  status: string;
  roomId: string;
  guest: {
    name: string;
    email: string;
    phone: string;
    nationality: string;
  };
};

type BookingsTableType = {
  status: string;
  sort: string;
  page: string;
};

const BookingsTable = async ({ status, sort, page }: BookingsTableType) => {
  const bookings: BookingType[] = await getBookings({ status, sort, page });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Guest</TableHead>
          <TableHead>Dates</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bookings.length > 0 ? (
          bookings.map(booking => (
            <TableRow key={booking._id}>
              <TableCell className='flex flex-col gap-0.5'>
                <span>{booking.guest?.name}</span>
                <span className='text-sm text-text-2'>
                  {booking.guest?.email}
                </span>
              </TableCell>
              <TableCell>
                <span className='flex items-center gap-1.5'>
                  In {formatDistanceToNowStrict(booking.dateRange.startDate)}{' '}
                  <MoveRight size={16} />{' '}
                  {differenceInCalendarDays(
                    booking.dateRange.endDate,
                    booking.dateRange.startDate
                  )}{' '}
                  nights stay
                </span>
                <span className='flex items-center text-sm text-text-2'>
                  {formatDate(booking.dateRange.startDate, {
                    dateStyle: 'medium',
                  })}
                  <Minus size={16} />
                  {formatDate(booking.dateRange.endDate, {
                    dateStyle: 'medium',
                  })}
                </span>
              </TableCell>
              <TableCell>
                <div className='flex'>
                  <Badge
                    text={booking.status}
                    color={
                      booking.status === 'checked-in'
                        ? 'green'
                        : status === 'checked-out'
                        ? 'red'
                        : 'blue'
                    }
                    decorated
                  />
                </div>
              </TableCell>
              <TableCell>{formatMoney(Number(booking.totalPrice))}</TableCell>
              <TableCell className='text-end'>
                <BookingActions id={String(booking._id)} />
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={10} className='text-center py-9 text-text-2'>
              No results
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default BookingsTable;
