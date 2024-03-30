/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { sessiondto_CreateFBSessionReq } from '../models/sessiondto_CreateFBSessionReq';
import type { sessiondto_CreateGGSessionReq } from '../models/sessiondto_CreateGGSessionReq';
import type { sessiondto_CreateSessionResp } from '../models/sessiondto_CreateSessionResp';
import type { sessiondto_GetMeResp } from '../models/sessiondto_GetMeResp';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SessionsService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create session for Facebook auth
   * Create session for Facebook auth
   * @param requestBody request data
   * @returns sessiondto_CreateSessionResp OK
   * @throws ApiError
   */
  public createFacebookSession(
    requestBody: sessiondto_CreateFBSessionReq,
  ): CancelablePromise<sessiondto_CreateSessionResp> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/internal/session/facebook',
      body: requestBody,
      mediaType: '*/*',
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Create session for Google auth
   * Create session for Google auth
   * @param requestBody request data
   * @returns sessiondto_CreateSessionResp OK
   * @throws ApiError
   */
  public createGoogleSession(
    requestBody: sessiondto_CreateGGSessionReq,
  ): CancelablePromise<sessiondto_CreateSessionResp> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/internal/session/google',
      body: requestBody,
      mediaType: '*/*',
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Get current session data
   * Get current session data
   * @returns sessiondto_GetMeResp OK
   * @throws ApiError
   */
  public getMe(): CancelablePromise<sessiondto_GetMeResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/session/me',
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

}
