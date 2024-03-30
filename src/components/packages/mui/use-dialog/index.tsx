import {useBoolean} from '@/common/hooks/useBoolean';
import Dialog, {DialogProps} from '@mui/material/Dialog';
import {ReactNode} from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import {LoadingButton, LoadingButtonProps} from '@mui/lab';
import DialogContent from '@mui/material/DialogContent';

export type UseDialogOptions = {
  children?: ReactNode;
  content?: ReactNode;
  actions?: ReactNode;
  title?: ReactNode;
  dialogProps?: DialogProps;
};

export function useDialog(options?: UseDialogOptions) {
  const [open, show, hide] = useBoolean();

  const dialog = (
    <Dialog open={open} onClose={hide} keepMounted={false} {...options?.dialogProps}>
      {options?.title && <DialogTitle>{options?.title}</DialogTitle>}
      <DialogContent>{options?.content}</DialogContent>
      {options?.children}
      <DialogActions>{options?.actions}</DialogActions>
    </Dialog>
  );

  return {show, hide, dialog};
}

export function useDialogWithOk(options?: UseDialogOptions & {okButtonProps?: LoadingButtonProps}) {
  const {show, hide, dialog} = useDialog({
    ...options,
    actions: (
      <>
        {options?.actions}
        <DialogActions>
          <LoadingButton
            {...(options?.okButtonProps || {})}
            onClick={options?.okButtonProps?.onClick || (() => hide())}>
            {options?.okButtonProps?.children || 'OK'}
          </LoadingButton>
        </DialogActions>
      </>
    )
  });

  return {show, hide, dialog};
}
