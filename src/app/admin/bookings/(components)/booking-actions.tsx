'use client';

import Link from 'next/link';
import { Ban, EllipsisVertical, Eye } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { deleteBooking } from '@/lib/actions/bookings';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const BookingActions = ({ id }: { id: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger className='text-text-2'>
          <EllipsisVertical size={18} />
          <span className='sr-only'>Options</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem asChild>
            <Link href={`/admin/bookings/${id}`}>
              <Eye size={16} className='mr-2' /> View
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className='text-text-danger'>
            <DialogTrigger className='w-full'>
              <Ban size={16} className='mr-2' /> Cancel
            </DialogTrigger>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-start'>Cancel booking</DialogTitle>
        </DialogHeader>
        <DialogDescription className='text-text-2'>
          This will cancel this booking and delete all information related to
          it.{' '}
          <span className='font-semibold text-text-1'>
            This action is not reversible
          </span>
        </DialogDescription>
        <div className='flex justify-between mt-3'>
          <DialogClose asChild>
            <Button variant='ghost' size='sm'>
              Cancel
            </Button>
          </DialogClose>
          <Button
            isLoading={isLoading}
            onClick={async () => {
              setIsLoading(true);
              try {
                await deleteBooking(id);
                toast.success('Booking cancel successfully');
              } catch (err) {
                toast.error('Fail to cancel booking');
              } finally {
                setIsLoading(false);
              }
            }}
            variant='destructive'
            size='sm'
          >
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingActions;
