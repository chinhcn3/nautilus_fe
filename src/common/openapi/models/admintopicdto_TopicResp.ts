/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { entity_LuckyDraw } from './entity_LuckyDraw';
import type { entity_TopicExtra } from './entity_TopicExtra';

export type admintopicdto_TopicResp = {
  allow_discussion?: boolean;
  category_id?: number;
  content?: string;
  content_warn?: string;
  created_at?: string;
  extra?: entity_TopicExtra;
  id?: number;
  image?: string;
  long_title?: string;
  lucky_draw?: entity_LuckyDraw;
  pinned?: string;
  slug?: string;
  status?: string;
  status_info?: string;
  tags?: Array<string>;
  thumbnail?: string;
  title?: string;
  type?: string;
  updated_at?: string;
  updated_by?: number;
  user_id?: number;
  video?: string;
};

