'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Grid2X2, Plus, TableProperties } from 'lucide-react';

import RoomsForm from './rooms-form';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useSetSearchParams } from '@/hooks/useSetSearchParams';

type RoomsTabsType = {
  display: string;
  type: string;
};

const RoomsTabs = ({ display, type }: RoomsTabsType) => {
  const pathname = usePathname();
  const router = useRouter();
  const createQueryString = useSetSearchParams();

  return (
    <div className='flex items-start flex-col lg:flex-row gap-4 w-full lg:w-auto'>
      <div className='w-full flex items-start gap-4 lg:w-auto'>
        <Tabs
          onValueChange={val => {
            router.push(pathname + '?' + createQueryString('display', val));
          }}
          defaultValue={display || 'table'}
        >
          <TabsList>
            <TabsTrigger value='table'>
              <TableProperties size={18} />
            </TabsTrigger>
            <TabsTrigger value='grid'>
              <Grid2X2 size={18} />
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Select
          defaultValue={type}
          onValueChange={val => {
            router.push(pathname + '?' + createQueryString('type', val));
          }}
        >
          <SelectTrigger className='m-0 w-full min-w-[200px]'>
            <SelectValue placeholder='Filter by room type' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='all'>All</SelectItem>
            <SelectItem value='junior'>Junior</SelectItem>
            <SelectItem value='standard'>Standard</SelectItem>
            <SelectItem value='suite'>Suite</SelectItem>
            <SelectItem value='luxury'>Luxury</SelectItem>
            <SelectItem value='family'>Family</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button size='sm' className='w-full lg:w-auto'>
            <Plus size={18} className='mr-2' /> New Room
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className='text-start'>New Room</SheetTitle>
          </SheetHeader>
          <RoomsForm />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default RoomsTabs;
