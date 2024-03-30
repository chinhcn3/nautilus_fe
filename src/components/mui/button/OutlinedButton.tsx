import {LoadingButton, LoadingButtonProps} from '@mui/lab';
import styled from '@emotion/styled';

export function OutlinedButton(props: LoadingButtonProps) {
  return <SButton {...props} variant={'outlined'} />;
}

const SButton = styled(LoadingButton)`
  font-size: 16px;
  text-transform: none;
`;
