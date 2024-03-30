/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { adminuserdto_BanUserReq } from '../models/adminuserdto_BanUserReq';
import type { adminuserdto_BanUserResp } from '../models/adminuserdto_BanUserResp';
import type { adminuserdto_ListUserResp } from '../models/adminuserdto_ListUserResp';
import type { adminuserdto_UnbanUserReq } from '../models/adminuserdto_UnbanUserReq';
import type { adminuserdto_UnbanUserResp } from '../models/adminuserdto_UnbanUserResp';
import type { adminuserdto_UpdateRoleReq } from '../models/adminuserdto_UpdateRoleReq';
import type { adminuserdto_UpdateRoleResp } from '../models/adminuserdto_UpdateRoleResp';
import type { adminuserdto_UpdateUserPointsReq } from '../models/adminuserdto_UpdateUserPointsReq';
import type { adminuserdto_UpdateUserPointsResp } from '../models/adminuserdto_UpdateUserPointsResp';
import type { adminuserdto_UpdateUserProfileReq } from '../models/adminuserdto_UpdateUserProfileReq';
import type { adminuserdto_UpdateUserProfileResp } from '../models/adminuserdto_UpdateUserProfileResp';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdminUsersService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List users
   * List users
   * @param sort sort parameter
   * @param filter {{description}}
   * @param page {{description}}
   * @returns adminuserdto_ListUserResp OK
   * @throws ApiError
   */
  public adminListUser(
    sort?: string,
    filter?: {
      search?: string;
      ids?: string;
      emails?: string;
      nick_names?: string;
      phones?: string;
    },
    page?: {
      offset?: number;
      limit?: number;
    },
  ): CancelablePromise<adminuserdto_ListUserResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/admin/users',
      query: {
        'sort': sort,
        'filter': filter,
        'page': page,
      },
      errors: {
        400: `Bad Request`,
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Ban an account
   * Ban an account
   * @param id user id
   * @param requestBody request data
   * @returns adminuserdto_BanUserResp OK
   * @throws ApiError
   */
  public adminBanUser(
    id: number,
    requestBody: adminuserdto_BanUserReq,
  ): CancelablePromise<adminuserdto_BanUserResp> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/admin/users/{id}/ban',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: '*/*',
      errors: {
        400: `Bad Request`,
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Add/remove user points
   * Add/remove user points
   * @param id user id
   * @param requestBody request data
   * @returns adminuserdto_UpdateUserPointsResp OK
   * @throws ApiError
   */
  public adminUpdateUserPoints(
    id: number,
    requestBody: adminuserdto_UpdateUserPointsReq,
  ): CancelablePromise<adminuserdto_UpdateUserPointsResp> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/admin/users/{id}/points',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: '*/*',
      errors: {
        400: `Bad Request`,
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Update user
   * Update user
   * @param id user id
   * @param requestBody request data
   * @returns adminuserdto_UpdateUserProfileResp OK
   * @throws ApiError
   */
  public adminUpdateUserProfile(
    id: number,
    requestBody: adminuserdto_UpdateUserProfileReq,
  ): CancelablePromise<adminuserdto_UpdateUserProfileResp> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/admin/users/{id}/profile',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: '*/*',
      errors: {
        400: `Bad Request`,
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Update user role
   * Update user role
   * @param id user id
   * @param requestBody request data
   * @returns adminuserdto_UpdateRoleResp OK
   * @throws ApiError
   */
  public adminUpdateUserRole(
    id: number,
    requestBody: adminuserdto_UpdateRoleReq,
  ): CancelablePromise<adminuserdto_UpdateRoleResp> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/admin/users/{id}/role',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: '*/*',
      errors: {
        400: `Bad Request`,
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Unban an account
   * Unban an account
   * @param id user id
   * @param requestBody request data
   * @returns adminuserdto_UnbanUserResp OK
   * @throws ApiError
   */
  public adminUnbanUser(
    id: number,
    requestBody: adminuserdto_UnbanUserReq,
  ): CancelablePromise<adminuserdto_UnbanUserResp> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/admin/users/{id}/unban',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: '*/*',
      errors: {
        400: `Bad Request`,
        500: `Internal Server Error`,
      },
    });
  }

}
