import Link from 'next/link';
import { Plus } from 'lucide-react';

import BookingsTable from './(components)/bookings-table';
import FilterSort from './(components)/filter-tabs';
import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

type BookingsParamsType = {
  searchParams: {
    status: string;
    sortBy: string;
    page: string;
  };
};

const BookingsPage = async ({ searchParams }: BookingsParamsType) => {
  return (
    <>
      <header>
        <div className='flex items-center justify-between'>
          <h1 className='text-xl font-semibold'>All Bookings</h1>
          <Link href='/admin/bookings/new'>
            <Button size='sm'>
              <Plus size={18} className='mr-2' /> Create a booking
            </Button>
          </Link>
        </div>
        <div className='flex flex-col justify-end items-center gap-3 lg:flex-row mt-5 lg:mt-3'>
          <FilterSort status={searchParams.status} sort={searchParams.sortBy} />
        </div>
      </header>
      <section className='mt-4'>
        <BookingsTable
          status={searchParams.status}
          sort={searchParams.sortBy}
          page={searchParams.page}
        />
      </section>
      <footer className='flex items-center justify-between w-full py-1 px-3'>
        <p className='text-sm text-text-2'>Page 1 of 1</p>
        <Pagination className='mt-2 gap-2'>
          <PaginationPrevious />
          <PaginationNext />
        </Pagination>
      </footer>
    </>
  );
};

export default BookingsPage;
