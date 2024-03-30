/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { entity_LuckyDraw } from './entity_LuckyDraw';

export type admintopicdto_UpdateTopicReq = {
  allow_discussion?: boolean;
  bonus_kudos?: number;
  bonus_points?: number;
  /**
   * Required when set status to OK
   */
  category_id?: number;
  clear_current_tags?: boolean;
  id?: number;
  info?: string;
  /**
   * Attach a lucky draw program to this topic
   */
  lucky_draw?: entity_LuckyDraw;
  magazine_styled?: boolean;
  /**
   * values are HOME, PINNED, ""
   */
  pinned_to?: string;
  /**
   * values are OK, REJECTED, ""
   */
  status?: string;
  tags?: Array<string>;
  type?: string;
};

