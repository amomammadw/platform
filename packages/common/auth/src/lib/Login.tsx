import { Button, TextField } from '@platform/ui';

export const Login = () => {
  return (
    <div>
      <form className="space-y-6">
        <TextField autoFocus required placeholder="شماره موبایل" />

        <Button type="submit" block>
          ورود
        </Button>
      </form>
    </div>
  );
};
