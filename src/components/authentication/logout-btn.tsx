import { LogOut } from 'lucide-react';
import { Button } from '../ui/button';

const LogoutBtn = () => {
  return (
    <Button
      variant='ghost'
      size='icon'
    >
      <LogOut size={20} />
    </Button>
  );
};

export default LogoutBtn;
