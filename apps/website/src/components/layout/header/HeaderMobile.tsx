'use client';
import { cn } from '@platform/ui';
import { useState } from 'react';
import IconMenu from '~icons/tabler/menu-2';
import IconX from '~icons/tabler/x';
import { HeaderItems } from './HeaderItems';

export const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      {isOpen ? (
        <IconX onClick={toggleMenu} />
      ) : (
        <IconMenu onClick={toggleMenu} />
      )}

      <div
        className={cn(
          'transform transition-all py-3 container duration-500 fixed top-14 right-0 w-full h-dvh bg-secondary-100',
          !isOpen ? 'translate-x-full' : '-translate-x-0'
        )}
      >
        <HeaderItems onLinkClick={toggleMenu} />
      </div>
    </>
  );
};
