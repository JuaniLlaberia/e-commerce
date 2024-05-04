import { getBookingById } from '@/lib/actions/bookings';

type BookingInfoProps = {
  params: {
    bookingId: string;
  };
};

const BookingInfoPage = async ({ params }: BookingInfoProps) => {
  const booking = await getBookingById(params.bookingId);

  return <section></section>;
};

export default BookingInfoPage;
