import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';

export const SeparatedContent = styled.div`
  color: ${themeColor('subtitle')};
  font-style: italic;
  font-size: 13px;
  span + span:before {
    content: '';
    display: inline-block;
    margin: 2px 6px 2px 8px;
    font-size: 20px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${themeColor('subtitle')};
  }
`;
