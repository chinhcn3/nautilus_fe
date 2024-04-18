import {contentdto_TopicResp} from '@/common/openapi';
import CommentIcon from './assets/ic-comment.svg';
import CommentIconWhite from './assets/ic-comment-white.svg';
import {useTopicData} from '@/containers/home-page/hooks/use-topic-data';

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
    <div className="news-card-info d-flex align-items-center">
      <div className="d-flex align-items-center news-card-avatar">
        <img src={user.avatar || ''} alt="avatar news" className="img-circle" />
        <span>{user.nick_name}</span>
      </div>
      <div className="news-card-comment d-flex align-items-center">
        {isDarkMode ? <CommentIconWhite /> : <CommentIcon />}
        <span>{topic?.stats?.comments || 0}</span>
      </div>
    </div>
  );
}
