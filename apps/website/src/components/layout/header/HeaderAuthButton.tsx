'use client';
import { Button, useDialogStore } from '@platform/ui';
import { Login } from '@platform/auth';

export const HeaderAuthButton = () => {
  const { openDialog } = useDialogStore();

  return (
    <Button
      onClick={() => openDialog({ title: 'ورود', content: <Login /> })}
      className="font-light transition-all hover:text-secondary-700"
    >
      ورود
    </Button>
  );
};
