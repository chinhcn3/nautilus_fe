/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { admintopicdto_TopicResp } from './admintopicdto_TopicResp';
import type { contentdto_CategoryResp } from './contentdto_CategoryResp';
import type { contentdto_UserResp } from './contentdto_UserResp';

export type userdto_TopicDataResp = {
  categories?: Record<string, contentdto_CategoryResp>;
  topics?: Array<admintopicdto_TopicResp>;
  total?: number;
  user?: contentdto_UserResp;
};

