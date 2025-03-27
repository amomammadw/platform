import { cn } from '@platform/ui';
import { HTMLAttributes } from 'react';

interface IProps extends HTMLAttributes<HTMLDivElement> {}

export const MainSection = ({
  className,
  title,
  children,
  ...props
}: IProps) => {
  return (
    <section className={cn('py-10', className)} {...props}>
      <h2 className="lg:text-3xl font-medium mb-7">{title}</h2>

      {children}
    </section>
  );
};
