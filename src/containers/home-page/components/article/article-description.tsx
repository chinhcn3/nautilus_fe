import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import {CSSProperties} from 'react';

export function ArticleDescription({
  description,
  style
}: {
  description?: string;
  style?: CSSProperties;
}) {
  return <Description style={style}>{description}</Description>;
}

const Description = styled.span<{$size?: boolean}>`
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  color: ${themeColor('black')};
  
  @media screen and (max-width: 821px) {
    font-size: 16px;
  }
`;
