/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admincategorydto_CreateCategoryReq } from '../models/admincategorydto_CreateCategoryReq';
import type { admincategorydto_CreateCategoryResp } from '../models/admincategorydto_CreateCategoryResp';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdminCategoriesService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create a category
   * Create a category
   * @param requestBody request data
   * @returns admincategorydto_CreateCategoryResp Created
   * @throws ApiError
   */
  public adminCreateCategory(
    requestBody: admincategorydto_CreateCategoryReq,
  ): CancelablePromise<admincategorydto_CreateCategoryResp> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/admin/categories',
      body: requestBody,
      mediaType: '*/*',
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

}
