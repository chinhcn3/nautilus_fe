import {Merge} from 'type-fest';
import {sessiondto_MeResp, sessiondto_SessionResp} from '../../common/openapi';

export type CombinedSession = Merge<sessiondto_SessionResp, sessiondto_MeResp>;
