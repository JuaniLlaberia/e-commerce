import RoomsTable from './(components)/rooms-table';
import RoomsTabs from './(components)/rooms-table-tabs';
import {
  Pagination,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

type RoomsParamsType = {
  searchParams: {
    type: string;
    page: string;
    display: string;
  };
};

const RoomsPage = ({ searchParams }: RoomsParamsType) => {
  return (
    <>
      <header className='flex justify-between flex-col lg:flex-row items-start'>
        <h1 className='text-xl font-semibold mb-3 '>All Rooms</h1>
        <RoomsTabs display={searchParams.display} type={searchParams.type} />
      </header>
      <section className='mt-4'>
        <RoomsTable type={searchParams.type} page={searchParams.page} />
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

export default RoomsPage;
