import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import useMethods from 'react-use/lib/useMethods';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import {AdminUsersContext} from '@/containers/dashboard/admin/users/context';
import {LoadingButton} from '@mui/lab';
import type {adminuserdto_UserResp} from '@/common/openapi';
import Form from '@rjsf/mui';
import {banSchema} from '@/containers/dashboard/admin/users/admin-user/ban-user/ban-schema';
import validator from '@rjsf/validator-ajv8';
import {adminuserdto_BanUserReq} from 'src/common/openapi';
import {IChangeEvent} from '@rjsf/core';

export function BanUser(props: {adminUser: adminuserdto_UserResp}) {
  const banUser = AdminUsersContext.useSelector((s) => s.banUser);
  const banUserState = AdminUsersContext.useSelector((s) => s.banUserState);
  const [state, methods] = useMethods(
    (state) => ({
      onClickButton: () => ({...state, open: true}),
      onModalClose: () => ({...state, open: false}),
      onFormChange: (event: IChangeEvent<adminuserdto_BanUserReq>) => ({
        ...state,
        banUserOptions: event.formData!
      })
    }),
    {
      open: false,
      banUserOptions: {
        taken_kudos: 10,
        duration_mins: 1440,
        reason: ''
      } as adminuserdto_BanUserReq
    }
  );

  return (
    <>
      <Button
        variant={'outlined'}
        size={'small'}
        color={'secondary'}
        onClick={methods.onClickButton}>
        Ban
      </Button>

      <Dialog open={state.open} onClose={methods.onModalClose}>
        <DialogTitle>Ban user</DialogTitle>
        <DialogContent>
          <DialogContentText>Do you really want to ban this user?</DialogContentText>
          <Form
            schema={banSchema}
            validator={validator}
            uiSchema={{
              'ui:submitButtonOptions': {
                norender: true
              }
            }}
            onChange={methods.onFormChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={methods.onModalClose}>Cancel</Button>
          <LoadingButton
            loading={banUserState.loading}
            onClick={async () => {
              await banUser({
                ...state.banUserOptions,
                id: props.adminUser.id
              });
              methods.onModalClose();
            }}>
            Ban
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
