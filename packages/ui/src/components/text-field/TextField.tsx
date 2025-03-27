import { cn } from '../../utils/cn';
import { ComponentPropsWithRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const inputClasses = cva(
  'block peer w-full [&:user-invalid]:border-error [&:user-invalid]:text-error [&:user-invalid]:focus:border-error border outline-none border-secondary-300 focus:border-secondary-500 rounded-lg py-1.5 px-3 text-sm/6 text-secondary-900 transition-all',
  {
    variants: {
      size: {
        small: 'h-8',
        medium: 'h-10',
        large: 'h-12',
        xLarge: 'h-14',
      },
      block: {
        true: 'w-full',
        false: 'w-fit',
      },
    },
    defaultVariants: { size: 'medium' },
  }
);

interface ITextFieldProps
  extends Omit<ComponentPropsWithRef<'input'>, 'size'>,
    VariantProps<typeof inputClasses> {}

export const TextField = ({ className, size, ...props }: ITextFieldProps) => {
  return <input {...props} className={cn(inputClasses({ size }), className)} />;
};
