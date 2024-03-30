/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { entity_LuckyDraw } from './entity_LuckyDraw';
import type { entity_TopicStats } from './entity_TopicStats';

export type contentdto_TopicResp = {
  allow_discussion?: boolean;
  category_id?: number;
  check_code?: string;
  content?: string;
  id?: number;
  image?: string;
  long_title?: string;
  lucky_draw?: entity_LuckyDraw;
  published_at?: string;
  slug?: string;
  stats?: entity_TopicStats;
  thumbnail?: string;
  title?: string;
  type?: string;
  user_id?: number;
  video?: string;
};

