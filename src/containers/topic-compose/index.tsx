'use client';

import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import {TopicComposeContext} from '@/containers/topic-compose/context';
import {Form} from '@/containers/topic-compose/Form';
import {contentdto_TopicResp} from '../../common/openapi';

// TODO update the detail style

export function TopicComposeContainer({topic}: {topic?: contentdto_TopicResp}) {
  return (
    <TopicComposeContext.Provider topic={topic}>
      <PageWrapper>
        <Form />
      </PageWrapper>
    </TopicComposeContext.Provider>
  );
}

const PageWrapper = styled.div`
  background: ${themeColor('white')};
  padding: 32px 0;
`;
