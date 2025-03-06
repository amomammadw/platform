import { ComponentPropsWithRef } from 'react';

interface IInputProps extends ComponentPropsWithRef<'input'> {}

export const TextField = ({ ...props }: IInputProps) => {
  return <input {...props} />;
};
