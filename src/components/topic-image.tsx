import styled from '@emotion/styled';
import {CSSProperties} from 'react';
import {useOpenTopic} from '@/common/hooks/use-open-topic';
import {contentdto_TopicResp} from '@/common/openapi';

interface TopicImageProps {
  alt?: string;
  topic?: contentdto_TopicResp;
  style?: CSSProperties;
}
export function TopicImage(props: TopicImageProps) {
  const {openTopic} = useOpenTopic();
  return (
    <TopicImageContainer
      alt={props.alt}
      src={props.topic?.thumbnail}
      style={props.style}
      onClick={() => openTopic(props.topic)}
    />
  );
}

const TopicImageContainer = styled.img`
  width: 100%;
  max-width: fit-content;
  object-fit: contain;
  border-radius: 4px;
  cursor: pointer;
`;
