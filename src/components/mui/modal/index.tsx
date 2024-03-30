import {themeColor} from '@/common/configs/theme';
import styled from '@emotion/styled';

export const ModalContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${themeColor('lightBackground')};
  padding: 16px;
`;
