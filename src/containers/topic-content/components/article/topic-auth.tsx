import {topicdto_GetTopicDataResp} from '@/common/openapi';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import Avatar from "@mui/material/Avatar";
import Link from 'next/link';
import {PlusIcon} from '@/containers/page-container/page-header/icons';
import type {contentdto_UserResp} from '../../../../common/openapi';
export function TopicAuthContent({topicData}: { topicData?: topicdto_GetTopicDataResp }) {
    const getTopicUser = (topicData?: topicdto_GetTopicDataResp): contentdto_UserResp => {
        return topicData?.users?.[topicData?.topic?.user_id || ''] || {};
    };
    const user = getTopicUser(topicData);

    return (
        <Wrapper>
            <AuthorWrapper>
                <Avatar sx={{width: 40, height: 40}}>
                    <Link href="">
                        <AvatarImg src={user.avatar}/>
                    </Link>
                </Avatar>
                <Name href="">{user.nick_name}</Name>
                <Follow><PlusIcon/>Theo dõi</Follow>
            </AuthorWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Inter', sans-serif;
    margin-top: auto;
    
    .news-card-comment {
        display: flex;
        align-items: center;
        font-size: 16px;
        color: ${themeColor('black1')};
        gap: 8px;
    }
    
    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        
        @media screen and (max-width: 821px) {
            width: 24px;
            height: 24px;
        }
    }
    span {
        @media screen and (max-width: 821px) {
            font-size: 12px;
            line-height: 15px;
        }
    }
`;

const AuthorWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding-right: 33px;
    position: relative;
    z-index: 1;
    
    @media screen and (max-width: 821px) {
        padding-right: 17px;
    }
`;

const AvatarImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Name = styled(Link)`
    font-size: 16px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    color: ${themeColor('black')};
`
const Follow = styled.span`
    font-size: 14px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    color: ${themeColor('white')};
    background-color: ${themeColor('primary')};
    padding: 0 12px;
    display: flex;
    gap: 4px;
    align-items: center;
    border-radius: 4px;
    height: 28px;
    line-height: 28px;
`