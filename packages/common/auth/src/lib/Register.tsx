import { FormEvent } from 'react';
import { Button, TextField } from '@platform/ui';
import { useRegisterMutation } from '../queries/register.query';
import { useCookie } from '@platform/utils';

export const Register = () => {
  const { mutate, isPending } = useRegisterMutation({
    onSuccess(data) {
      useCookie.set('access_token', data.token);
    },
  });

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const name = formData.get('name') as string;

    mutate({ email, password, name });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="space-y-3">
        <TextField
          required
          autoFocus
          name="name"
          inputMode="text"
          placeholder="نام"
          autoComplete="name"
        />

        <TextField
          required
          autoFocus
          type="email"
          name="email"
          inputMode="email"
          placeholder="ایمیل"
          autoComplete="email"
        />

        <TextField
          required
          autoFocus
          type="password"
          name="password"
          inputMode="text"
          autoComplete="current-password"
          placeholder="پسورد"
        />

        <Button disabled={isPending} type="submit" block>
          ورود
        </Button>
      </form>
    </div>
  );
};
