import { cn } from '@platform/ui';
import { HTMLAttributes } from 'react';

interface IProps extends HTMLAttributes<HTMLDivElement> {}

export const MainSection = ({ className, ...props }: IProps) => {
  return <section className={cn('py-10', className)} {...props} />;
};
