import {AdminUsersContext} from '@/containers/dashboard/admin/users/context';
import {ContentWrapper} from '@/containers/dashboard/common/content-wrapper';
import List from '@mui/material/List';
import {AdminUser} from '@/containers/dashboard/admin/users/admin-user';
import {adminuserdto_UserResp} from '@/common/openapi';
import {PropsWithChildren} from 'react';
import {AdminUsersPagination} from '@/containers/dashboard/admin/users/pagination';
import {Filter} from '@/containers/dashboard/admin/users/filter';
import {AsyncView} from '@/components/view/async-view';

export function AdminUsersContainer() {
  return (
    <AdminUsersContext.Provider>
      <ContentWrapper>
        <Loading>
          <Filter />
          <ListAdminUsers />
          <AdminUsersPagination />
        </Loading>
      </ContentWrapper>
    </AdminUsersContext.Provider>
  );
}

function Loading({children}: PropsWithChildren<any>) {
  const state = AdminUsersContext.useSelector((state) => state.listUserState);
  return <AsyncView {...state}>{children}</AsyncView>;
}

function ListAdminUsers() {
  const adminUsers: Array<adminuserdto_UserResp> | undefined = AdminUsersContext.useSelector(
    (state) => state.listUserState.value?.data
  );
  return (
    <List sx={{minHeight: 320}}>
      {adminUsers?.map((adminUser) => (
        <AdminUser key={adminUser.id} adminUser={adminUser} />
      ))}
    </List>
  );
}
