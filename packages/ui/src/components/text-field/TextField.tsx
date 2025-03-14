import { cn } from '../../utils/cn';
import { ComponentPropsWithRef } from 'react';
import { Input as HeadlessInput } from '@headlessui/react';

interface ITextFieldProps extends ComponentPropsWithRef<'input'> {}

export const TextField = ({ className, ...props }: ITextFieldProps) => {
  return (
    <HeadlessInput
      {...props}
      className={cn(
        'block peer w-full [&:user-invalid]:border-error [&:user-invalid]:text-error [&:user-invalid]:focus:border-error border outline-none border-secondary-300 focus:border-secondary-700 rounded-lg py-1.5 px-3 text-sm/6 text-secondary-900 transition-all',
        className
      )}
    />
  );
};
