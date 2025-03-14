import { cn } from '../../utils/cn';
import { ComponentPropsWithRef } from 'react';
import { Input as HeadlessInput } from '@headlessui/react';

interface ITextFieldProps extends ComponentPropsWithRef<'input'> {}

export const TextField = (props: ITextFieldProps) => {
  return (
    <HeadlessInput
      {...props}
      className={cn(
        'block w-full border outline-none border-secondary-300 focus:border-secondary-700 rounded-lg py-1.5 px-3 text-sm/6 text-secondary-900 transition-all'
      )}
    />
  );
};
