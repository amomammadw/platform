import { FormEvent } from 'react';
import { Button, TextField } from '@platform/ui';
import { useLoginMutation } from '../queries/login.query';

export const Login = () => {
  const { mutate, isPending } = useLoginMutation();

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    mutate({ email, password });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="space-y-3">
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

        <Button type="submit" block>
          ورود
        </Button>
      </form>
    </div>
  );
};
