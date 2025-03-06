import { ComponentPropsWithRef } from 'react';

interface IButtonProps extends ComponentPropsWithRef<'button'> {}

export const Button = ({ ...props }: IButtonProps) => {
  return <button {...props} />;
};
