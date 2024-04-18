
import styled from "@emotion/styled";
import {topicdto_GetTopicDataResp} from "@/common/openapi";
import {Images} from "@/containers/topic-content/sections/image-list";
import {Reaction} from "@/containers/topic-content/sections/reaction";
import {Lucky} from "@/containers/topic-content/sections/lucky";
import {RelatedTopics} from "@/containers/topic-content/sections/related-topics";
import {RelatedArticles} from "@/containers/topic-content/sections/related-articles";
import {Comments} from "@/containers/topic-content/sections/comments";
import {Content} from '@/containers/topic-content/Content';
import {ContentWrapper} from '@/containers/dashboard/common/content-wrapper';
import { TopicDetailContext } from "../../TopicDetailContext";
export function TopicLeftDetail({topicData}: { topicData: topicdto_GetTopicDataResp }) {
  return (
    <TopicDetailContext.Provider
      topic={topicData.topic!}
      users={topicData.users ?? {}}
      categories={topicData.categories ?? {}}>
      <>
        <div>
          <img style={{width: '100%'}} src={topicData?.topic?.thumbnail} alt={topicData?.topic?.title}/>
        </div>
        <BoxContent>
          <ContentWrapper>
            <Content />
          </ContentWrapper>
          <Lucky/>
          <Images/>
          <Reaction/>
          <RelatedTopics/>
          <RelatedArticles/>
          <Comments/>
        </BoxContent>
      </>
    </TopicDetailContext.Provider>
  )

}

const BoxContent = styled.div`
    padding: 0 60px;
    
    .content-demo {
        padding: 32px 0;
        
        p {
            font-size: 18px;
            font-weight: 400;
            font-family: 'Inter', sans-serif;
            line-height: 150%;
            margin-bottom: 16px;
            color: #111111;
        }
    }
`