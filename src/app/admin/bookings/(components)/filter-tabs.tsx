'use client';

import { usePathname, useRouter } from 'next/navigation';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSetSearchParams } from '@/hooks/useSetSearchParams';

type BookingsTabsType = {
  status: string;
  sort: string;
};

const FilterSort = ({ status, sort }: BookingsTabsType) => {
  const router = useRouter();
  const pathname = usePathname();
  const createQueryString = useSetSearchParams();

  return (
    <div className='flex flex-col items-center gap-2 w-full lg:flex-row lg:w-auto'>
      <Tabs
        onValueChange={val => {
          router.push(pathname + '?' + createQueryString('status', val));
        }}
        defaultValue={status || 'all'}
      >
        <TabsList>
          <TabsTrigger className='text-[13px] lg:text-sm' value='all'>
            All
          </TabsTrigger>
          <TabsTrigger className='text-[13px] lg:text-sm' value='checked-out'>
            Checked out
          </TabsTrigger>
          <TabsTrigger className='text-[13px] lg:text-sm' value='checked-in'>
            Checked in
          </TabsTrigger>
          <TabsTrigger className='text-[13px] lg:text-sm' value='unconfirmed'>
            Unconfirmed
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <Select
        onValueChange={val => {
          router.push(pathname + '?' + createQueryString('sortBy', val));
        }}
        defaultValue={sort || 'createdAt-desc'}
      >
        <SelectTrigger className='m-0'>
          <SelectValue placeholder='Sort by date (recent first)' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='createdAt-desc'>
            Sort by date (recent first)
          </SelectItem>
          <SelectItem value='createdAt-asc'>
            Sort by date (last first)
          </SelectItem>
          <SelectItem value='totalPrice-desc'>
            Sort by amount (high first)
          </SelectItem>
          <SelectItem value='totalPrice-asc'>
            Sort by amount (high low)
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterSort;
