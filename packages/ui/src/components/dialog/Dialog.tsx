'use client';
import {
  Dialog as HeadlessDialog,
  DialogPanel as HeadlessDialogPanel,
  DialogTitle as HeadlessDialogTitle,
} from '@headlessui/react';
import { useDialogStore } from './useDialog';

export const Dialog = () => {
  const { isOpen, title, content, closeDialog } = useDialogStore();

  return (
    <>
      <HeadlessDialog
        as="div"
        open={isOpen}
        onClose={closeDialog}
        className="relative z-10 focus:outline-none"
      >
        <div className="fixed bg-black/50 inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <HeadlessDialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <HeadlessDialogTitle
                as="h3"
                className="text-base/7 font-medium text-black"
              >
                {title}
              </HeadlessDialogTitle>

              <div className="mt-2 text-sm/6 text-black/50">{content}</div>
            </HeadlessDialogPanel>
          </div>
        </div>
      </HeadlessDialog>
    </>
  );
};
