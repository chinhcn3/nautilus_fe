/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { userdto_CreateAccountReq } from '../models/userdto_CreateAccountReq';
import type { userdto_CreateAccountResp } from '../models/userdto_CreateAccountResp';
import type { userdto_FollowUserReq } from '../models/userdto_FollowUserReq';
import type { userdto_GetOtherProfileResp } from '../models/userdto_GetOtherProfileResp';
import type { userdto_GetProfileResp } from '../models/userdto_GetProfileResp';
import type { userdto_ListCommentResp } from '../models/userdto_ListCommentResp';
import type { userdto_ListFollowingUserResp } from '../models/userdto_ListFollowingUserResp';
import type { userdto_ListGivenReactionResp } from '../models/userdto_ListGivenReactionResp';
import type { userdto_ListSavedTopicResp } from '../models/userdto_ListSavedTopicResp';
import type { userdto_ListTakenReactionResp } from '../models/userdto_ListTakenReactionResp';
import type { userdto_ListTopicResp } from '../models/userdto_ListTopicResp';
import type { userdto_UnfollowUserReq } from '../models/userdto_UnfollowUserReq';
import type { userdto_UpdateProfileReq } from '../models/userdto_UpdateProfileReq';
import type { userdto_UpdateProfileResp } from '../models/userdto_UpdateProfileResp';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UsersService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List comments of current user
   * List comments of current user
   * @param sort sort parameter
   * @param filter {{description}}
   * @param page {{description}}
   * @returns userdto_ListCommentResp OK
   * @throws ApiError
   */
  public listUserComment(
    sort?: string,
    filter?: {
      status?: string;
      topic_id?: number;
    },
    page?: {
      offset?: number;
      limit?: number;
    },
  ): CancelablePromise<userdto_ListCommentResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/user/comments',
      query: {
        'sort': sort,
        'filter': filter,
        'page': page,
      },
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * List following users of the current user
   * List following users of the current user
   * @param sort sort parameter
   * @param page {{description}}
   * @returns userdto_ListFollowingUserResp OK
   * @throws ApiError
   */
  public listFollowingUser(
    sort?: string,
    page?: {
      offset?: number;
      limit?: number;
    },
  ): CancelablePromise<userdto_ListFollowingUserResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/user/following-users',
      query: {
        'sort': sort,
        'page': page,
      },
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * List given reactions of current user
   * List given reactions of current user
   * @param sort sort parameter
   * @param page {{description}}
   * @returns userdto_ListGivenReactionResp OK
   * @throws ApiError
   */
  public listUserGivenReaction(
    sort?: string,
    page?: {
      offset?: number;
      limit?: number;
    },
  ): CancelablePromise<userdto_ListGivenReactionResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/user/given-reactions',
      query: {
        'sort': sort,
        'page': page,
      },
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Get current user profile
   * Get current user profile
   * @returns userdto_GetProfileResp OK
   * @throws ApiError
   */
  public getUserProfile(): CancelablePromise<userdto_GetProfileResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/user/profile',
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Update current user profile
   * Update current user profile
   * @param requestBody request data
   * @returns userdto_UpdateProfileResp OK
   * @throws ApiError
   */
  public updateUserProfile(
    requestBody: userdto_UpdateProfileReq,
  ): CancelablePromise<userdto_UpdateProfileResp> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/user/profile',
      body: requestBody,
      mediaType: '*/*',
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * List taken reactions of current user
   * List taken reactions of current user
   * @param sort sort parameter
   * @param page {{description}}
   * @returns userdto_ListTakenReactionResp OK
   * @throws ApiError
   */
  public listUserTakenReaction(
    sort?: string,
    page?: {
      offset?: number;
      limit?: number;
    },
  ): CancelablePromise<userdto_ListTakenReactionResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/user/taken-reactions',
      query: {
        'sort': sort,
        'page': page,
      },
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * List saved topics of the current user
   * List saved topics of the current user
   * @param sort sort parameter
   * @param page {{description}}
   * @returns userdto_ListSavedTopicResp OK
   * @throws ApiError
   */
  public listSavedTopic(
    sort?: string,
    page?: {
      offset?: number;
      limit?: number;
    },
  ): CancelablePromise<userdto_ListSavedTopicResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/user/topic-saves',
      query: {
        'sort': sort,
        'page': page,
      },
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * List topics of current user
   * List topics of current user
   * @param sort sort parameter
   * @param filter {{description}}
   * @param page {{description}}
   * @returns userdto_ListTopicResp OK
   * @throws ApiError
   */
  public listUserTopic(
    sort?: string,
    filter?: {
      status?: string;
      type?: string;
      category_id?: number;
    },
    page?: {
      offset?: number;
      limit?: number;
    },
  ): CancelablePromise<userdto_ListTopicResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/user/topics',
      query: {
        'sort': sort,
        'filter': filter,
        'page': page,
      },
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Create new account
   * Create new account
   * @param requestBody request data
   * @returns userdto_CreateAccountResp OK
   * @throws ApiError
   */
  public createAccount(
    requestBody: userdto_CreateAccountReq,
  ): CancelablePromise<userdto_CreateAccountResp> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/users/register',
      body: requestBody,
      mediaType: '*/*',
      errors: {
        400: `Bad Request`,
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Unfollow a user
   * Unfollow a user
   * @param id topic id
   * @param requestBody request data
   * @returns any OK
   * @throws ApiError
   */
  public deleteUserFollowing(
    id: number,
    requestBody: userdto_UnfollowUserReq,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/users/{id}/follow',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: '*/*',
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Follow a user
   * Follow a user
   * @param id user id
   * @param requestBody request data
   * @returns any OK
   * @throws ApiError
   */
  public createUserFollowing(
    id: number,
    requestBody: userdto_FollowUserReq,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/users/{id}/follow',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: '*/*',
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Get other user profile
   * Get other user profile
   * @param id user id
   * @returns userdto_GetOtherProfileResp OK
   * @throws ApiError
   */
  public getOtherUserProfile(
    id: number,
  ): CancelablePromise<userdto_GetOtherProfileResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{id}/profile',
      path: {
        'id': id,
      },
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

}
