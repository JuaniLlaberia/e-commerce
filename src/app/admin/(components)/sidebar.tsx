'use client';

import { useState } from 'react';
import {
  ConciergeBell,
  CalendarRange,
  BarChart3,
  TicketPercent,
  Tags,
  Settings,
  BriefcaseBusiness,
  Users,
  Menu,
  Bed,
} from 'lucide-react';

import NavLink from './nav-link';
import { Button } from '@/components/ui/button';

const dailyOperations = [
  {
    link: 'front-desk',
    icon: <ConciergeBell size={22} strokeWidth={1} />,
    text: 'Front Desk',
  },
  {
    link: 'bookings',
    icon: <CalendarRange size={22} strokeWidth={1} />,
    text: 'Bookings',
  },
  {
    link: 'guests',
    icon: <Users size={22} strokeWidth={1} />,
    text: 'Guests',
  },
];

const sales = [
  {
    link: 'finances',
    icon: <BarChart3 size={22} strokeWidth={1} />,
    text: 'Finances',
  },
  {
    link: 'discount',
    icon: <TicketPercent size={22} strokeWidth={1} />,
    text: 'Discount',
  },
  {
    link: 'rates',
    icon: <Tags size={22} strokeWidth={1} />,
    text: 'Rates',
  },
];

const administration = [
  {
    link: 'rooms',
    icon: <Bed size={22} strokeWidth={1} />,
    text: 'Rooms',
  },
  {
    link: 'employees',
    icon: <BriefcaseBusiness size={22} strokeWidth={1} />,
    text: 'Employees',
  },
  {
    link: 'settings',
    icon: <Settings size={22} strokeWidth={1} />,
    text: 'Settings',
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant='ghost'
        size='sm'
        onClick={() => setIsOpen(true)}
        className='absolute top-2 px-3 left-1 md:hidden'
      >
        <Menu />
      </Button>
      <aside
        className={`${
          isOpen ? '' : '-translate-x-[300px] md:translate-x-0'
        } transition-transform duration-300 fixed h-screen top-0 left-0 z-40 md:relative bg-background-2 w-[300px] py-3 border-r border-border-1`}
      >
        <nav className='h-full flex flex-col'>
          <h1 className='text-center font-bold text-lg'>LOGO</h1>
          <section className='flex-1 p-3 py-6'>
            <h2 className='text-sm font-semibold text-text-1 my-3'>
              Daily Operations
            </h2>
            <ul className='flex flex-col gap-1'>
              {dailyOperations.map(link => (
                <li key={link.link}>
                  <NavLink
                    href={link.link}
                    icon={link.icon}
                    label={link.text}
                    closeFn={() => setIsOpen(false)}
                  />
                </li>
              ))}
            </ul>
            <h2 className='text-sm font-semibold text-text-1 my-3'>
              Transactional
            </h2>
            <ul className='flex flex-col gap-1'>
              {sales.map(link => (
                <li key={link.link}>
                  <NavLink
                    href={link.link}
                    icon={link.icon}
                    label={link.text}
                    closeFn={() => setIsOpen(false)}
                  />
                </li>
              ))}
            </ul>
            <h2 className='text-sm font-semibold text-text-1 my-3'>
              Administration
            </h2>
            <ul className='flex flex-col gap-1'>
              {administration.map(link => (
                <li key={link.link}>
                  <NavLink
                    href={link.link}
                    icon={link.icon}
                    label={link.text}
                    closeFn={() => setIsOpen(false)}
                  />
                </li>
              ))}
            </ul>
          </section>
        </nav>
      </aside>
      {isOpen && (
        <div
          className='w-full h-full absolute md:hidden top-0 left-0 z-30 bg-background-overlay backdrop-blur-[1.5px]'
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
