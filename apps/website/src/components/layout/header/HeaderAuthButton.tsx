'use client';
import { Button, useDialogStore } from '@platform/ui';
import { Login } from '@platform/auth';

export const HeaderAuthButton = () => {
  const { openDialog } = useDialogStore();

  return (
    <Button
      onClick={() => openDialog({ title: 'ورود', content: <Login /> })}
      className="text-white font-light transition-all hover:text-slate-200"
    >
      ورود
    </Button>
  );
};
