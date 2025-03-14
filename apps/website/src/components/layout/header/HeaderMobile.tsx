'use client';
import { cn } from '@platform/ui';
import { useEffect, useState } from 'react';
import IconMenu from '~icons/tabler/menu-2';
import IconX from '~icons/tabler/x';
import { HeaderItems } from './HeaderItems';
import { HeaderAuthButton } from './HeaderAuthButton';

export const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
    }
  }, [isOpen]);

  return (
    <>
      <div className="flex w-full justify-between items-center">
        {isOpen ? (
          <IconX className="size-6" onClick={toggleMenu} />
        ) : (
          <IconMenu className="size-6" onClick={toggleMenu} />
        )}

        <HeaderAuthButton />
      </div>

      <div
        className={cn(
          'transform space-y-3 transition-all py-3 container duration-300 fixed top-14 right-0 w-full h-dvh bg-secondary-50',
          !isOpen ? 'translate-x-full' : '-translate-x-0'
        )}
      >
        <HeaderItems onLinkClick={toggleMenu} />
      </div>
    </>
  );
};
