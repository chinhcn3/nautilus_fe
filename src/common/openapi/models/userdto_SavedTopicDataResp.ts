/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { contentdto_CategoryResp } from './contentdto_CategoryResp';
import type { contentdto_UserResp } from './contentdto_UserResp';
import type { userdto_SavedTopicResp } from './userdto_SavedTopicResp';

export type userdto_SavedTopicDataResp = {
  categories?: Record<string, contentdto_CategoryResp>;
  topics?: Array<userdto_SavedTopicResp>;
  total?: number;
  users?: Record<string, contentdto_UserResp>;
};

