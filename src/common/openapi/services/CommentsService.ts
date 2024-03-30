/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { commentdto_CreateCommentReq } from '../models/commentdto_CreateCommentReq';
import type { commentdto_CreateCommentResp } from '../models/commentdto_CreateCommentResp';
import type { commentdto_ListCommentReq } from '../models/commentdto_ListCommentReq';
import type { commentdto_ListReactionReq } from '../models/commentdto_ListReactionReq';
import type { commentdto_ListReactionResp } from '../models/commentdto_ListReactionResp';
import type { commentdto_ReportCommentReq } from '../models/commentdto_ReportCommentReq';
import type { commentdto_UpdateCommentReq } from '../models/commentdto_UpdateCommentReq';
import type { commentdto_UpdateCommentResp } from '../models/commentdto_UpdateCommentResp';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CommentsService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create a comment
   * Create a comment
   * @param requestBody request data
   * @returns commentdto_CreateCommentResp OK
   * @throws ApiError
   */
  public createComment(
    requestBody: commentdto_CreateCommentReq,
  ): CancelablePromise<commentdto_CreateCommentResp> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/comments',
      body: requestBody,
      mediaType: '*/*',
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Delete a comment
   * Delete a comment
   * @param id comment id
   * @returns any OK
   * @throws ApiError
   */
  public deleteComment(
    id: number,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/comments/{id}',
      path: {
        'id': id,
      },
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Update a comment
   * Update a comment
   * @param id comment id
   * @param requestBody request data
   * @returns commentdto_UpdateCommentResp OK
   * @throws ApiError
   */
  public updateComment(
    id: number,
    requestBody: commentdto_UpdateCommentReq,
  ): CancelablePromise<commentdto_UpdateCommentResp> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/comments/{id}',
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
   * List comment reaction
   * List comment reaction
   * @param id comment id
   * @param requestBody request data
   * @param sort sort parameter
   * @param page {{description}}
   * @returns commentdto_ListReactionResp OK
   * @throws ApiError
   */
  public listCommentReaction(
    id: number,
    requestBody: commentdto_ListReactionReq,
    sort?: string,
    page?: {
      offset?: number;
      limit?: number;
    },
  ): CancelablePromise<commentdto_ListReactionResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/comments/{id}/reactions',
      path: {
        'id': id,
      },
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
   * Withdraw a reaction on a topic
   * Withdraw a reaction on a topic
   * @param id comment id
   * @param verb react verb
   * @returns any OK
   * @throws ApiError
   */
  public deleteCommentReaction(
    id: number,
    verb: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/comments/{id}/reactions/{verb}',
      path: {
        'id': id,
        'verb': verb,
      },
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Put reaction to a comment
   * Put reaction to a comment
   * @param id comment id
   * @param verb react verb
   * @returns any OK
   * @throws ApiError
   */
  public createCommentReaction(
    id: number,
    verb: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/comments/{id}/reactions/{verb}',
      path: {
        'id': id,
        'verb': verb,
      },
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Report a comment
   * Report a comment
   * @param id comment id
   * @param requestBody request data
   * @returns any OK
   * @throws ApiError
   */
  public createCommentReport(
    id: number,
    requestBody: commentdto_ReportCommentReq,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/comments/{id}/reports',
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
   * List topic comment by page
   * List topic comment by page
   * @param id topic id
   * @param requestBody request data
   * @param sort sort parameter
   * @param page {{description}}
   * @returns any OK
   * @throws ApiError
   */
  public listTopicComment(
    id: number,
    requestBody: commentdto_ListCommentReq,
    sort?: string,
    page?: {
      offset?: number;
      limit?: number;
    },
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/topics/{id}/comments',
      path: {
        'id': id,
      },
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

}
