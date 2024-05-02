import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';

const UserMenu = () => {
  return (
    <Button
      variant='ghost'
      className='flex items-center gap-4 px-2'
    >
      <div className='flex items-center gap-2'>
        <Avatar className='size-6'>
          <AvatarFallback>J</AvatarFallback>
          <AvatarImage />
        </Avatar>
        <h2 className='text-sm'>Juan I. Llaberia</h2>
      </div>
    </Button>
  );
};

export default UserMenu;
