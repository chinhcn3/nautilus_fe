import {getSession, useSession} from 'next-auth/react';
import {sessiondto_ConfigResp, sessiondto_SessionResp} from '@/common/openapi';

export let useSessionInstance: ReturnType<typeof useSession>;
export let session: sessiondto_SessionResp | null = null;

export function SessionInstance() {
  useSessionInstance = useSession();
  session = useSessionInstance.data as sessiondto_SessionResp;
  return null;
}

export async function getCachedSession(): Promise<sessiondto_SessionResp | null> {
  if (session) return session;
  session = (await getSession()) as sessiondto_SessionResp | null;
  return session;
}

export async function setCachedSession(
  newSession: sessiondto_SessionResp | null
): Promise<sessiondto_SessionResp | null> {
  session = newSession;
  return session;
}

export function useSessionConfig(): sessiondto_ConfigResp | undefined {
  return useSession()?.data?.config;
}
