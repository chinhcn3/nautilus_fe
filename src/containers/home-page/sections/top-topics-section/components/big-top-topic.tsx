import {contentdto_TopicResp} from '@/common/openapi';
import Grid from '@mui/material/Grid';
import {Stack} from '@mui/material';
import {themeColor} from '@/common/configs/theme';
import styled from '@emotion/styled';
import {TopicCategory} from '@/containers/home-page/components/topic/topic-category';
import {TopicDescription} from '@/containers/home-page/components/topic/topic-description';
import {TopicTitle} from '@/containers/home-page/components/topic/topic-title';
import {CommonImage} from '@/containers/home-page/components/common-image';
import {TopicAuthor} from '@/containers/home-page/components/topic/topic-author';
import {TopicWrapper} from '@/containers/home-page/components/topic/topic-wrapper';

export function BigTopTopic({topic}: {topic: contentdto_TopicResp}) {
  return (
    <TopicWrapper topic={topic}>
      <NewsCardOutstanding className="news-card news-card-outstanding">
        <Grid container>
          <Grid item xs={12} md={6}>
            <CommonImage classItem="border-left" src={topic.thumbnail} alt="list image" />
          </Grid>
          <Grid className="news-card-body" item xs={12} md={6}>
            <Stack spacing={{xs: 1, md: 'auto'}}>
              <Stack spacing={{xs: 1, md: 2}}>
                <TopicCategory color="white" topic={topic} />
                <TopicTitle
                  color="white"
                  classItem="bigTitle"
                  style={{fontSize: 32}}
                  title={topic.title}
                />
                <TopicDescription style={{color: 'white'}} description={topic.long_title} />
              </Stack>
              <TopicAuthor topic={topic} isDarkMode={true} />
            </Stack>
          </Grid>
        </Grid>
      </NewsCardOutstanding>
    </TopicWrapper>
  );
}
const NewsCardOutstanding = styled.div`
  border-radius: 8px;
  overflow: hidden;

  .news-card-body {
    color: white;
    padding: 32px;
    background-color: ${themeColor('primary')};
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 821px) {
      padding: 16px;
      border-radius: 0 0 6px 0;
    }
  }
`;
