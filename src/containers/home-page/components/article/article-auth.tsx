import {contentdto_TopicResp} from '@/common/openapi';

import CommentIconWhite from './../../../../../src/components/assets/ic-comment-white.svg';
import CommentIcon from './../../../../../src/components/assets/ic-comment.svg';
import {useTopicData} from '@/containers/home-page/hooks/use-topic-data';
import styled from '@emotion/styled';

export function ArticleAuth({
                                topic,
                                isDarkMode
                            }: {
    topic: contentdto_TopicResp;
    isDarkMode?: boolean;
}) {
    const {getTopicUser} = useTopicData();
    const user = getTopicUser(topic);
    return (
        <Wrapper>
            <AuthorWrapper>
                <img src={user.avatar || topic?.thumbnail} alt="avatar news" className="img-circle"/>
                <span>{user.nick_name}</span>
            </AuthorWrapper>
            <NewsCardComment className="news-card-comment d-flex align-items-center">
                {isDarkMode ? <CommentIconWhite/> : <CommentIcon/>}
                <span>{topic?.stats?.comments || 0}</span>
            </NewsCardComment>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 40px;
        height: 40px;

        @media screen and (max-width: 821px) {
            width: 24px;
            height: 24px;
        }
    }
`;

const AuthorWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const NewsCardComment = styled.div`
    @media screen and (max-width: 821px) {
        svg {
           transform: scale(0.6);
        }
    }
`;
