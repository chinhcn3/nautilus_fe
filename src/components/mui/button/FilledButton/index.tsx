import {ElementRef, forwardRef} from 'react';
import styled from '@emotion/styled';
import {LoadingButton, LoadingButtonProps} from '@mui/lab';
import {themeColor} from '@/common/configs/theme';
import {alpha} from '@mui/system';

export type FilledButtonProps = Omit<LoadingButtonProps, 'variant'> & {
  variant?: 'primary' | 'secondary';
};

export const FilledButton = forwardRef<ElementRef<typeof LoadingButton>, FilledButtonProps>(
  (props, ref) => {
    return (
      <SButton
        ref={ref}
        color={'primary'}
        {...props}
        variant={'contained'}
        $variant={props.variant ?? 'primary'}
      />
    );
  }
);

const SButton = styled(LoadingButton, {shouldForwardProp: (prop) => prop !== '$variant'})<{
  $variant?: FilledButtonProps['variant'];
}>`
  text-transform: none;
  border-radius: 4px;
  height: 48px;

  font-size: 16px;
  font-weight: 500;
  color: ${(p) => (p.$variant === 'primary' ? '#FFFFFF' : themeColor('primary')(p))};
  line-height: 20px;

  background-color: ${(p) =>
    p.$variant === 'primary' ? themeColor('primary')(p) : alpha(themeColor('primary')(p), 0.1)};

  box-shadow: none;

  &:hover,
  &:active {
    background-color: ${(p) =>
      p.$variant === 'primary'
        ? alpha(themeColor('primary')(p), 0.8)
        : alpha(themeColor('primary')(p), 0.2)};
    box-shadow: none;
  }
`;
