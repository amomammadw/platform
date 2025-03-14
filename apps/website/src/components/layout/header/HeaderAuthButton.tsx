'use client';
import { Button, useDialogStore } from '@platform/ui';
import { Login } from '@platform/auth';

export const HeaderAuthButton = () => {
  const { openDialog } = useDialogStore();

  return (
    <Button
      variant={'outline'}
      onClick={() => openDialog({ title: 'ورود', content: <Login /> })}
    >
      ورود
    </Button>
  );
};
