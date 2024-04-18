/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { contentdto_TopicResp } from './contentdto_TopicResp';
import type { contentdto_UserResp } from './contentdto_UserResp';
import type { notificationdto_NotificationResp } from './notificationdto_NotificationResp';

export type notificationdto_NotificationDataResp = {
  notifications?: Array<notificationdto_NotificationResp>;
  topics?: Record<string, contentdto_TopicResp>;
  users?: Record<string, contentdto_UserResp>;
};

