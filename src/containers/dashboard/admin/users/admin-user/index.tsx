import type {adminuserdto_UserResp} from '@/common/openapi';
import {Avatar} from '@/components/user/avatar';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/system/Stack';
import {BanUser} from '@/containers/dashboard/admin/users/admin-user/ban-user';
import {UnbanUser} from '@/containers/dashboard/admin/users/admin-user/unban-user';
import {TUserStatus} from '@/common/constants/user-status';
import {ChangeRole} from '@/containers/dashboard/admin/users/admin-user/change-role';
import {canUpdateRoles, TUserRole, userRolesWithLocale} from '@/common/constants/user-role';
import {useProfileContext} from '@/containers/dashboard/layout-container/profile-context';
import {UpdateUser} from '@/containers/dashboard/admin/users/admin-user/update-user';

export function AdminUser(props: {adminUser: adminuserdto_UserResp}) {
  const {user} = useProfileContext();
  return (
    <ListItem
      secondaryAction={
        <Stack direction="row" spacing={1}>
          <UpdateUser adminUser={props.adminUser} />

          {canUpdateRoles.includes(user.s_role) && <ChangeRole adminUser={props.adminUser} />}

          {(props.adminUser.status as TUserStatus) === 'OK' ? (
            <BanUser adminUser={props.adminUser} />
          ) : (
            <UnbanUser adminUser={props.adminUser} />
          )}
        </Stack>
      }>
      <ListItemAvatar>
        <Avatar user={props.adminUser} />
      </ListItemAvatar>
      <ListItemText
        primary={props.adminUser.nick_name}
        secondary={`${props.adminUser.full_name} - ${props.adminUser.email} - SDT: ${
          props.adminUser.user_details?.phone || 'NaN'
        } - Role: ${userRolesWithLocale[props.adminUser.s_role as TUserRole]}`}
      />
    </ListItem>
  );
}
