'use client';
import { Drawer } from 'vaul';

export default function BottomSheet() {
  return (
    <Drawer.Root>
      <Drawer.Trigger>Open Drawer</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-gray-100 h-fit fixed bottom-0 left-0 right-0 outline-none">
          <div className="p-4 bg-white">{/* Content */}</div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
