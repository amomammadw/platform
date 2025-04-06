'use client';

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';

export type SelectOption = {
  value: string | number;
  label: string;
};

export interface SelectProps {
  options: SelectOption[];
  value: SelectOption | null;
  onChange: (value: SelectOption) => void;
  placeholder?: string;
  className?: string;
}

export const Select = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option...',
  className = '',
}: SelectProps) => {
  return (
    <Listbox value={value} onChange={onChange}>
      <ListboxButton className={className}>
        {value?.label || placeholder}
      </ListboxButton>
      <ListboxOptions anchor="bottom">
        {options.map((option) => (
          <ListboxOption
            key={option.value}
            value={option}
            className="data-[focus]:bg-primary-100 transition-all cursor-pointer"
          >
            {option.label}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};
