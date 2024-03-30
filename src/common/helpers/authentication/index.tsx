import {sessiondto_SessionResp} from '@/common/openapi';

export function getServerSession(): Promise<sessiondto_SessionResp> {
  const {authOptions} = require('./next-auth')
  return require('next-auth').getServerSession(authOptions)
}
