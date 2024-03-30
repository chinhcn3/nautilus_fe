import {Overlay} from '@/components/view/overlay';
import styled from '@emotion/styled';
import {ReactNode} from 'react';
import Stack from '@mui/system/Stack';
import EmptyImage from './assets/empty.png';
import Typography from '@mui/material/Typography';
import {getErrorMessage} from '@/common/helpers/axios/error';
import Button from '@mui/material/Button';

export interface AsyncViewProps {
  loading?: boolean;
  error?: unknown;
  value?: any;
  retry?: () => any;
  children?: ReactNode;
}
export function AsyncView(props: AsyncViewProps) {
  const isEmpty = !props.loading && !props.error && !props.value;

  const errorElement = props.error ? (
    <Stack alignItems={'center'} spacing={2}>
      <img {...EmptyImage} alt={'Error'} />
      <Typography variant={'h6'}>{getErrorMessage(props.error)}</Typography>
      {props.retry && (
        <Button variant={'contained'} onClick={props.retry}>
          Thử lại
        </Button>
      )}
    </Stack>
  ) : null;

  const emptyElement = isEmpty ? (
    <Stack alignItems={'center'} spacing={2}>
      <img {...EmptyImage} alt={'No data'} />
      <Typography variant={'h6'}>Không có dữ liệu</Typography>
    </Stack>
  ) : null;

  return (
    <Wrapper disabled={!props.loading}>{errorElement || emptyElement || props.children}</Wrapper>
  );
}

const Wrapper = styled(Overlay.Loading)`
  min-height: 320px;
`;
