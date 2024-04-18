import {HomeContainer} from 'src/containers/home-page';
import {serverClient} from '@/common/helpers/axios/server-client';

export default async function Home() {
  try {
    const home = await serverClient.contents.getHomeContent();
    return <HomeContainer home={home} />;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('ApiError', JSON.stringify(e));
    return null;
  }
}

export const revalidate = 180; // 3 minutes
