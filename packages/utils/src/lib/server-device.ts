'use server';
import { headers } from 'next/headers';
import { userAgent } from 'next/server';

export const useGetServerDevice = async () => {
  const { device } = userAgent({ headers: await headers() });
  return device;
};
