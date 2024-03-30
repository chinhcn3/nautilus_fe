import Button from '@mui/material/Button';
import useMethods from 'react-use/lib/useMethods';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Form from '@rjsf/mui';
import {changeRoleSchema} from '@/containers/dashboard/admin/users/admin-user/change-role/change-role-schema';
import validator from '@rjsf/validator-ajv8';
import {adminuserdto_UserResp} from '@/common/openapi';
import {TUserRole} from '@/common/constants/user-role';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';
import DialogActions from '@mui/material/DialogActions';
import {AdminUsersContext} from '@/containers/dashboard/admin/users/context';
import {LoadingButton} from '@mui/lab';
import {IChangeEvent} from '@rjsf/core';

export function ChangeRole({adminUser}: {adminUser: adminuserdto_UserResp}) {
  const updateRole = AdminUsersContext.useSelector((state) => state.updateRole);
  const updateRoleState = AdminUsersContext.useSelector((state) => state.updateRoleState);

  const [state, methods] = useMethods(
    (state) => ({
      onClickButton: () => ({...state, open: true}),
      onModalClose: () => ({...state, open: false}),
      updateRole: (role: TUserRole) => ({...state, formData: {role: role}}),
      onFormChange: (event: IChangeEvent<{role: TUserRole}>) => ({
        ...state,
        formData: event.formData!
      })
    }),
    {
      open: false,
      formData: {
        role: adminUser.s_role as TUserRole
      }
    }
  );

  useUpdateEffect(() => {
    methods.updateRole(adminUser.s_role);
  }, [adminUser]);

  return (
    <>
      <Button
        variant={'outlined'}
        size={'small'}
        color={'secondary'}
        onClick={methods.onClickButton}>
        Thay role
      </Button>

      <Dialog open={state.open} onClose={methods.onModalClose}>
        <DialogTitle>Cập nhật role</DialogTitle>
        <DialogContent sx={{width: 320}}>
          <Form
            schema={changeRoleSchema}
            validator={validator}
            formData={state.formData}
            uiSchema={{
              'ui:submitButtonOptions': {
                norender: true
              }
            }}
            onChange={methods.onFormChange}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={methods.onModalClose}>Bỏ qua</Button>
          <LoadingButton
            loading={updateRoleState.loading}
            disabled={updateRoleState.loading}
            onClick={() =>
              updateRole(adminUser.id!, state.formData.role).then(methods.onModalClose)
            }>
            Cập nhật
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
