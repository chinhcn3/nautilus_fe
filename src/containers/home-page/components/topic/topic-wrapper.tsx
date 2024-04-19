import {PropsWithChildren} from 'react';
import {contentdto_TopicResp} from '../../../../common/openapi';
import {useOpenTopic} from '@/common/hooks/use-open-topic';
import styled from '@emotion/styled';

type TopicWrapperProps = {
  topic: contentdto_TopicResp
};

export function TopicWrapper({children, topic}: PropsWithChildren<TopicWrapperProps>) {
  const {openTopic} = useOpenTopic()

  return <TopicContainer onClick={() => openTopic(topic)}>{children}</TopicContainer>
}

const TopicContainer = styled.div`
  cursor: pointer;
`