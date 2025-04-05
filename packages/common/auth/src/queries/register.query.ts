import { api } from '@platform/utils';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

interface IRegisterPayload {
  email: string;
  name: string;
  password: string;
}

interface IRegisterResponse {
  token: string;
}

export const useRegisterMutation = (
  options?: UseMutationOptions<IRegisterResponse, void, IRegisterPayload>
) =>
  useMutation({
    mutationKey: ['register'],
    mutationFn: async (data) =>
      await api('/api/register', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
    ...options,
  });
