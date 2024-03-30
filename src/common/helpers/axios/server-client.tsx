import {AxiosClient} from '@/common/openapi';

const base =
  process.env.NEXT_PHASE === 'phase-production-build'
    ? process.env.NEXT_PUBLIC_BE_BASE_URL
    : process.env.BE_BASE_URL;

export const serverClient = new AxiosClient({
  BASE: new URL('/api/v1', base).toString(),
  USERNAME: process.env.BE_BASIC_AUTH_USERNAME,
  PASSWORD: process.env.BE_BASIC_AUTH_PASSWORD
});

export const getServerClientWithUserToken = (token: string) =>
  new AxiosClient({
    BASE: new URL('/api/v1', base).toString(),
    HEADERS: {
      Authorization: `Bearer ${token}`
    }
  });
