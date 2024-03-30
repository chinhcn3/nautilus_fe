/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admingiftdto_CreateGiftReq } from '../models/admingiftdto_CreateGiftReq';
import type { admingiftdto_CreateGiftResp } from '../models/admingiftdto_CreateGiftResp';
import type { admingiftdto_DeleteGiftReq } from '../models/admingiftdto_DeleteGiftReq';
import type { admingiftdto_DeleteGiftResp } from '../models/admingiftdto_DeleteGiftResp';
import type { admingiftdto_ListGiftIssueReq } from '../models/admingiftdto_ListGiftIssueReq';
import type { admingiftdto_ListGiftIssueResp } from '../models/admingiftdto_ListGiftIssueResp';
import type { admingiftdto_ListGiftReq } from '../models/admingiftdto_ListGiftReq';
import type { admingiftdto_ListGiftResp } from '../models/admingiftdto_ListGiftResp';
import type { admingiftdto_LuckyDrawSetWinnerReq } from '../models/admingiftdto_LuckyDrawSetWinnerReq';
import type { admingiftdto_LuckyDrawSetWinnerResp } from '../models/admingiftdto_LuckyDrawSetWinnerResp';
import type { admingiftdto_UpdateGiftIssueReq } from '../models/admingiftdto_UpdateGiftIssueReq';
import type { admingiftdto_UpdateGiftIssueResp } from '../models/admingiftdto_UpdateGiftIssueResp';
import type { admingiftdto_UpdateGiftReq } from '../models/admingiftdto_UpdateGiftReq';
import type { admingiftdto_UpdateGiftResp } from '../models/admingiftdto_UpdateGiftResp';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdminGiftsService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List gift issues
   * List gift issues
   * @param requestBody request data
   * @param sort sort parameter
   * @param filter {{description}}
   * @param page {{description}}
   * @returns admingiftdto_ListGiftIssueResp OK
   * @throws ApiError
   */
  public adminListGiftIssue(
    requestBody: admingiftdto_ListGiftIssueReq,
    sort?: string,
    filter?: {
      status?: string;
    },
    page?: {
      offset?: number;
      limit?: number;
    },
  ): CancelablePromise<admingiftdto_ListGiftIssueResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/admin/gift-issues',
      query: {
        'sort': sort,
        'filter': filter,
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
   * Update a gift issue
   * Update a gift issue
   * @param giftId gift id
   * @param requestBody request data
   * @returns admingiftdto_UpdateGiftIssueResp Created
   * @throws ApiError
   */
  public adminUpdateGiftIssue(
    giftId: number,
    requestBody: admingiftdto_UpdateGiftIssueReq,
  ): CancelablePromise<admingiftdto_UpdateGiftIssueResp> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/admin/gift-issues/{giftID}',
      path: {
        'giftID': giftId,
      },
      body: requestBody,
      mediaType: '*/*',
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * List gifts
   * List gifts
   * @param requestBody request data
   * @param sort sort parameter
   * @param filter {{description}}
   * @param page {{description}}
   * @returns admingiftdto_ListGiftResp OK
   * @throws ApiError
   */
  public adminListGift(
    requestBody: admingiftdto_ListGiftReq,
    sort?: string,
    filter?: {
      topic_id?: number;
      value_from?: number;
      value_to?: number;
    },
    page?: {
      offset?: number;
      limit?: number;
    },
  ): CancelablePromise<admingiftdto_ListGiftResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/admin/gifts',
      query: {
        'sort': sort,
        'filter': filter,
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
   * Create a gift
   * Create a gift
   * @param requestBody request data
   * @returns admingiftdto_CreateGiftResp Created
   * @throws ApiError
   */
  public adminCreateGift(
    requestBody: admingiftdto_CreateGiftReq,
  ): CancelablePromise<admingiftdto_CreateGiftResp> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/admin/gifts',
      body: requestBody,
      mediaType: '*/*',
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Delete a gift
   * Delete a gift
   * @param id gift id
   * @param requestBody request data
   * @returns admingiftdto_DeleteGiftResp Created
   * @throws ApiError
   */
  public adminDeleteGift(
    id: number,
    requestBody: admingiftdto_DeleteGiftReq,
  ): CancelablePromise<admingiftdto_DeleteGiftResp> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/admin/gifts/{id}',
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
   * Update a gift
   * Update a gift
   * @param id gift id
   * @param requestBody request data
   * @returns admingiftdto_UpdateGiftResp Created
   * @throws ApiError
   */
  public adminUpdateGift(
    id: number,
    requestBody: admingiftdto_UpdateGiftReq,
  ): CancelablePromise<admingiftdto_UpdateGiftResp> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/admin/gifts/{id}',
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
   * Set winner of lucky draw
   * Set winner of lucky draw
   * @param topicId topic id
   * @param requestBody request data
   * @returns admingiftdto_LuckyDrawSetWinnerResp Created
   * @throws ApiError
   */
  public adminLuckyDrawSetWinner(
    topicId: number,
    requestBody: admingiftdto_LuckyDrawSetWinnerReq,
  ): CancelablePromise<admingiftdto_LuckyDrawSetWinnerResp> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/admin/lucky-draws/{topicID}/set-winner',
      path: {
        'topicID': topicId,
      },
      body: requestBody,
      mediaType: '*/*',
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

}
