'use client';
import { Button, useDialogStore } from '@platform/ui';
import { Login } from '@platform/auth';
import { memo } from 'react';

const MemoizedLogin = memo(Login);

export const HeaderAuthButton = () => {
  const { openDialog } = useDialogStore();

  return (
    <Button
      variant={'outline'}
      size={'small'}
      onClick={() => openDialog({ title: 'ورود', content: <MemoizedLogin /> })}
    >
      ورود
    </Button>
  );
};
