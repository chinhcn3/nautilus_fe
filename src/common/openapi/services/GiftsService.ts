/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { giftdto_CreateLuckyDrawRegReq } from '../models/giftdto_CreateLuckyDrawRegReq';
import type { giftdto_DeleteLuckyDrawRegReq } from '../models/giftdto_DeleteLuckyDrawRegReq';
import type { giftdto_ListGiftOnTopicReq } from '../models/giftdto_ListGiftOnTopicReq';
import type { giftdto_ListGiftOnTopicResp } from '../models/giftdto_ListGiftOnTopicResp';
import type { giftdto_ListLuckyDrawRegReq } from '../models/giftdto_ListLuckyDrawRegReq';
import type { giftdto_ListLuckyDrawRegResp } from '../models/giftdto_ListLuckyDrawRegResp';
import type { giftdto_SelectGiftOnTopicReq } from '../models/giftdto_SelectGiftOnTopicReq';
import type { giftdto_SelectGiftOnTopicResp } from '../models/giftdto_SelectGiftOnTopicResp';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class GiftsService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List gifts for topic
   * List gifts for topic
   * @param topicId topic id
   * @param requestBody request data
   * @param sort sort parameter
   * @param page {{description}}
   * @returns giftdto_ListGiftOnTopicResp OK
   * @throws ApiError
   */
  public listGiftOnTopic(
    topicId: number,
    requestBody: giftdto_ListGiftOnTopicReq,
    sort?: string,
    page?: {
      offset?: number;
      limit?: number;
    },
  ): CancelablePromise<giftdto_ListGiftOnTopicResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/gifts-on-topic/{topicID}',
      path: {
        'topicID': topicId,
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
   * Select a gift for a topic
   * Select a gift for a topic
   * @param topicId topic id
   * @param requestBody request data
   * @returns giftdto_SelectGiftOnTopicResp Created
   * @throws ApiError
   */
  public selectGiftOnTopic(
    topicId: number,
    requestBody: giftdto_SelectGiftOnTopicReq,
  ): CancelablePromise<giftdto_SelectGiftOnTopicResp> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/gifts-on-topic/{topicID}/select',
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

  /**
   * Delete lucky draw registration of current user
   * Delete lucky draw registration of current user
   * @param topicId topic id
   * @param requestBody request data
   * @returns any OK
   * @throws ApiError
   */
  public deleteLuckyDrawRegistration(
    topicId: number,
    requestBody: giftdto_DeleteLuckyDrawRegReq,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/lucky-draws/{topicID}/registrations',
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

  /**
   * List lucky draw registration
   * List lucky draw registration
   * @param topicId topic id
   * @param requestBody request data
   * @param sort sort parameter
   * @param page {{description}}
   * @returns giftdto_ListLuckyDrawRegResp OK
   * @throws ApiError
   */
  public listLuckyDrawRegistration(
    topicId: number,
    requestBody: giftdto_ListLuckyDrawRegReq,
    sort?: string,
    page?: {
      offset?: number;
      limit?: number;
    },
  ): CancelablePromise<giftdto_ListLuckyDrawRegResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/lucky-draws/{topicID}/registrations',
      path: {
        'topicID': topicId,
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
   * Create a lucky draw registration
   * Create a lucky draw registration
   * @param topicId topic id
   * @param requestBody request data
   * @returns any Created
   * @throws ApiError
   */
  public createLuckyDrawRegistration(
    topicId: number,
    requestBody: giftdto_CreateLuckyDrawRegReq,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/lucky-draws/{topicID}/registrations',
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
