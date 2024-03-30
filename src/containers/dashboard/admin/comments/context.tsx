import useAsyncRetry from 'react-use/lib/useAsyncRetry';
import {type admincommentdto_CommentDataResp, AdminCommentsService} from '@/common/openapi';
import {httpClient} from '@/common/helpers/axios/http-client';
import {getIsLastPage, usePageFilterObject} from '@/common/helpers/paginations';
import {createHookContext} from '@/common/helpers/context';
import useAsyncFn from 'react-use/lib/useAsyncFn';
import toast from 'react-hot-toast';
import {getErrorMessage} from '@/common/helpers/axios/error';
import {TCommentStatus} from '@/common/constants/comment-status';

const adminCommentsService = new AdminCommentsService(httpClient);

function useValues() {

  const page = usePageFilterObject();

  const listCommentState = useAsyncRetry(async (): Promise<admincommentdto_CommentDataResp | undefined> => {
    return adminCommentsService.adminListComment(undefined, undefined, page).then(resp => resp.data);
  }, []);

  const [updateCommentState, updateComment] = useAsyncFn(async (commentId: number, info: string, status: TCommentStatus) => {
    const promise = adminCommentsService.adminUpdateComment(commentId, {
      id: commentId,
      info,
      status
    });

    await toast.promise(promise, {
      loading: 'Đang cập nhật bình luận...',
      success: 'Cập nhật bình luận thành công',
      error: getErrorMessage
    });

    listCommentState.retry();
  }, [listCommentState.retry]);

  function getTopic(topicId?: number) {
    return listCommentState.value?.topics?.[String(topicId)];
  }

  function getCategory(categoryId?: number) {
    return listCommentState.value?.categories?.[String(categoryId)];
  }

  function getUser(userId?: number) {
    return listCommentState.value?.users?.[String(userId)];
  }

  const isLastPage = getIsLastPage(listCommentState.value?.comments?.length);

  return {
    listCommentState: {
      ...listCommentState,
      loading: listCommentState.loading || updateCommentState.loading
    }, getTopic, getCategory, getUser, isLastPage,
    updateComment
  };
}

export const AdminCommentsContext = createHookContext(useValues);
