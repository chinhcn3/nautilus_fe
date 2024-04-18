/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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

}
