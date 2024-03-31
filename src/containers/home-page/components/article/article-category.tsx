import {contentdto_TopicResp} from '../../../../common/openapi';
import {useTopicData} from '@/containers/home-page/hooks/use-topic-data';
import Stack from '@mui/system/Stack';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';

export function ArticleCategory({topic}: { topic: contentdto_TopicResp }) {
    const {getTopicCate} = useTopicData();
    return (
        <Stack className="description-item--category" direction={'row'}>
            <Category>{getTopicCate(topic)}</Category>
            <PublishTime>{topic.published_at}</PublishTime>
        </Stack>
    );
}

const Category = styled.span`
    color: ${themeColor('primary')};
    font-size: 16px;
    font-weight: 500;
    @media screen and (max-width: 821px) {
        font-size: 12px;
    }
`;

const PublishTime = styled.span`
    color: ${themeColor('subtitle')};
    font-weight: normal;

    :before {
        content: '•';
        margin: 0 5px;
        color: ${themeColor('subtitle')};
    }

    @media screen and (max-width: 821px) {
        font-size: 12px;
    }
`;
