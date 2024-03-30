/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { topicdto_CreateTopicReq } from '../models/topicdto_CreateTopicReq';
import type { topicdto_CreateTopicResp } from '../models/topicdto_CreateTopicResp';
import type { topicdto_DeleteTopicResp } from '../models/topicdto_DeleteTopicResp';
import type { topicdto_GetTopicExtraResp } from '../models/topicdto_GetTopicExtraResp';
import type { topicdto_GetTopicResp } from '../models/topicdto_GetTopicResp';
import type { topicdto_ListReactionReq } from '../models/topicdto_ListReactionReq';
import type { topicdto_ListReactionResp } from '../models/topicdto_ListReactionResp';
import type { topicdto_ListTopicResp } from '../models/topicdto_ListTopicResp';
import type { topicdto_SaveTopicReq } from '../models/topicdto_SaveTopicReq';
import type { topicdto_ShareTopicReq } from '../models/topicdto_ShareTopicReq';
import type { topicdto_UnsaveTopicReq } from '../models/topicdto_UnsaveTopicReq';
import type { topicdto_UpdateTopicReq } from '../models/topicdto_UpdateTopicReq';
import type { topicdto_ViewTopicReq } from '../models/topicdto_ViewTopicReq';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TopicsService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List topics
   * List topics
   * @param sort sort parameter
   * @param filter {{description}}
   * @param page {{description}}
   * @returns topicdto_ListTopicResp OK
   * @throws ApiError
   */
  public listTopic(
    sort?: string,
    filter?: {
      kind?: string;
    },
    page?: {
      offset?: number;
      limit?: number;
    },
  ): CancelablePromise<topicdto_ListTopicResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/topics',
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
   * Create a topic
   * Create a topic
   * @param requestBody request data
   * @returns topicdto_CreateTopicResp Created
   * @throws ApiError
   */
  public createTopic(
    requestBody: topicdto_CreateTopicReq,
  ): CancelablePromise<topicdto_CreateTopicResp> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/topics',
      body: requestBody,
      mediaType: '*/*',
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Delete a topic
   * Delete a topic
   * @param id topic id
   * @returns topicdto_DeleteTopicResp OK
   * @throws ApiError
   */
  public deleteTopic(
    id: number,
  ): CancelablePromise<topicdto_DeleteTopicResp> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/topics/{id}',
      path: {
        'id': id,
      },
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Get topic
   * Get topic
   * @param id topic id
   * @returns topicdto_GetTopicResp OK
   * @throws ApiError
   */
  public getTopic(
    id: number,
  ): CancelablePromise<topicdto_GetTopicResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/topics/{id}',
      path: {
        'id': id,
      },
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Update a topic
   * Update a topic
   * @param id topic id
   * @param requestBody request data
   * @returns any OK
   * @throws ApiError
   */
  public updateTopic(
    id: number,
    requestBody: topicdto_UpdateTopicReq,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/topics/{id}',
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
   * Get topic extra
   * Get topic extra
   * @param id topic id
   * @returns topicdto_GetTopicExtraResp OK
   * @throws ApiError
   */
  public getTopicExtra(
    id: number,
  ): CancelablePromise<topicdto_GetTopicExtraResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/topics/{id}/extra',
      path: {
        'id': id,
      },
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * List topic reaction
   * List topic reaction
   * @param id topic id
   * @param requestBody request data
   * @param sort sort parameter
   * @param page {{description}}
   * @returns topicdto_ListReactionResp OK
   * @throws ApiError
   */
  public listTopicReaction(
    id: number,
    requestBody: topicdto_ListReactionReq,
    sort?: string,
    page?: {
      offset?: number;
      limit?: number;
    },
  ): CancelablePromise<topicdto_ListReactionResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/topics/{id}/reactions',
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
   * @param id topic id
   * @param verb react verb
   * @returns any OK
   * @throws ApiError
   */
  public deleteTopicReaction(
    id: number,
    verb: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/topics/{id}/reactions/{verb}',
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
   * Put reaction to a topic
   * Put reaction to a topic
   * @param id topic id
   * @param verb react verb
   * @returns any OK
   * @throws ApiError
   */
  public createTopicReaction(
    id: number,
    verb: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/topics/{id}/reactions/{verb}',
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
   * Unsave a topic
   * Unsave a topic
   * @param id topic id
   * @param requestBody request data
   * @returns any OK
   * @throws ApiError
   */
  public deleteTopicSave(
    id: number,
    requestBody: topicdto_UnsaveTopicReq,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/topics/{id}/save',
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
   * Save a topic
   * Save a topic
   * @param id topic id
   * @param requestBody request data
   * @returns any OK
   * @throws ApiError
   */
  public createTopicSave(
    id: number,
    requestBody: topicdto_SaveTopicReq,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/topics/{id}/save',
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
   * Share to a topic
   * Share to a topic
   * @param id topic id
   * @param requestBody request data
   * @returns any OK
   * @throws ApiError
   */
  public createTopicShare(
    id: number,
    requestBody: topicdto_ShareTopicReq,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/topics/{id}/shares',
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
   * View a topic
   * View a topic
   * @param id topic id
   * @param requestBody request data
   * @returns any OK
   * @throws ApiError
   */
  public createTopicView(
    id: number,
    requestBody: topicdto_ViewTopicReq,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/topics/{id}/views',
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
