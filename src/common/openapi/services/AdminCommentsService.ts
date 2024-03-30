/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admincommentdto_ListCommentResp } from '../models/admincommentdto_ListCommentResp';
import type { admincommentdto_ListReportedCommentReq } from '../models/admincommentdto_ListReportedCommentReq';
import type { admincommentdto_ListReportedCommentResp } from '../models/admincommentdto_ListReportedCommentResp';
import type { admincommentdto_ProcessReportedCommentReq } from '../models/admincommentdto_ProcessReportedCommentReq';
import type { admincommentdto_ProcessReportedCommentResp } from '../models/admincommentdto_ProcessReportedCommentResp';
import type { admincommentdto_UpdateCommentReq } from '../models/admincommentdto_UpdateCommentReq';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdminCommentsService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List comments with filters
   * List comments with filters
   * @param sort sort parameter
   * @param filter {{description}}
   * @param page {{description}}
   * @returns admincommentdto_ListCommentResp OK
   * @throws ApiError
   */
  public adminListComment(
    sort?: string,
    filter?: {
      status?: string;
      topic_id?: number;
      user_id?: number;
    },
    page?: {
      offset?: number;
      limit?: number;
    },
  ): CancelablePromise<admincommentdto_ListCommentResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/admin/comments',
      query: {
        'sort': sort,
        'filter': filter,
        'page': page,
      },
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Update comment
   * Update comment
   * @param id comment id
   * @param requestBody request data
   * @returns any OK
   * @throws ApiError
   */
  public adminUpdateComment(
    id: number,
    requestBody: admincommentdto_UpdateCommentReq,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/admin/comments/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: '*/*',
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * List reported comment
   * List reported comment
   * @param requestBody request data
   * @param sort sort parameter
   * @param page {{description}}
   * @returns admincommentdto_ListReportedCommentResp OK
   * @throws ApiError
   */
  public adminListReportedComment(
    requestBody: admincommentdto_ListReportedCommentReq,
    sort?: string,
    page?: {
      offset?: number;
      limit?: number;
    },
  ): CancelablePromise<admincommentdto_ListReportedCommentResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/admin/reported-comments',
      query: {
        'sort': sort,
        'page': page,
      },
      body: requestBody,
      mediaType: '*/*',
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Process reported comment
   * Process reported comment
   * @param id comment id
   * @param requestBody request data
   * @returns admincommentdto_ProcessReportedCommentResp OK
   * @throws ApiError
   */
  public adminProcessReportedComment(
    id: number,
    requestBody: admincommentdto_ProcessReportedCommentReq,
  ): CancelablePromise<admincommentdto_ProcessReportedCommentResp> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/admin/reported-comments/{id}/process',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: '*/*',
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

}
