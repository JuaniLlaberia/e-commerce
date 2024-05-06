'use client';

import { Plus, Search } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { useSetSearchParams } from '@/hooks/useSetSearchParams';

type EmployeeHeaderType = {
  search: string;
  status: string;
};

const EmployeesHeader = ({ search, status }: EmployeeHeaderType) => {
  const pathname = usePathname();
  const router = useRouter();
  const createQueryString = useSetSearchParams();

  const setSearch = useDebouncedCallback(value => {
    router.push(pathname + '?' + createQueryString('search', value));
  }, 1000);

  return (
    <header className='flex flex-col items-start w-full lg:items-end'>
      <div className='flex w-full justify-between'>
        <h1 className='text-xl font-semibold mb-4'>Employees </h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button size='sm'>
              <Plus
                size={18}
                className='mr-2'
              />
              New employee
            </Button>
          </SheetTrigger>
          <SheetContent></SheetContent>
        </Sheet>
      </div>

      <div className='lg:flex lg:items-center lg:gap-5 lg:justify-end w-full lg:w-auto'>
        <Label className='w-full'>
          <span className='sr-only'>Search users</span>
          <Input
            defaultValue={search || ''}
            className='w-full bg-background-2 mb-2 lg:min-w-[400px]'
            icon={<Search size={16} />}
            placeholder='Search my email or name'
            onChange={e => setSearch(e.target.value)}
          />
        </Label>

        <Tabs
          defaultValue={status || 'all'}
          className='w-full'
          onValueChange={val => {
            router.push(pathname + '?' + createQueryString('status', val));
          }}
        >
          <TabsList className='w-full'>
            <TabsTrigger
              value='all'
              className='w-full'
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value='active'
              className='w-full'
            >
              Active
            </TabsTrigger>
            <TabsTrigger
              className='w-full'
              value='inactive'
            >
              Inactive
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </header>
  );
};

export default EmployeesHeader;
