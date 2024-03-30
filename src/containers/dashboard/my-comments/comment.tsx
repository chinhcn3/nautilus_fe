import styled from '@emotion/styled';
import {BoldText} from '@/components/mui/typography';
import {UserContentBlock} from '@/containers/dashboard/common/user-content-block';
import Clock from '@mui/icons-material/AccessTimeOutlined';
import Stack from '@mui/system/Stack';
import Button from '@mui/material/Button';
import {admincommentdto_CommentResp} from '../../../common/openapi';
import {MyCommentsContext} from '@/containers/dashboard/my-comments/provider';
import invariant from 'tiny-invariant';
import {formatRelative} from 'date-fns/formatRelative';
import {ShowContentButton} from '@/containers/dashboard/my-comments/ShowContentButton';

// TODO Update link

export function Comment({comment}: {comment: admincommentdto_CommentResp}) {
  const user = MyCommentsContext.useSelector((state) => state.user);

  const topic = MyCommentsContext.useSelector(
    (state) => state.fetchCommentsState.value?.data?.topics?.[comment.topic_id!]
  );

  invariant(topic, 'Không có topic tương ứng với comment');

  return (
    <UserContentBlock userAvatarProps={{user}}>
      <Stack spacing={1}>
        <p>
          <strong>Bạn</strong> đã bình luận trên bài viết
        </p>
        <p>
          <BoldText>{topic.title}</BoldText>
        </p>

        <CommentQuoteText>{comment.content}</CommentQuoteText>

        <Stack direction="row" alignItems="center" spacing={1}>
          <Button
            size={'small'}
            variant={'text'}
            color={'secondary'}
            startIcon={<Clock sx={{width: 16, height: 16}} />}
            sx={{textTransform: 'none', borderRadius: 16}}>
            {formatRelative(comment.created_at!, new Date())}
          </Button>

          <ShowContentButton comment={comment} />

          {/* TODO */}
          <Button
            size={'small'}
            variant={'outlined'}
            color={'secondary'}
            sx={{textTransform: 'none', borderRadius: 16}}>
            Đi đến bài viết
          </Button>
        </Stack>
      </Stack>
    </UserContentBlock>
  );
}

const CommentQuoteText = styled.p`
  font-style: italic;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
