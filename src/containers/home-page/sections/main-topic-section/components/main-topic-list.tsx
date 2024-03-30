import type {contentdto_TopicResp} from '@/common/openapi';
import {useTopicData} from '@/containers/home-page/hooks/use-topic-data';
import {TopicAuthor} from '@/components/topic-author';
import Grid from '@mui/material/Grid';
import {BigMainTopic} from '@/containers/home-page/sections/main-topic-section/components/big-main-topic';
import {CommonImage} from '@/containers/home-page/components/common-image';
import {ArticleCategory} from '@/containers/home-page/components/article/article-category';
import {ArticleTitle} from '@/containers/home-page/components/article/article-title';
import {Stack} from '@mui/material';
import {ArticleAuth} from '@/containers/home-page/components/article/article-auth';

export function MainTopicList({topics}: {topics: Array<contentdto_TopicResp>}) {
  const {getTopicCate} = useTopicData();
  return (
    <Grid container rowSpacing={24}>
      <div>
        {topics.slice(1, 5).map((topic: contentdto_TopicResp) => {
          return (
            <Grid item xs={12} key={topic.id}>
              <Stack>
                <CommonImage src={topic?.thumbnail} alt="list image" />
                <ArticleCategory topic={topic} />
                <ArticleTitle title={topic.title} />
                <ArticleAuth topic={topic} isDarkMode={false} />
              </Stack>
            </Grid>
          );
        })}
      </div>
    </Grid>
  );
}
