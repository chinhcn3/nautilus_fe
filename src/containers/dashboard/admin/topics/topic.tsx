import {Topic as CommonTopic} from '@/containers/dashboard/common/topic';
import {SmallButton} from '@/components/mui/button';
import styled from '@emotion/styled';
import {UpdateTopicModal} from '@/containers/dashboard/admin/topics/update-modal';
import useBoolean from 'react-use/lib/useBoolean';
import {admintopicdto_TopicResp, AdminTopicsService} from '@/common/openapi';
import useAsyncFn from 'react-use/lib/useAsyncFn';
import {httpClient} from '@/common/helpers/axios/http-client';
import {useAdminTopicsSelector} from '@/containers/dashboard/admin/topics/provider';
import {TTopicStatus} from '@/common/constants/topic-status';
import toast from 'react-hot-toast';
import {getErrorMessage} from '@/common/helpers/axios/error';

export function Topic({
  topic,
}: {
  topic: admintopicdto_TopicResp;
}) {
  const user = useAdminTopicsSelector(state => state.getUser(topic.user_id))

  return (
    <CommonTopic
      topic={topic}
      user={user}
      openInNewTab={true}
      actions={
        <ActionsWrapper>
          <RejectButton topic={topic}/>
          <SmallButton color={'warning'}>Update</SmallButton>
          <ApproveButton topic={topic} />
        </ActionsWrapper>
      }
    />
  );
}

function RejectButton({topic}: {topic: admintopicdto_TopicResp}) {
  const refresh = useAdminTopicsSelector(state => state.fetchTopicsState.retry)

  const [{loading}, reject] = useAsyncFn(async () => {
    const adminTopicsService = new AdminTopicsService(httpClient);
    const promise = adminTopicsService.adminUpdateTopic(topic.id!, {
      status: 'REJECTED' satisfies TTopicStatus
    });

    await toast.promise(promise, {
      loading: 'Đang cập nhật trạng thái...',
      success: 'Cập nhật thành công',
      error: getErrorMessage,
    }).finally(refresh)

  }, [topic.id, refresh]);

  return <SmallButton loading={loading} disabled={loading} color={'error'} onClick={reject}>Reject</SmallButton>
}

function ApproveButton({topic}: {topic: admintopicdto_TopicResp}) {
  const [open, toggle] = useBoolean(false);

  return (
    <>
      <SmallButton color={'success'} onClick={toggle}>
        Approve
      </SmallButton>
      <UpdateTopicModal topic={topic} modalProps={{open: open, onClose: toggle}} onCloseRequest={toggle}/>
    </>
  );
}

const ActionsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
