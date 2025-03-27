import { api } from '@platform/utils';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

interface IRegisterPayload {
  email: string;
  name: string;
  password: string;
}

export const useRegisterMutation = (
  options?: UseMutationOptions<void, void, IRegisterPayload>
) =>
  useMutation({
    mutationKey: ['register'],
    mutationFn: async (data) => {
      await api('/api/register', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    },
    ...options,
  });
