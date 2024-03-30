/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { entity_ReactionCount } from './entity_ReactionCount';

export type entity_UserStats = {
  comments?: number;
  followed_users?: Array<number>;
  given_reactions?: entity_ReactionCount;
  id?: number;
  registered_lucky_draw_on_topics?: Array<number>;
  saved_topics?: Array<number>;
  taken_reactions?: entity_ReactionCount;
  topics?: number;
};

