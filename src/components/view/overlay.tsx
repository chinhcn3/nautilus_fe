import {ComponentProps, ReactNode} from 'react';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import {alpha} from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';
import {CircularProgressProps} from '@mui/material/CircularProgress/CircularProgress';

export interface OverlayProps extends ComponentProps<'div'> {
  children?: ReactNode;
  overlay?: ReactNode;
  disabled?: boolean;
}

export function Overlay({children, overlay, disabled = false, ...htmlProps}: OverlayProps) {
  if (disabled) return children;

  return (
    <OverlayWrapper {...htmlProps}>
      {children}
      <OverlayLayer>{overlay}</OverlayLayer>
    </OverlayWrapper>
  );
}

const OverlayWrapper = styled.div`
  position: relative;
`;

const OverlayLayer = styled.div`
  position: absolute;
  inset: 0 0 0 0;
  background-color: ${(p) => alpha(themeColor('white')(p), 0.5)};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export type LoadingOverlayProps = Omit<OverlayProps, 'overlay'> & {
  circularProgressProps?: CircularProgressProps;
};
function LoadingOverlay({children, circularProgressProps, ...htmlProps}: LoadingOverlayProps) {
  return (
    <Overlay overlay={<CircularProgress {...circularProgressProps} />} {...htmlProps}>
      {children}
    </Overlay>
  );
}

Overlay.Loading = LoadingOverlay;
