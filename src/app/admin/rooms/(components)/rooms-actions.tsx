'use client';

import { Copy, EllipsisVertical, Pencil, Trash } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

import RoomsForm, { RoomType } from './rooms-form';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { deleteRoom, duplicateRoom } from '@/lib/actions/rooms';
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

const RoomsActions = ({ room }: { room: RoomType }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Sheet>
      <Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger className='text-text-2'>
            <span className='sr-only'>Options</span>
            <EllipsisVertical size={18} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={async () => duplicateRoom(room)}>
              <Copy size={16} className='mr-2' /> Duplicate
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <SheetTrigger className='w-full'>
                <Pencil size={16} className='mr-2' /> Modify
              </SheetTrigger>
            </DropdownMenuItem>
            <DialogTrigger asChild>
              <DropdownMenuItem className='text-text-danger'>
                <Trash size={16} className='mr-2' /> Remove
              </DropdownMenuItem>
            </DialogTrigger>
          </DropdownMenuContent>
        </DropdownMenu>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className='text-start'>Remove room</DialogTitle>
          </DialogHeader>
          <DialogDescription className='text-text-2'>
            This will remove this room and delete all information related to it.{' '}
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
                  await deleteRoom(room._id);
                  toast.success('Room removed successfully');
                } catch (err) {
                  toast.error('Fail to remove room');
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
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Room</SheetTitle>
        </SheetHeader>
        <RoomsForm room={room} />
      </SheetContent>
    </Sheet>
  );
};

export default RoomsActions;
