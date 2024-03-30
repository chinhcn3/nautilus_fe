import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import {LoadingButton, LoadingButtonProps} from '@mui/lab';

export const PrimaryButton = styled(LoadingButton)`
  background-color: ${themeColor('secondary')};
  color: white;
  text-transform: none;
  font-weight: 700;
  padding: 8px 12px;
  border-radius: 8px;
  &:hover,
  &:active {
    background-color: ${themeColor('secondary')};
    opacity: 0.8;
  }
`;

export const SubmitButton = styled(PrimaryButton)`
  background: ${themeColor('black')};
  &:hover,
  &:active {
    background-color: ${themeColor('black')};
    opacity: 0.8;
  }
`;

export const SmallButton = styled((props: LoadingButtonProps) => (
  <LoadingButton variant={'outlined'} size={'small'} color={'secondary'} {...props} />
))`
  text-transform: none;
  white-space: nowrap;
`;
