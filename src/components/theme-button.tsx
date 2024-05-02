'use client';

import { Monitor, Moon, Sun, Palette } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const ThemeButton = () => {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          variant='ghost'
          size='icon'
        >
          <Palette size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => setTheme('light')}
          className={`flex items-center gap-3 my-1 ${
            theme === 'light' ? 'bg-background-hover-2' : ''
          }`}
        >
          <Sun size={19} />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('dark')}
          className={`flex items-center gap-3 my-1 ${
            theme === 'dark' ? 'bg-background-hover-2' : ''
          }`}
        >
          <Moon size={19} />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('system')}
          className={`flex items-center gap-3 my-1 ${
            theme === 'system' ? 'bg-background-hover-2' : ''
          }`}
        >
          <Monitor size={19} />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeButton;
