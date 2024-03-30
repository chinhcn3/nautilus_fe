/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { contentdto_GetHomeContentResp } from '../models/contentdto_GetHomeContentResp';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ContentsService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get homepage content
   * Get homepage content
   * @returns contentdto_GetHomeContentResp OK
   * @throws ApiError
   */
  public getHomeContent(): CancelablePromise<contentdto_GetHomeContentResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/home',
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

}
