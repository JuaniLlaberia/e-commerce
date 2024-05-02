import LogoutBtn from '@/components/authentication/logout-btn';
import ThemeButton from '@/components/theme-button';
import UserMenu from '@/components/user-menu';

const Navbar = () => {
  return (
    <nav className='bg-background-2 flex gap-2 justify-end items-center w-full h-14 px-4 border-b border-border-1'>
      <UserMenu />
      <ThemeButton />
      <LogoutBtn />
    </nav>
  );
};

export default Navbar;
