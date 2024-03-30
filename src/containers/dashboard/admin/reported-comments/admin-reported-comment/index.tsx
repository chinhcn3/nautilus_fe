import {admincommentdto_CommentResp} from '@/common/openapi';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import {UserAvatar} from '@/components/user/avatar';
import invariant from 'tiny-invariant';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Stack from '@mui/system/Stack';
import Typography from '@mui/material/Typography';
import {AdminReportedCommentsContext} from '@/containers/dashboard/admin/reported-comments/context';
import {ProcessCommentButton} from '@/containers/dashboard/admin/reported-comments/admin-reported-comment/ProcessCommentButton';

export function AdminReportedComment({comment}: {comment: admincommentdto_CommentResp}) {
  const user = AdminReportedCommentsContext.useSelector((state) => state.getUser(comment.user_id));
  invariant(user);

  // TODO How to display status of a reported comment https://techrv.slack.com/archives/C063JKBMMRT/p1711291973407809?thread_ts=1711206135.608549&cid=C063JKBMMRT

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <UserAvatar user={user} />
      </ListItemAvatar>
      <ListItemText
        primary={user.nick_name}
        secondaryTypographyProps={{component: 'div'}}
        secondary={
          <Stack spacing={1} alignItems={'flex-start'}>
            <Typography>{comment.content}</Typography>

            <Stack direction={'row'} spacing={1}>
              <ProcessCommentButton comment={comment} />

              {/* TODO */}
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
