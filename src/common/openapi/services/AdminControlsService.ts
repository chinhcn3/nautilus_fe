/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admincontroldto_ExecTaskCacheTopicIDsReq } from '../models/admincontroldto_ExecTaskCacheTopicIDsReq';
import type { admincontroldto_ExecTaskCacheTopicIDsResp } from '../models/admincontroldto_ExecTaskCacheTopicIDsResp';
import type { admincontroldto_ExecTaskCalcTopTopicsReq } from '../models/admincontroldto_ExecTaskCalcTopTopicsReq';
import type { admincontroldto_ExecTaskCalcTopTopicsResp } from '../models/admincontroldto_ExecTaskCalcTopTopicsResp';
import type { admincontroldto_ExecTaskContentPeriodicReq } from '../models/admincontroldto_ExecTaskContentPeriodicReq';
import type { admincontroldto_ExecTaskContentPeriodicResp } from '../models/admincontroldto_ExecTaskContentPeriodicResp';
import type { admincontroldto_PublishControlMsgReq } from '../models/admincontroldto_PublishControlMsgReq';
import type { admincontroldto_PublishControlMsgResp } from '../models/admincontroldto_PublishControlMsgResp';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdminControlsService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Send control message
   * Send control message
   * @param requestBody request data
   * @returns admincontroldto_PublishControlMsgResp OK
   * @throws ApiError
   */
  public adminPublishServerControlMsg(
    requestBody: admincontroldto_PublishControlMsgReq,
  ): CancelablePromise<admincontroldto_PublishControlMsgResp> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/admin/server-control',
      body: requestBody,
      mediaType: '*/*',
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Execute cache topic ids task
   * Execute cache topic ids task
   * @param requestBody request data
   * @returns admincontroldto_ExecTaskCacheTopicIDsResp OK
   * @throws ApiError
   */
  public adminExecTaskCacheTopicIDs(
    requestBody: admincontroldto_ExecTaskCacheTopicIDsReq,
  ): CancelablePromise<admincontroldto_ExecTaskCacheTopicIDsResp> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/admin/tasks/cache-topic-ids/exec',
      body: requestBody,
      mediaType: '*/*',
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Execute calculation of top topics task
   * Execute calculation of top topics task
   * @param requestBody request data
   * @returns admincontroldto_ExecTaskCalcTopTopicsResp OK
   * @throws ApiError
   */
  public adminExecTaskCalcTopTopics(
    requestBody: admincontroldto_ExecTaskCalcTopTopicsReq,
  ): CancelablePromise<admincontroldto_ExecTaskCalcTopTopicsResp> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/admin/tasks/calc-top-topics/exec',
      body: requestBody,
      mediaType: '*/*',
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Execute content periodic task
   * Execute content periodic task
   * @param requestBody request data
   * @returns admincontroldto_ExecTaskContentPeriodicResp OK
   * @throws ApiError
   */
  public adminExecTaskContentPeriodic(
    requestBody: admincontroldto_ExecTaskContentPeriodicReq,
  ): CancelablePromise<admincontroldto_ExecTaskContentPeriodicResp> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/admin/tasks/content-periodic/exec',
      body: requestBody,
      mediaType: '*/*',
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

}
