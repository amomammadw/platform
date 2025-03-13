import { Button as HeadlessButton } from '@headlessui/react';
import { ComponentPropsWithRef } from 'react';

interface IButtonProps extends ComponentPropsWithRef<'button'> {}

export const Button = (props: IButtonProps) => {
  return <HeadlessButton {...props} />;
};
