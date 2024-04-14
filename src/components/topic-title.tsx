import styled from '@emotion/styled';
import {contentdto_TopicResp} from '@/common/openapi';
import {useOpenTopic} from '@/common/hooks/use-open-topic';

interface TopicTitleProps {
  topic?: contentdto_TopicResp;
  fontSize: number;
  lineHeight: number;
  isDark?: boolean;
  top?: number;
  bottom?: number;
}
export function TopicTitle(props: TopicTitleProps) {
  const {openTopic} = useOpenTopic();

  return (
    <ArticleTitleContainer
      $fontSize={props.fontSize}
      $lineHeight={props.lineHeight}
      $isDark={props.isDark}
      $top={props.top}
      $bottom={props.bottom}
      onClick={() => openTopic(props.topic)}>
      {/*{props.topic?.title}*/}
      Những chợ ứng dụng iOS bên thứ 3 sẽ không hoạt động khi người dùng ra khỏi châu Âu
    </ArticleTitleContainer>
  );
}

const ArticleTitleContainer = styled.div<{
  $fontSize: number;
  $lineHeight: number;
  $isDark?: boolean;
  $top?: number;
  $bottom?: number;
}>`
  font-size: ${(props) => props.$fontSize}px;
  line-height: ${(props) => props.$lineHeight}px;
  color: ${(props) => (props.$isDark ? '#111' : '#FFFFFF')};
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  padding-top: ${(props) => props.$top || 0}px;
  padding-bottom: ${(props) => props.$bottom || 0}px;
  cursor: pointer;
`;
