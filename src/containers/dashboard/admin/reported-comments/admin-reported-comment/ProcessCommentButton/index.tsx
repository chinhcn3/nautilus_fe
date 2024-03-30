import Button from '@mui/material/Button';
import {admincommentdto_CommentResp} from '@/common/openapi';
import {useProcessCommentDialog} from '@/containers/dashboard/admin/reported-comments/admin-reported-comment/ProcessCommentButton/useProcessCommentDialog';

export function ProcessCommentButton({comment}: {comment: admincommentdto_CommentResp}) {
  const {show, dialog} = useProcessCommentDialog(comment);

  return (
    <>
      <Button
        size={'small'}
        variant={'outlined'}
        sx={{textTransform: 'none'}}
        color={'primary'}
        onClick={show}>
        Xử lý
      </Button>
      {dialog}
    </>
  );
}
