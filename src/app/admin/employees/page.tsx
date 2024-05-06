import EmployeesHeader from './(components)/employees-header';
import EmployeesTable from './(components)/employees-table';
import {
  Pagination,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

type BookingsParamsType = {
  searchParams: {
    status: string;
    search: string;
    page: string;
  };
};

const EmployeePage = ({
  searchParams: { status, search, page },
}: BookingsParamsType) => {
  return (
    <>
      <EmployeesHeader
        status={status}
        search={search}
      />
      <section className='mt-4'>
        <EmployeesTable
          page={page}
          search={search}
          status={status}
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

export default EmployeePage;
