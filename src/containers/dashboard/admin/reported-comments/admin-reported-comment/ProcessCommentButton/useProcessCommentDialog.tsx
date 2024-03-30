import {useDialog} from '@/components/packages/mui/use-dialog';
import {BootstrapInput} from '@/components/mui/input/BootstrapInput';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import {admincommentdto_CommentResp} from '@/common/openapi';
import {useUpdateState} from '@/common/hooks/useUpdateState';
import {AdminReportedCommentsContext} from '@/containers/dashboard/admin/reported-comments/context';

export function useProcessCommentDialog(comment: admincommentdto_CommentResp) {
  const [value, setValue] = useUpdateState(comment.content_warn!);
  const processComment = AdminReportedCommentsContext.useSelector(
    (state) => state.processReportedComment
  );

  const output = useDialog({
    title: 'Xử lý bình luận',
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
        <Button color={'error'} onClick={() => processComment(comment.id!, value, 'INVALID')}>
          Không hợp lệ
        </Button>
        <Button color={'success'} onClick={() => processComment(comment.id!, value, 'CONFIRMED')}>
          Xác nhận
        </Button>
      </>
    )
  });

  return output;
}

const Content = styled.div`
  width: 320px;
`;
