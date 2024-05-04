import { useFormStatus } from 'react-dom';
import { Loader2 } from 'lucide-react';

import { Button } from './ui/button';

const SubmitButton = ({ children }: { children: string }) => {
  const { pending } = useFormStatus();

  return (
    <Button type='submit' disabled={pending}>
      <span className='flex items-center gap-4'>
        {pending ? <Loader2 size={18} className='animate-spin' /> : null}
        {children}
      </span>
    </Button>
  );
};

export default SubmitButton;
