/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { uploaddto_PresignPutMultiObjectReq } from '../models/uploaddto_PresignPutMultiObjectReq';
import type { uploaddto_PresignPutMultiObjectResp } from '../models/uploaddto_PresignPutMultiObjectResp';
import type { uploaddto_PresignPutObjectReq } from '../models/uploaddto_PresignPutObjectReq';
import type { uploaddto_PresignPutObjectResp } from '../models/uploaddto_PresignPutObjectResp';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UploadsService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Presign S3 put object
   * Presign S3 put object
   * @param requestBody request data
   * @returns uploaddto_PresignPutObjectResp OK
   * @throws ApiError
   */
  public presignUploadPut(
    requestBody: uploaddto_PresignPutObjectReq,
  ): CancelablePromise<uploaddto_PresignPutObjectResp> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/upload/presign-put',
      body: requestBody,
      mediaType: '*/*',
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Presign S3 put multiple objects
   * Presign S3 put multiple objects
   * @param requestBody request data
   * @returns uploaddto_PresignPutMultiObjectResp OK
   * @throws ApiError
   */
  public presignMultiUploadPut(
    requestBody: uploaddto_PresignPutMultiObjectReq,
  ): CancelablePromise<uploaddto_PresignPutMultiObjectResp> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/upload/presign-put-multi',
      body: requestBody,
      mediaType: '*/*',
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

}
