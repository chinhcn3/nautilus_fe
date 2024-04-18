/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admincontroldto_ExecTaskBackupDBS3Req } from '../models/admincontroldto_ExecTaskBackupDBS3Req';
import type { admincontroldto_ExecTaskBackupDBS3Resp } from '../models/admincontroldto_ExecTaskBackupDBS3Resp';
import type { admincontroldto_ExecTaskCacheTopicIDsReq } from '../models/admincontroldto_ExecTaskCacheTopicIDsReq';
import type { admincontroldto_ExecTaskCacheTopicIDsResp } from '../models/admincontroldto_ExecTaskCacheTopicIDsResp';
import type { admincontroldto_ExecTaskCalcTopTopicsReq } from '../models/admincontroldto_ExecTaskCalcTopTopicsReq';
import type { admincontroldto_ExecTaskCalcTopTopicsResp } from '../models/admincontroldto_ExecTaskCalcTopTopicsResp';
import type { admincontroldto_ExecTaskContentPeriodicReq } from '../models/admincontroldto_ExecTaskContentPeriodicReq';
import type { admincontroldto_ExecTaskContentPeriodicResp } from '../models/admincontroldto_ExecTaskContentPeriodicResp';
import type { admincontroldto_ExecTaskRestoreDBS3Req } from '../models/admincontroldto_ExecTaskRestoreDBS3Req';
import type { admincontroldto_ExecTaskRestoreDBS3Resp } from '../models/admincontroldto_ExecTaskRestoreDBS3Resp';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdminTasksService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Execute backup DB task
   * Execute backup DB task
   * @param requestBody request data
   * @returns admincontroldto_ExecTaskBackupDBS3Resp OK
   * @throws ApiError
   */
  public adminExecTaskBackupDbs3(
    requestBody: admincontroldto_ExecTaskBackupDBS3Req,
  ): CancelablePromise<admincontroldto_ExecTaskBackupDBS3Resp> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/admin/tasks/backup-db-s3/exec',
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

  /**
   * Execute restore DB task
   * Execute restore DB task
   * @param requestBody request data
   * @returns admincontroldto_ExecTaskRestoreDBS3Resp OK
   * @throws ApiError
   */
  public adminExecTaskRestoreDbs3(
    requestBody: admincontroldto_ExecTaskRestoreDBS3Req,
  ): CancelablePromise<admincontroldto_ExecTaskRestoreDBS3Resp> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/admin/tasks/restore-db-s3/exec',
      body: requestBody,
      mediaType: '*/*',
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

}
