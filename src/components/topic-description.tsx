import styled from '@emotion/styled';
import {contentdto_TopicResp} from '@/common/openapi';
import {useOpenTopic} from '@/common/hooks/use-open-topic';

interface TopicDescriptionProps {
  topic?: contentdto_TopicResp;
  fontSize: number;
  lineHeight: number;
  isDark?: boolean;
  top?: number;
  bottom?: number;
}
export function TopicDescription(props: TopicDescriptionProps) {
  const {openTopic} = useOpenTopic();

  return (
    <TopicDescriptionContainer
      $fontSize={props.fontSize}
      $lineHeight={props.lineHeight}
      $isDark={props.isDark}
      $top={props.top}
      $bottom={props.bottom}
      onClick={() => openTopic(props.topic)}>
      {props.topic?.long_title}
    </TopicDescriptionContainer>
  );
}

const TopicDescriptionContainer = styled.div<{
  $fontSize: number;
  $lineHeight: number;
  $top?: number;
  $bottom?: number;
  $isDark?: boolean;
}>`
  font-size: ${(props) => props.$fontSize}px;
  line-height: ${(props) => props.$lineHeight}px;

  color: ${(props) => (props.$isDark ? '#4E5367' : '#FFFFFF')};
  font-family: Plus Jakarta Sans, sans-serif;
  font-style: normal;
  font-weight: 400;
  padding-top: ${(props) => props.$top}px;
  padding-bottom: ${(props) => props.$bottom}px;
`;
