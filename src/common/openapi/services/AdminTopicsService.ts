/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admintopicdto_GetTopicResp } from '../models/admintopicdto_GetTopicResp';
import type { admintopicdto_ListTagResp } from '../models/admintopicdto_ListTagResp';
import type { admintopicdto_ListTopicResp } from '../models/admintopicdto_ListTopicResp';
import type { admintopicdto_UpdateTopicContentReq } from '../models/admintopicdto_UpdateTopicContentReq';
import type { admintopicdto_UpdateTopicReq } from '../models/admintopicdto_UpdateTopicReq';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdminTopicsService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List topic tags
   * List topic tags
   * @param filter {{description}}
   * @returns admintopicdto_ListTagResp OK
   * @throws ApiError
   */
  public adminListTag(
    filter?: {
      topic_id?: number;
    },
  ): CancelablePromise<admintopicdto_ListTagResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/admin/tags',
      query: {
        'filter': filter,
      },
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * List topics with filters
   * List topics with filters
   * @param sort sort parameter
   * @param filter {{description}}
   * @param page {{description}}
   * @returns admintopicdto_ListTopicResp OK
   * @throws ApiError
   */
  public adminListTopic(
    sort?: string,
    filter?: {
      status?: string;
      type?: string;
      category_id?: number;
      user_id?: number;
    },
    page?: {
      offset?: number;
      limit?: number;
    },
  ): CancelablePromise<admintopicdto_ListTopicResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/admin/topics',
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
   * Get a topic
   * Get a topic
   * @param id topic id
   * @param filter {{description}}
   * @returns admintopicdto_GetTopicResp OK
   * @throws ApiError
   */
  public adminGetTopic(
    id: number,
    filter?: {
      get_content?: boolean;
    },
  ): CancelablePromise<admintopicdto_GetTopicResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/admin/topics/{id}',
      path: {
        'id': id,
      },
      query: {
        'filter': filter,
      },
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Update topic
   * Update topic
   * @param id topic id
   * @param requestBody request data
   * @returns any OK
   * @throws ApiError
   */
  public adminUpdateTopic(
    id: number,
    requestBody: admintopicdto_UpdateTopicReq,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/admin/topics/{id}',
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
   * Update topic content
   * Update topic content
   * @param id topic id
   * @param requestBody request data
   * @returns any OK
   * @throws ApiError
   */
  public adminUpdateTopicContent(
    id: number,
    requestBody: admintopicdto_UpdateTopicContentReq,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/admin/topics/{id}/content',
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
