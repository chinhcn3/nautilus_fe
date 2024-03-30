'use client';

import {UserItem} from '@/containers/dashboard/following-users/user-item';
import {ContentWrapper} from '@/containers/dashboard/common/content-wrapper';
import {AsyncView} from '@/components/view/async-view';
import {FollowingUsersContext} from '@/containers/dashboard/following-users/context';
import List from '@mui/material/List';
import {Pagination} from '@/components/mui/pagination';

export function FollowingUsers() {
  return (
    <FollowingUsersContext.Provider>
      <ContentWrapper>
        <ListUsersAsyncView />
      </ContentWrapper>
    </FollowingUsersContext.Provider>
  );
}

function ListUsersAsyncView() {
  const listFollowingUserState = FollowingUsersContext.useSelector(
    (state) => state.listFollowingUserState
  );

  const isLastPage = FollowingUsersContext.useSelector((state) => state.isLastPage);

  return (
    <AsyncView {...listFollowingUserState} value={listFollowingUserState.value?.users}>
      <List sx={{minHeight: 320}}>
        {listFollowingUserState.value?.users?.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </List>

      <Pagination isLastPage={isLastPage} />
    </AsyncView>
  );
}
