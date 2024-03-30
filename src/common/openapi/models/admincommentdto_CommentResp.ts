/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { entity_CommentExtra } from './entity_CommentExtra';

export type admincommentdto_CommentResp = {
  content?: string;
  content_warn?: string;
  created_at?: string;
  extra?: entity_CommentExtra;
  id?: number;
  reply_to_id?: number;
  reply_to_user_id?: number;
  root_id?: number;
  status?: string;
  status_info?: string;
  topic_id?: number;
  updated_at?: string;
  updated_by?: number;
  user_id?: number;
};

