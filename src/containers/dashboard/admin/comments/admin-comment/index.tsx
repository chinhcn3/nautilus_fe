import {admincommentdto_CommentResp} from '@/common/openapi';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import {UserAvatar} from '@/components/user/avatar';
import {AdminCommentsContext} from '@/containers/dashboard/admin/comments/context';
import invariant from 'tiny-invariant';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Stack from '@mui/system/Stack';
import Typography from '@mui/material/Typography';
import {UpdateCommentButton} from '@/containers/dashboard/admin/comments/admin-comment/UpdateCommentButton';
import Chip from '@mui/material/Chip';
import {TCommentStatus} from '@/common/constants/comment-status';

export function AdminComment({comment}: {comment: admincommentdto_CommentResp}) {
  const user = AdminCommentsContext.useSelector((state) => state.getUser(comment.user_id));
  invariant(user);

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <UserAvatar user={user} />
      </ListItemAvatar>
      <ListItemText
        primaryTypographyProps={{component: 'div'}}
        primary={
          <Stack direction={'row'} alignItems={'center'} spacing={1} mb={1}>
            <Chip
              size={'small'}
              label={comment.status || 'Chưa duyệt'}
              color={(comment.status as TCommentStatus) === 'OK' ? 'success' : 'error'}
            />

            <Typography>{user.nick_name}</Typography>
          </Stack>
        }
        secondaryTypographyProps={{component: 'div'}}
        secondary={
          <Stack spacing={1} alignItems={'flex-start'}>
            <Typography>{comment.content}</Typography>

            <Stack direction={'row'} spacing={1}>
              <UpdateCommentButton comment={comment} />

              {/* TODO topic detail link */}
              <Button
                size={'small'}
                variant={'outlined'}
                sx={{textTransform: 'none'}}
                color={'secondary'}>
                Xem bài viết
              </Button>

              {/* TODO */}
              <Button
                size={'small'}
                variant={'outlined'}
                sx={{textTransform: 'none'}}
                color={'secondary'}>
                Xem user
              </Button>
            </Stack>
          </Stack>
        }
      />
    </ListItem>
  );
}
