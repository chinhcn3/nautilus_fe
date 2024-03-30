import Button from '@mui/material/Button';
import {useDialogWithOk} from '@/components/packages/mui/use-dialog';
import Typography from '@mui/material/Typography';
import {admincommentdto_CommentResp} from '@/common/openapi';

export function ShowContentButton({comment}: {comment: admincommentdto_CommentResp}) {
  const {show, dialog} = useDialogWithOk({
    title: 'Nội dung bình luận',
    content: <Typography>{comment.content}</Typography>
  });

  return (
    <>
      <Button
        size={'small'}
        variant={'outlined'}
        color={'secondary'}
        sx={{textTransform: 'none', borderRadius: 16}}
        onClick={show}>
        Hiển thị nội dung
      </Button>
      {dialog}
    </>
  );
}
