/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { admincommentdto_CommentResp } from './admincommentdto_CommentResp';
import type { contentdto_CategoryResp } from './contentdto_CategoryResp';
import type { contentdto_TopicResp } from './contentdto_TopicResp';
import type { contentdto_UserResp } from './contentdto_UserResp';

export type userdto_CommentDataResp = {
  categories?: Record<string, contentdto_CategoryResp>;
  comments?: Array<admincommentdto_CommentResp>;
  topics?: Record<string, contentdto_TopicResp>;
  user?: contentdto_UserResp;
};

