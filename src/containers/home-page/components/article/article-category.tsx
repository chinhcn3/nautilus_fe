import {contentdto_TopicResp} from '../../../../common/openapi';
import {useTopicData} from '@/containers/home-page/hooks/use-topic-data';
import Stack from '@mui/system/Stack';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import {array} from "yup";

export function ArticleCategory({topic, color}: { topic: contentdto_TopicResp, color: string}) {
    const {getTopicCate} = useTopicData();
    const colorCategory:string = color || 'primary';
    const colorPublishTime:string = color || 'subtitle';
    return (
        <Stack className="description-item--category" direction={'row'}>
            <Category $color={themeColor(colorCategory)}>{getTopicCate(topic)}</Category>
            <PublishTime $color={themeColor(colorPublishTime)}>{topic?.published_at}</PublishTime>
        </Stack>
    );
}

const Category = styled.span<{$color?: string}>`
    color: ${props => props.$color};
    font-size: 16px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    
    @media screen and (max-width: 821px) {
        font-size: 12px;
    }
`;

const PublishTime = styled.span<{$color?: string}>`
    color: ${props => props.$color};
    font-weight: 400;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    
    :before {
        content: '•';
        margin: 0 5px;
        color: ${props => props.$color};
    }

    @media screen and (max-width: 821px) {
        font-size: 12px;
    }
`;
