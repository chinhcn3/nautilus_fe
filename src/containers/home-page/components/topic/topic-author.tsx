import {contentdto_TopicResp} from '@/common/openapi';

import CommentIconWhite from './../../../../../src/components/assets/ic-comment-white.svg';
import CommentIcon from './../../../../../src/components/assets/ic-comment.svg';
import {useTopicData} from '@/containers/home-page/hooks/use-topic-data';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
export function TopicAuthor({
                                topic,
                                isDarkMode
                            }: {
    topic: contentdto_TopicResp;
    isDarkMode?: boolean;
}) {
    const {getTopicUser} = useTopicData();
    const user = getTopicUser(topic);
    const color = {
        color: isDarkMode ? 'white' : 'black'
    }
    return (
        <Wrapper>
            <AuthorWrapper>
                <img src={user.avatar || "https://photo2.tinhte.vn/data/attachment-files/2023/11/8175013_yamaha-mt-09-sp-2024-29-cover.jpg"} alt="avatar news" className="img-circle"/>
                <span>{user.nick_name}</span>
            </AuthorWrapper>
            <NewsCardComment className="news-card-comment">
                {isDarkMode ? <CommentIconWhite/> : <CommentIcon/>}
                <span style={color}>{topic?.stats?.comments || 0}</span>
            </NewsCardComment>
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
        font-size: 16px;
        line-height: 19px;
        
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
    
    &:before {
        content: '';
        position: absolute;
        width: 1px;
        background-color: ${themeColor('grey1')};
        height: 100%;
        right: 16px;
        z-index: 9;
        top: 0;
    }

    @media screen and (max-width: 821px) {
        padding-right: 17px;
        
        &:before {
            right: 8px;
        }
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
