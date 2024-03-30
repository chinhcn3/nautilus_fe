import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import {CSSProperties} from 'react';

export function ArticleTitle({title, style}: {title?: string; style?: CSSProperties}) {
  return <Title style={style}>{title}</Title>;
}

const Title = styled.span<{$size?: boolean}>`
  font-weight: bold;
  font-size: 32px;
  color: ${themeColor('black')};
`;
