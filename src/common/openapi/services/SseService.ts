/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SseService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Server-send-event for notifications
   * Server-send-event for notifications
   * @returns any OK
   * @throws ApiError
   */
  public sseConnect(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/sse',
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

}
