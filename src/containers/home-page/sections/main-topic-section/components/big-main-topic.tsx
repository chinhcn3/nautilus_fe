import {contentdto_TopicResp} from '@/common/openapi';
import Stack from '@mui/system/Stack';
import {CommonImage} from '@/containers/home-page/components/common-image';
import {ArticleCategory} from '@/containers/home-page/components/article/article-category';
import {ArticleTitle} from '@/containers/home-page/components/article/article-title';
import {ArticleDescription} from '@/containers/home-page/components/article/article-description';
import {ArticleAuth} from '@/containers/home-page/components/article/article-auth';

export function BigMainTopic({topic}: {topic: contentdto_TopicResp}) {
  return (
    <Stack spacing={2}>
      <CommonImage src={topic?.thumbnail} alt="news image" />
      <ArticleCategory topic={topic} />
      <ArticleTitle title={topic.title} />
      <ArticleDescription description={topic.long_title} />
      <ArticleAuth topic={topic} isDarkMode={false} />
    </Stack>
  );
}
