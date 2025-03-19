'use client';
import { Switch as SwitchPrimitive } from '@headlessui/react';
import { useState } from 'react';

export const Switch = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <SwitchPrimitive
      dir="ltr"
      checked={enabled}
      onChange={setEnabled}
      className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-black/10 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-black data-[checked]:bg-primary-500"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-secondary-900 ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
      />
    </SwitchPrimitive>
  );
};
