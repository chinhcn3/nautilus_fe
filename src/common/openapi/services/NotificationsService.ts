/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { notificationdto_GetNotificationSettingResp } from '../models/notificationdto_GetNotificationSettingResp';
import type { notificationdto_ListLatestNotificationReq } from '../models/notificationdto_ListLatestNotificationReq';
import type { notificationdto_ListLatestNotificationResp } from '../models/notificationdto_ListLatestNotificationResp';
import type { notificationdto_ListNotificationReq } from '../models/notificationdto_ListNotificationReq';
import type { notificationdto_ListNotificationResp } from '../models/notificationdto_ListNotificationResp';
import type { notificationdto_MarkMultiNotificationsAsReadReq } from '../models/notificationdto_MarkMultiNotificationsAsReadReq';
import type { notificationdto_MarkNotificationAsReadReq } from '../models/notificationdto_MarkNotificationAsReadReq';
import type { notificationdto_UpdateNotificationSettingReq } from '../models/notificationdto_UpdateNotificationSettingReq';
import type { notificationdto_UpdateNotificationSettingResp } from '../models/notificationdto_UpdateNotificationSettingResp';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class NotificationsService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get notification setting of the current user
   * Get notification setting of the current user
   * @returns notificationdto_GetNotificationSettingResp OK
   * @throws ApiError
   */
  public getNotificationSettings(): CancelablePromise<notificationdto_GetNotificationSettingResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/notification-setting',
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Update notification setting of the current user
   * Update notification setting of the current user
   * @param requestBody request data
   * @returns notificationdto_UpdateNotificationSettingResp OK
   * @throws ApiError
   */
  public updateNotificationSettings(
    requestBody: notificationdto_UpdateNotificationSettingReq,
  ): CancelablePromise<notificationdto_UpdateNotificationSettingResp> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/notification-setting',
      body: requestBody,
      mediaType: '*/*',
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * List notification
   * List notification
   * @param requestBody request data
   * @param sort sort parameter
   * @param page {{description}}
   * @returns notificationdto_ListNotificationResp OK
   * @throws ApiError
   */
  public listNotification(
    requestBody: notificationdto_ListNotificationReq,
    sort?: string,
    page?: {
      offset?: number;
      limit?: number;
    },
  ): CancelablePromise<notificationdto_ListNotificationResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/notifications',
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

  /**
   * List latest notifications
   * List latest notifications
   * @param requestBody request data
   * @returns notificationdto_ListLatestNotificationResp OK
   * @throws ApiError
   */
  public listLatestNotification(
    requestBody: notificationdto_ListLatestNotificationReq,
  ): CancelablePromise<notificationdto_ListLatestNotificationResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/notifications/latest',
      body: requestBody,
      mediaType: '*/*',
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Mark multiple notifications as read
   * Mark multiple notifications as read
   * @param requestBody request data
   * @returns any OK
   * @throws ApiError
   */
  public updateMultiNotificationMarkAsRead(
    requestBody: notificationdto_MarkMultiNotificationsAsReadReq,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/notifications/mark-read',
      body: requestBody,
      mediaType: '*/*',
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Mark notification as read
   * Mark notification as read
   * @param id notification id
   * @param requestBody request data
   * @returns any OK
   * @throws ApiError
   */
  public updateNotificationMarkAsRead(
    id: number,
    requestBody: notificationdto_MarkNotificationAsReadReq,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/notifications/{id}/mark-read',
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

}
