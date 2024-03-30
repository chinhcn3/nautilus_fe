import {AuthOptions} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import invariant from 'tiny-invariant';
import {ISupportedLoginProvider} from '@/common/constants';
import {getServerClientWithUserToken, serverClient} from '@/common/helpers/axios/server-client';
import {sessiondto_SessionResp} from '@/common/openapi';

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          redirect_uri: new URL('/api/auth/callback/google', process.env.FE_BASE_URL).toString()
        }
      }
    }),
    FacebookProvider({
      clientId: process.env.AUTH_FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.AUTH_FACEBOOK_CLIENT_SECRET as string
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({token}) {
      const beSession = token as sessiondto_SessionResp;
      invariant(beSession?.access_token?.token, 'No access_token from BE');
      const me = await getServerClientWithUserToken(
        beSession?.access_token?.token
      ).sessions.getMe();

      return {
        ...beSession,
        ...me.data,
        expires: String(beSession.access_token?.expires_at ?? '')
      };
    },

    async jwt({account, profile, token}) {
      // noinspection TypeScriptUnresolvedVariable
      if (token.access_token) return token;

      invariant(account, 'No account provided');
      invariant(profile, 'No profile provided');

      try {
        const provider = account.provider as ISupportedLoginProvider;

        type Method = keyof typeof serverClient.sessions

        const methods = {
          facebook: 'createFacebookSession' satisfies Method,
          google: 'createGoogleSession' satisfies Method
        } as const;

        const {data} = await serverClient.sessions[methods[provider]]({
          account,
          profile
        });

        invariant(data, 'BE doesnt return data');

        return data;
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log('Error while callback JWT', e);
        throw e;
      }
    }
  }
};
