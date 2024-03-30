'use client';

import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import {TopicComposeContext} from '@/containers/topic-compose/context';
import {Form} from '@/containers/topic-compose/Form';

// TODO validator under the inputs
// TODO handle upload file
// TODO handle embed video
// TODO handle form
// TODO add buttons
// TODO remove borders from inputs
// TODO update the detail style

export function TopicComposeContainer() {
  return (
    <TopicComposeContext.Provider>
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
