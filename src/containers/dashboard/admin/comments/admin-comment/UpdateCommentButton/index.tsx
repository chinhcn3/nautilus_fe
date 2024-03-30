import Button from '@mui/material/Button';
import {useUpdateCommentDialog} from '@/containers/dashboard/admin/comments/admin-comment/UpdateCommentButton/useUpdateCommentDialog';
import {admincommentdto_CommentResp} from '@/common/openapi';

export function UpdateCommentButton({comment}: {comment: admincommentdto_CommentResp}) {
  const {show, dialog} = useUpdateCommentDialog(comment);

  return (
    <>
      <Button
        size={'small'}
        variant={'outlined'}
        sx={{textTransform: 'none'}}
        color={'primary'}
        onClick={show}>
        Cập nhật
      </Button>
      {dialog}
    </>
  );
}
