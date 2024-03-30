import Button from '@mui/material/Button';
import {adminuserdto_UpdateUserPointsReq, adminuserdto_UserResp} from '@/common/openapi';
import useBoolean from 'react-use/lib/useBoolean';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Form from '@rjsf/mui';
import {updateUserSchema} from '@/containers/dashboard/admin/users/admin-user/update-user/update-user-schema';
import validator from '@rjsf/validator-ajv8';
import {useUpdateState} from '@/common/hooks/useUpdateState';
import {LoadingButton} from '@mui/lab';
import {AdminUsersContext} from '@/containers/dashboard/admin/users/context';

export function UpdateUser({adminUser}: {adminUser: adminuserdto_UserResp}) {
  const [open, toggle] = useBoolean(false);
  const [req, setReq] = useUpdateState<adminuserdto_UpdateUserPointsReq>({
    user_id: adminUser.id,
    reason: '',
    points_change: 0,
    kudos_change: 0
  });

  const updatePoints = AdminUsersContext.useSelector((state) => state.updatePoints);
  const updatePointsState = AdminUsersContext.useSelector((state) => state.updatePointsState);

  return (
    <>
      <Button variant={'outlined'} size={'small'} color={'secondary'} onClick={toggle}>
        Cập nhật
      </Button>

      <Dialog open={open} onClose={toggle}>
        <DialogTitle>Cập nhật user</DialogTitle>
        <DialogContent>
          <Form
            schema={updateUserSchema}
            validator={validator}
            uiSchema={{
              'ui:submitButtonOptions': {norender: true}
            }}
            formData={req}
            onChange={(event) =>
              setReq({
                ...event.formData,
                user_id: adminUser.id
              } as adminuserdto_UpdateUserPointsReq)
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={toggle}>Bỏ qua</Button>
          <LoadingButton
            loading={updatePointsState.loading}
            disabled={updatePointsState.loading}
            onClick={() => updatePoints(req).then(toggle)}>
            Cập nhật
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
