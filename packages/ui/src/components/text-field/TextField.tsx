import { ComponentPropsWithRef } from 'react';

interface ITextFieldProps extends ComponentPropsWithRef<'input'> {}

export const TextField = (props: ITextFieldProps) => {
  return <input {...props} />;
};
