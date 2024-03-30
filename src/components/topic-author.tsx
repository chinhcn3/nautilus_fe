import {contentdto_TopicResp} from '@/common/openapi';
import CommentIcon from './assets/ic-comment.svg';
import CommentIconWhite from './assets/ic-comment-white.svg';
import {useTopicData} from '@/containers/home-page/hooks/use-topic-data';
import styled from '@emotion/styled';

export function TopicAuthor({
  topic,
  isDarkMode
}: {
  topic: contentdto_TopicResp;
  isDarkMode?: boolean;
}) {
  const {getTopicUser} = useTopicData();
  const user = getTopicUser(topic);
  return (
    <Wrapper className="news-card-info d-flex align-items-center">
      <AuthorWrapper>
        <img src={user.avatar || ''} alt="avatar news" className="img-circle" />
        <span>{user.nick_name}</span>
      </AuthorWrapper>
      <div className="news-card-comment d-flex align-items-center">
        {isDarkMode ? <CommentIconWhite /> : <CommentIcon />}
        <span>{topic?.stats?.comments || 0}</span>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
  }
`;

const AuthorWrapper = styled.div`
  display: flex;
`;
