import {contentdto_TopicResp, topicdto_GetTopicDataResp} from '@/common/openapi';

import CommentIconWhite from './../../../../../src/components/assets/ic-comment-white.svg';
import CommentIcon from './../../../../../src/components/assets/ic-comment.svg';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import Avatar from "@mui/material/Avatar";
import Link from 'next/link';
import {PlusIcon} from "@/containers/dashboard/layout-container/sidebar/icons";
export function ArticleAuthDatail({topicData, isDarkMode}: { topicData: topicdto_GetTopicDataResp; isDarkMode?: boolean; }) {
    const getTopicUser = (topicData: topicdto_GetTopicDataResp): object => {
        return topicData?.users?.[topicData?.topic?.user_id || ''] || {};
    };
    const user = getTopicUser(topicData);
    const color = {
        color: isDarkMode ? 'white' : 'black'
    }
    return (
        <Wrapper>
            <AuthorWrapper>
                <Avatar sx={{width: 40, height: 40}}>
                    <Link href="">
                        <AvatarImg src={user.avatar || "https://photo2.tinhte.vn/data/attachment-files/2023/11/8175013_yamaha-mt-09-sp-2024-29-cover.jpg"}/>
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
        color: ${themeColor('back1')};
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

const NewsCardComment = styled.div`
    @media screen and (max-width: 821px) {
        svg {
           transform: scale(0.6);
        }
        span {
            font-size: 12px;
        }
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