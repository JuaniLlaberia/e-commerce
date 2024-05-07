import Badge from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, CalendarPlus, Dot, MoveRight, Search } from 'lucide-react';

const FrontDeskPage = () => {
  return (
    <>
      <h1 className='text-lg font-semibold lg:text-xl mb-3 lg:mb-5'>
        Front Desk
      </h1>
      <section className='bg-background-2 p-4 rounded-md min-h-56 max-h-72'>
        <h2 className='font-medium mb-3'>Today activity</h2>
        <ul className='mb-2'>
          <li className='flex items-center justify-between border-b border-border-1 py-2'>
            <div className='flex items-center'>
              <Badge
                text='arriving'
                color='green'
              />
              <p className='text-sm'>Juan I. Llaberia</p>
              <Dot />
              <p className='text-sm'>7 nights</p>
            </div>
            <Button
              size='icon'
              variant='ghost'
            >
              <MoveRight size={20} />
            </Button>
          </li>
        </ul>
      </section>
      <section>
        <ul className='flex gap-2 mt-3'>
          <li className='bg-background-2 p-4 rounded-md w-full flex items-center gap-3'>
            <div className='p-2 bg-slate-300 rounded-full'>
              <Calendar size={25} />
            </div>
            <p className='flex flex-col gap-0.5'>
              <span className='text-xs uppercase text-text-2'>Check ins</span>
              <span className='font-semibold'>10</span>
            </p>
          </li>
          <li className='bg-background-2 p-4 rounded-md w-full flex items-center gap-3'>
            <div className='p-2 bg-slate-300 rounded-full'>
              <Calendar size={25} />
            </div>
            <p className='flex flex-col gap-0.5'>
              <span className='text-xs uppercase text-text-2'>Check outs</span>
              <span className='font-semibold'>10</span>
            </p>
          </li>
        </ul>
      </section>
      <section className='my-3'>
        <h2 className='font-medium mt-4 mb-3'>Quick actions</h2>
        <div className='flex flex-col gap-1.5'>
          <Button className='w-full bg-background-2 text-text-1 hover:bg-background-2 hover:opacity-85'>
            <CalendarPlus
              size={20}
              className='mr-3 text-special'
            />{' '}
            New booking
          </Button>
          <Button className='w-full bg-background-2 text-text-1 hover:bg-background-2 hover:opacity-85'>
            <Search
              size={20}
              className='mr-3 text-special'
            />{' '}
            Find booking
          </Button>
          <Button className='w-full bg-background-2 text-text-1 hover:bg-background-2 hover:opacity-85'>
            <Search
              size={20}
              className='mr-3 text-special'
            />{' '}
            Find booking
          </Button>
        </div>
      </section>
    </>
  );
};

export default FrontDeskPage;
