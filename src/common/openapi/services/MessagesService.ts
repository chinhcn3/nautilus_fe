/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { messagedto_CreateContactMsgReq } from '../models/messagedto_CreateContactMsgReq';
import type { messagedto_CreateContactMsgResp } from '../models/messagedto_CreateContactMsgResp';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MessagesService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create a contact message
   * Create a contact message
   * @param requestBody request data
   * @returns messagedto_CreateContactMsgResp Created
   * @throws ApiError
   */
  public createContactMsg(
    requestBody: messagedto_CreateContactMsgReq,
  ): CancelablePromise<messagedto_CreateContactMsgResp> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/contact-messages',
      body: requestBody,
      mediaType: '*/*',
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

}
