import styled from '@emotion/styled';

interface HomeSectionTitleProps {
  title?: string;
  fontSize: number;
  lineHeight: number;
  isDark?: boolean;
  top?: number;
  bottom?: number;
}
export function HomeSectionTitle(props: HomeSectionTitleProps) {
  return (
    <HomeSectionTitleContainer
      $fontSize={props.fontSize}
      $lineHeight={props.lineHeight}
      $isDark={props.isDark}
      $top={props.top}
      $bottom={props.bottom}>
      {props.title}
    </HomeSectionTitleContainer>
  );
}

const HomeSectionTitleContainer = styled.div<{
  $fontSize: number;
  $lineHeight: number;
  $isDark?: boolean;
  $top?: number;
  $bottom?: number;
}>`
  font-size: ${(props) => props.$fontSize}px;
  line-height: ${(props) => props.$lineHeight}px;

  color: ${(props) => (props.$isDark ? '#0D1828' : '#FFFFFF')};
  font-family: Roboto Condensed, sans-serif;
  font-style: normal;
  font-weight: 700;
  padding-top: ${(props) => props.$top}px;
  padding-bottom: ${(props) => props.$bottom}px;
`;
