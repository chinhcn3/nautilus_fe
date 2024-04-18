import {topicdto_GetTopicDataResp} from '../../../../common/openapi';
import Stack from '@mui/system/Stack';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';

export function TopicCategory({topicData}: { topicData?: topicdto_GetTopicDataResp}) {
    const getTopicCate = (topicData?: topicdto_GetTopicDataResp): any => {
        return topicData?.categories?.[topicData?.topic?.category_id || ''].name || '';
    };
    return (
        <Stack className="description-item--category" direction={'row'}>
            <Category>{getTopicCate(topicData)}</Category>
            <PublishTime>{topicData?.topic?.published_at}</PublishTime>
        </Stack>
    );
}

const Category = styled.span`
    color: ${themeColor('primary')};
    font-size: 16px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    
    @media screen and (max-width: 821px) {
        font-size: 12px;
    }
`;

const PublishTime = styled.span`
    color: ${themeColor('subtitle')};
    font-weight: 400;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    
    :before {
        content: '•';
        margin: 0 5px;
        color: ${themeColor("subtitle")};
    }

    @media screen and (max-width: 821px) {
        font-size: 12px;
    }
`;
