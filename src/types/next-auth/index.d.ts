import {sessiondto_MeResp, sessiondto_SessionResp} from '../../common/openapi';
import {Merge} from 'type-fest';

type CombinedSession = Merge<sessiondto_SessionResp, sessiondto_MeResp>;

declare module 'next-auth/src/core/types' {
  export interface Session extends CombinedSession {}
}

declare module 'next-auth' {
  export interface Session extends CombinedSession {}
}
