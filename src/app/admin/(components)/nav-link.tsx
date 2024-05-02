'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactElement } from 'react';

type NavLinkProps = {
  label: string;
  href: string;
  icon: ReactElement;
  closeFn: () => void;
};

const NavLink = ({ label, href, icon, closeFn }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = `/${pathname.split('/').at(-1)}` === `/${href}`;

  return (
    <Link
      href={href}
      onClick={closeFn}
      className={`flex items-center gap-4 p-2 w-full hover:bg-special-hover rounded-lg transition-colors
        ${
          isActive
            ? 'bg-special-hover text-text-1'
            : 'bg-transparent text-text-2'
        }

      `}
    >
      <span className={`${isActive ? 'text-special' : 'text-text-2'}`}>
        {icon}
      </span>
      <span>{label}</span>
    </Link>
  );
};

export default NavLink;
