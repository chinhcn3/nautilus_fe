import NextAuth from 'next-auth';
import {authOptions} from '@/common/helpers/authentication/next-auth';

const handler = NextAuth(authOptions);

// noinspection JSUnusedGlobalSymbols
export {handler as GET, handler as POST};
