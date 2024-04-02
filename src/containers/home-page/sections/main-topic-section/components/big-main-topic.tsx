import {contentdto_TopicResp} from '@/common/openapi';
import Stack from '@mui/system/Stack';
import {CommonImage} from '@/containers/home-page/components/common-image';
import {ArticleCategory} from '@/containers/home-page/components/article/article-category';
import {ArticleTitle} from '@/containers/home-page/components/article/article-title';
import {ArticleDescription} from '@/containers/home-page/components/article/article-description';
import {ArticleAuth} from '@/containers/home-page/components/article/article-auth';

export function BigMainTopic({topic}: { topic: contentdto_TopicResp }) {
    return (
        <Stack spacing={{xs: 1, md: 2}}>
            <CommonImage classItem="bigMainTopic" src={topic?.thumbnail} alt="news image"/>
            <Stack spacing={1}>
                <ArticleCategory color='' topic={topic}/>
                <ArticleTitle classItem="bigTitle" style={{'fontSize': 32}} title={topic.title}/>
                <ArticleDescription description={topic.long_title}/>
            </Stack>
            <ArticleAuth topic={topic} isDarkMode={false}/>
        </Stack>
    );
}
