import {AxiosHttpRequest} from '@/common/openapi/core/AxiosHttpRequest';
import axios from 'axios';
import {getCachedSession} from '@/common/helpers/authentication/session-instance';

export const httpClient = new AxiosHttpRequest({
  CREDENTIALS: 'omit',
  VERSION: '0.1',
  WITH_CREDENTIALS: false,
  BASE: process.env.NEXT_PUBLIC_BE_BASE_URL + '/api/v1'
});

axios.interceptors.request.use(async (config) => {
  const isSendToBE = config.url?.startsWith(process.env.NEXT_PUBLIC_BE_BASE_URL as string);

  if (!isSendToBE) return config;

  const session = await getCachedSession();

  if (session?.access_token?.token) {
    config.headers['Authorization'] = `Bearer ${session.access_token.token}`;
  }
  return config;
});
