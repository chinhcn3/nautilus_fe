import Dialog from '@mui/material/Dialog';
import useMethods from 'react-use/lib/useMethods';
import {adminuserdto_UserResp} from '@/common/openapi';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import {AdminUsersContext} from '@/containers/dashboard/admin/users/context';
import {LoadingButton} from '@mui/lab';
import DialogTitle from '@mui/material/DialogTitle';

export function UnbanUser({adminUser}: {adminUser: adminuserdto_UserResp}) {
  const unbanState = AdminUsersContext.useSelector((state) => state.unbanUserState);
  const unban = AdminUsersContext.useSelector((state) => state.unbanUser);

  const [state, methods] = useMethods(
    (state) => ({
      onClick: () => ({...state, open: true}),
      onClose: () => ({...state, open: false})
    }),
    {
      open: false
    }
  );

  return (
    <>
      <Button variant={'outlined'} size={'small'} color={'secondary'} onClick={methods.onClick}>
        Unban
      </Button>
      <Dialog open={state.open} onClose={methods.onClose}>
        <DialogTitle>Are you sure to unban this user?</DialogTitle>
        <DialogActions>
          <Button onClick={methods.onClose}>Cancel</Button>
          <LoadingButton
            loading={unbanState.loading}
            disabled={unbanState.loading}
            onClick={() => unban(adminUser.id!).then(methods.onClose)}>
            Unban
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
