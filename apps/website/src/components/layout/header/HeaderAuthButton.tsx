'use client';
import { Button, useDialogStore } from '@platform/ui';
import { Register } from '@platform/auth';
import { memo } from 'react';

const MemoizedLogin = memo(Register);

export const HeaderAuthButton = () => {
  const openDialog = useDialogStore((state) => state.openDialog);

  return (
    <Button
      variant={'outline'}
      size={'small'}
      onClick={() =>
        openDialog({ title: 'ثبت نام', content: <MemoizedLogin /> })
      }
    >
      ورود
    </Button>
  );
};
