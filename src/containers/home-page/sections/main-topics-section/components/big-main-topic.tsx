import {contentdto_TopicResp} from '@/common/openapi';
import Stack from '@mui/system/Stack';
import {CommonImage} from '@/containers/home-page/components/common-image';
import {TopicCategory} from '@/containers/home-page/components/topic/topic-category';
import {TopicTitle} from '@/containers/home-page/components/topic/topic-title';
import {TopicDescription} from '@/containers/home-page/components/topic/topic-description';
import {TopicAuthor} from '@/containers/home-page/components/topic/topic-author';

export function BigMainTopic({topic}: { topic: contentdto_TopicResp }) {
    return (
        <Stack spacing={{xs: 1, md: 2}}>
            <CommonImage classItem="bigMainTopic" src={topic?.thumbnail} alt="news image"/>
            <Stack spacing={1}>
                <TopicCategory color='' topic={topic}/>
                <TopicTitle classItem="bigTitle" style={{'fontSize': 32}} title={topic.title}/>
                <TopicDescription description={topic.long_title}/>
            </Stack>
            <TopicAuthor topic={topic} isDarkMode={false}/>
        </Stack>
    );
}
