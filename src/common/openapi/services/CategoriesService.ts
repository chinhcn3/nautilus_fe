/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { categorydto_ListCategoryReq } from '../models/categorydto_ListCategoryReq';
import type { categorydto_ListCategoryResp } from '../models/categorydto_ListCategoryResp';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CategoriesService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List categories
   * List categories
   * @param requestBody request data
   * @param sort sort parameter
   * @param page {{description}}
   * @returns categorydto_ListCategoryResp OK
   * @throws ApiError
   */
  public listCategory(
    requestBody: categorydto_ListCategoryReq,
    sort?: string,
    page?: {
      offset?: number;
      limit?: number;
    },
  ): CancelablePromise<categorydto_ListCategoryResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/categories',
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

}
