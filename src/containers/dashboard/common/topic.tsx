import styled from '@emotion/styled';
import roundImage from './assets/round.png';
import {SeparatedContent} from '@/containers/dashboard/common/separated-content';
import {ReactNode} from 'react';
import {
  admintopicdto_TopicResp,
  adminuserdto_UserResp,
  contentdto_UserResp,
  userdto_SavedTopicResp
} from '../../../common/openapi';
import {formatRelative} from 'date-fns';
import Avatar from '@mui/material/Avatar';

export interface GeneralTopicProps {
  actions?: ReactNode;
  openInNewTab?: boolean;
}

export interface SavedTopicProps extends GeneralTopicProps {
  topic: userdto_SavedTopicResp;
  user: contentdto_UserResp;
}

export interface AdminTopicProps extends GeneralTopicProps {
  topic: admintopicdto_TopicResp;
  user: adminuserdto_UserResp;
}

export type TopicProps = SavedTopicProps | AdminTopicProps;

function isSavedTopicProps(topicProps: TopicProps): topicProps is SavedTopicProps {
  return !('created_at' in topicProps.topic);
}

export function Topic(props: TopicProps) {
  const {topic, user, openInNewTab, actions} = props;

  return (
    <Wrapper>
      <LinkWrapper
        role={'listitem'}
        target={openInNewTab ? '_blank' : undefined}
        href={`/detail/${topic.slug}`}>
        <PostImage user={user} />
        <Content>
          <h6>{topic.title}</h6>
          <p className={'content'}>{topic.long_title}</p>

          <SeparatedContent>
            {user?.nick_name && <span>{user.nick_name}</span>}
            <span>
              {formatRelative(
                isSavedTopicProps(props) ? props.topic.published_at! : props.topic.created_at!,
                new Date()
              )}
            </span>

            {/* TODO cannot get this number https://techrv.slack.com/archives/C063JKBMMRT/p1710062983677189 */}
            <span>? comments</span>
          </SeparatedContent>
        </Content>
      </LinkWrapper>
      <Actions>{actions}</Actions>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
`;

const LinkWrapper = styled.a`
  display: flex;
  column-gap: 24px;
  padding: 12px 0;
  align-items: center;
  cursor: pointer;
`;

function PostImage({user}: {user: adminuserdto_UserResp}) {
  return (
    <PostImageWrapper>
      <img {...roundImage} alt={'decorator'} />
      <Avatar src={user.avatar!} alt={'image'} sx={{width: 48, height: 48}}>
        {user?.nick_name?.trim().at(0)}
      </Avatar>
    </PostImageWrapper>
  );
}

const PostImageWrapper = styled.div`
  display: grid;
  > * {
    grid-area: center;
    place-self: center;
  }
  > img {
    width: 64px;
    height: 64px;
  }
`;

const Content = styled.div`
  > h6 {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
  }

  > .content {
    font-size: 14px;
    line-height: 24px;
    max-width: 100%;

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Actions = styled.div``;
