import {ApiError, dto_ErrorResp} from '@/common/openapi';
import {Merge} from 'type-fest';

export type TBackendError = Merge<ApiError, {body: dto_ErrorResp}>;

function isBackendError(e: unknown): e is TBackendError {
  if (!(e instanceof ApiError)) return false;
  return typeof e.body === 'object' && 'errors' in e.body;
}

export function getErrorMessage(e: unknown): string {
  let message: string | undefined = '';

  if (isBackendError(e)) {
    message = e.body?.errors?.[0]?.detail;
  }

  if (!message && e instanceof Error) {
    message = e.message;
  }

  return message ?? '';
}
