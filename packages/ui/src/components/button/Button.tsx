import { ComponentPropsWithRef } from 'react';
import { cn } from '../../utils/cn';
import { VariantProps, cva } from 'class-variance-authority';

const buttonClasses = cva(
  'outline-none disabled:opacity-70 px-4 py-1 transition-all rounded-lg disabled:pointer-events-none',
  {
    variants: {
      size: {
        medium: '',
        large: '',
        xLarge: '',
      },
      block: {
        true: 'w-full',
        false: 'w-fit',
      },
      variant: {
        fill: 'bg-primary-500 hover:bg-primary-600 text-secondary-20',
        outline:
          'ring-1 hover:bg-primary-50 text-primary-500 hover:text-primary-600 hover:ring-primary-600 ring-primary-500',
        ghost: 'text-primary-500 hover:text-primary-600',
      },
    },
    defaultVariants: { variant: 'fill', block: true },
  }
);

interface IButtonProps
  extends ComponentPropsWithRef<'button'>,
    VariantProps<typeof buttonClasses> {}

export const Button = ({ className, variant, ...props }: IButtonProps) => {
  return (
    <button className={cn(buttonClasses({ variant }), className)} {...props} />
  );
};
