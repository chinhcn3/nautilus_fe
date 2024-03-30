/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { contentdto_TopicResp } from './contentdto_TopicResp';
import type { contentdto_UserResp } from './contentdto_UserResp';
import type { userdto_ReactionResp } from './userdto_ReactionResp';

export type userdto_ReactionDataResp = {
  reactions?: Array<userdto_ReactionResp>;
  topics?: Record<string, contentdto_TopicResp>;
  total?: number;
  users?: Record<string, contentdto_UserResp>;
};

