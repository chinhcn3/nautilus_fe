import type {contentdto_TopicResp} from '@/common/openapi';
import Grid from '@mui/material/Grid';
import {Stack} from '@mui/material';
import {CommonImage} from '@/containers/home-page/components/common-image';
import {TopicCategory} from '@/containers/home-page/components/topic/topic-category';
import {TopicTitle} from '@/containers/home-page/components/topic/topic-title';
import {TopicAuthor} from '@/containers/home-page/components/topic/topic-author';
import {TopicWrapper} from '@/containers/home-page/components/topic/topic-wrapper';

export function TopTopicsList({topics}: {topics: Array<contentdto_TopicResp>}) {
  return (
    <Grid className="outstanding-list" container spacing={3}>
      {topics.slice(1, 5).map((topic: contentdto_TopicResp) => {
        return (
          <Grid item xs={12} md={3} key={topic.id}>
            <TopicWrapper topic={topic}>
              <Stack direction={{xs: 'row', md: 'column'}} spacing={{xs: 1, md: 2}}>
                <CommonImage classItem="xs-horizontal" src={topic.thumbnail} alt="list image" />
                <Stack spacing={1}>
                  <TopicCategory topic={topic} />
                  <TopicTitle title={topic.title} />
                  <TopicAuthor topic={topic} isDarkMode={false} />
                </Stack>
              </Stack>
            </TopicWrapper>
          </Grid>
        );
      })}
    </Grid>
  );
}
