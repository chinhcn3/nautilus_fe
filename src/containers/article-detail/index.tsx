'use client';

import styled from '@emotion/styled';
import {PageContent} from '@/containers/page-container';
import type {topicdto_GetTopicDataResp} from '@/common/openapi';
import {TopicTitle} from '@/components/topic-title';

export async function ArticleDetail({topicData}: {topicData?: topicdto_GetTopicDataResp}) {
  return (
    <PageContent>
      <ArticleContent>
        <div className="left-content">
          <TopicTitle topic={topicData?.topic} fontSize={20} lineHeight={28} isDark={true} />
          <ContentWrapper dangerouslySetInnerHTML={{__html: topicData?.topic?.content || ''}} />
        </div>
        <div className="right-content"></div>
      </ArticleContent>
    </PageContent>
  );
}

const ContentWrapper = styled.div`
  padding: 40px 0;
`;

const ArticleContent = styled.div`
  margin: 40px;
  display: flex;

  .left-content {
    width: 65%;
    padding-right: 72px;

    article {
      margin-top: 60px;
    }
  }

  .right-content {
    width: 35%;
  }
`;
