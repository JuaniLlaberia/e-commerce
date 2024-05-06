'use client';

import { EllipsisVertical, Eye, Trash } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { deleteEmployee } from '@/lib/actions/employees';
import { EmployeeType } from './employees-table';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const EmployeesActions = ({ employee }: { employee: EmployeeType }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <Sheet
      open={isSheetOpen}
      onOpenChange={setIsSheetOpen}
    >
      <Dialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      >
        <DropdownMenu>
          <DropdownMenuTrigger>
            <EllipsisVertical
              size={18}
              className='text-text-2'
            />
            <span className='sr-only'>Options</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setIsSheetOpen(true)}>
              <Eye
                size={16}
                className='mr-2'
              />
              Information
            </DropdownMenuItem>
            <DropdownMenuItem
              className='text-text-danger'
              onClick={() => setIsDialogOpen(true)}
            >
              <Trash
                size={16}
                className='mr-2'
              />
              Remove
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className='text-start'>Remove employee</DialogTitle>
          </DialogHeader>
          <DialogDescription className='text-text-2'>
            This will delete this employee and all information related to it.{' '}
            <span className='font-semibold text-text-1'>
              This action is not reversible
            </span>
          </DialogDescription>
          <div className='flex justify-between mt-3'>
            <DialogClose asChild>
              <Button
                variant='ghost'
                size='sm'
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              onClick={async () => {
                try {
                  await deleteEmployee(employee._id);
                  toast.success('Employee deleted successfully');
                } catch (err) {
                  toast.error('Failed to delete employee');
                } finally {
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
        <Avatar className='size-16'>
          <AvatarFallback>J</AvatarFallback>
        </Avatar>
        {employee.email}
        {employee.fullName}
        {employee.status}
        {employee.type}
      </SheetContent>
    </Sheet>
  );
};

export default EmployeesActions;
