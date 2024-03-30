import useAsyncRetry from 'react-use/lib/useAsyncRetry';
import {type admincommentdto_CommentDataResp, AdminCommentsService} from '@/common/openapi';
import {httpClient} from '@/common/helpers/axios/http-client';
import {getIsLastPage, usePageFilterObject} from '@/common/helpers/paginations';
import {createHookContext} from '@/common/helpers/context';
import useAsyncFn from 'react-use/lib/useAsyncFn';
import toast from 'react-hot-toast';
import {getErrorMessage} from '@/common/helpers/axios/error';
import {TCommentReportStatus} from '@/common/constants/comment-report-status';

const adminCommentsService = new AdminCommentsService(httpClient);

function useValues() {

  const page = usePageFilterObject();

  const listReportedCommentsState = useAsyncRetry(async (): Promise<admincommentdto_CommentDataResp | undefined> => {
    return adminCommentsService.adminListReportedComment({}, undefined, page).then(resp => resp.data);
  }, [page]);

  const [processReportedCommentState, processReportedComment] = useAsyncFn(async (commentId: number, details: string, report_status: TCommentReportStatus) => {
    const promise = adminCommentsService.adminProcessReportedComment(commentId, {
      comment_id: commentId,
      details,
      report_status
    });

    await toast.promise(promise, {
      loading: 'Đang xử lý bình luận...',
      success: 'Xử lý bình luận thành công',
      error: getErrorMessage
    });

    listReportedCommentsState.retry();
  }, [listReportedCommentsState.retry]);

  function getTopic(topicId?: number) {
    return listReportedCommentsState.value?.topics?.[String(topicId)];
  }

  function getCategory(categoryId?: number) {
    return listReportedCommentsState.value?.categories?.[String(categoryId)];
  }

  function getUser(userId?: number) {
    return listReportedCommentsState.value?.users?.[String(userId)];
  }

  const isLastPage = getIsLastPage(listReportedCommentsState.value?.comments?.length);

  return {
    listReportedCommentsState: {
      ...listReportedCommentsState,
      loading: listReportedCommentsState.loading || processReportedCommentState.loading
    },
    getTopic,
    getCategory, getUser, isLastPage, processReportedComment
  };
}

export const AdminReportedCommentsContext = createHookContext(useValues);
