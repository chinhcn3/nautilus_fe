import {UserContentBlock} from '@/containers/dashboard/common/user-content-block';
import Stack from '@mui/system/Stack';
import Clock from '@mui/icons-material/AccessTimeOutlined';
import Button from '@mui/material/Button';
import {userdto_ReactionResp} from '../../../common/openapi';
import {MyReactionsContext} from '@/containers/dashboard/my-reactions/provider';
import invariant from 'tiny-invariant';
import styled from '@emotion/styled';
import {reactionVerbsWithIcon, TReactionVerb} from '@/common/constants/reactions';
import {formatRelative} from 'date-fns/formatRelative';

// TODO update link

export function Reaction({reaction}: {reaction: userdto_ReactionResp}) {
  const reactionUser = MyReactionsContext.useSelector((state) =>
    state.getReactionUser(reaction.user_id)
  );
  const reactionUserName = MyReactionsContext.useSelector((state) =>
    state.getReactionUserName(reaction.user_id)
  );
  const reactionToUser = MyReactionsContext.useSelector((state) =>
    state.getReactionUserName(reaction.to_user_id)
  );
  const topic = MyReactionsContext.useSelector((state) => state.getTopic(reaction.topic_id));

  invariant(reactionUserName, 'reactionUser không tồn tại');
  invariant(reactionToUser, 'reactionToUser không tồn tại');
  invariant(topic, 'reactionToUser không tồn tại');

  return (
    <UserContentBlock userAvatarProps={{user: reactionUser!}}>
      {reaction.comment_id ? (
        <div>
          <ReactionUser>{reactionUserName}</ReactionUser> <span>đã thả</span>{' '}
          <span>{reactionVerbsWithIcon[reaction.verb as TReactionVerb]}</span>{' '}
          <span>trên bình luận của</span> <strong>{reactionToUser}</strong> <span>trong bài</span>{' '}
          <strong>{topic.title}</strong>
        </div>
      ) : (
        <div>
          <ReactionUser>{reactionUserName}</ReactionUser> <span>đã thả</span>{' '}
          <span>{reactionVerbsWithIcon[reaction.verb as TReactionVerb]}</span> <span>trên bài</span>{' '}
          <strong>{topic.title}</strong>
        </div>
      )}

      <Stack direction="row" spacing={1}>
        <Button
          size={'small'}
          variant={'text'}
          color={'secondary'}
          startIcon={<Clock sx={{width: 16, height: 16}} />}
          sx={{textTransform: 'none', borderRadius: 16}}>
          {formatRelative(reaction.created_at!, new Date())}
        </Button>
      </Stack>
    </UserContentBlock>
  );
}

const ReactionUser = styled.strong`
  text-transform: capitalize;
`;
