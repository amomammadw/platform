import { Button, TextField } from '@platform/ui';

export const Login = () => {
  return (
    <div>
      <form className="space-y-3">
        <TextField
          autoFocus
          required
          inputMode="numeric"
          placeholder="شماره موبایل"
        />

        <Button type="submit" block>
          ورود
        </Button>
      </form>
    </div>
  );
};
