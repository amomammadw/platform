import { useMutation, UseMutationOptions } from '@tanstack/react-query';

interface ILoginPayload {
  email: string;
  password: string;
}

export const useLoginMutation = (
  options?: UseMutationOptions<void, void, ILoginPayload>
) =>
  useMutation({
    mutationKey: ['login'],
    mutationFn: async (data) => {
      console.log(data);
    },
    ...options,
  });
