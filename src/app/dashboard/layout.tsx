import {DashboardLayoutContainer} from 'src/containers/dashboard/layout-container';
import {getServerSession} from '@/common/helpers/authentication';
import {redirect} from 'next/navigation';
import invariant from 'tiny-invariant';
import {PropsWithChildren, Suspense} from 'react';
import {UserTransform} from '@/common/helpers/transforms/user';

export default async function DashboardLayout({children}: PropsWithChildren<any>) {
  try {
    const session = await getServerSession();
    invariant(session.user, 'No session user provided');
    const user = UserTransform.transformUser(session.user);
    return (
      <Suspense>
        <DashboardLayoutContainer user={user}>{children}</DashboardLayoutContainer>;
      </Suspense>
    );
  } catch (e) {
    redirect('/');
  }
}
