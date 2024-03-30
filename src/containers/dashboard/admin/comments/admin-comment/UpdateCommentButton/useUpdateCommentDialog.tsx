import {useDialog} from '@/components/packages/mui/use-dialog';
import {BootstrapInput} from '@/components/mui/input/BootstrapInput';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import {AdminCommentsContext} from '@/containers/dashboard/admin/comments/context';
import {admincommentdto_CommentResp} from '@/common/openapi';
import {useUpdateState} from '@/common/hooks/useUpdateState';

export function useUpdateCommentDialog(comment: admincommentdto_CommentResp) {
  const [value, setValue] = useUpdateState(comment.status_info!);
  const updateComment = AdminCommentsContext.useSelector((state) => state.updateComment);

  const output = useDialog({
    title: 'Cập nhật bình luận',
    content: (
      <Content>
        <BootstrapInput
          label={'Nội dung'}
          inputProps={{multiline: true, minRows: 4, maxRows: 4}}
          onChange={(event) => setValue(event.target.value)}
          value={value}
        />
      </Content>
    ),
    actions: (
      <>
        <Button color={'info'} onClick={() => output.hide()}>
          Bỏ qua
        </Button>
        <Button color={'error'} onClick={() => updateComment(comment.id!, value, 'REJECTED')}>
          Từ chối
        </Button>
        <Button color={'success'} onClick={() => updateComment(comment.id!, value, 'OK')}>
          Duyệt
        </Button>
      </>
    )
  });

  return output;
}

const Content = styled.div`
  width: 320px;
`;
