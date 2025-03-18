'use client';
import { ReactNode } from 'react';
import { Drawer, type DialogProps } from 'vaul';
import { cn } from '../../utils/cn';

type TProps = DialogProps & {
  trigger?: ReactNode;
  content?: ReactNode;
  contentClass?: string;
};

export const BottomSheet = ({
  trigger,
  content,
  contentClass,
  ...props
}: TProps) => {
  return (
    <Drawer.Root {...props}>
      <div className="sr-only">
        <Drawer.Title></Drawer.Title>
        <Drawer.Description></Drawer.Description>
      </div>

      <Drawer.Trigger>{trigger}</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-gray-100 h-fit fixed bottom-0 left-0 right-0 outline-none">
          <div className={cn('bg-white', contentClass)} children={content} />
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
