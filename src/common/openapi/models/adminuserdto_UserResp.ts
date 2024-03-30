/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminuserdto_UserDetailsResp } from './adminuserdto_UserDetailsResp';
import type { entity_UserExtra } from './entity_UserExtra';

export type adminuserdto_UserResp = {
  avatar?: string;
  created_at?: string;
  email?: string;
  extra?: entity_UserExtra;
  full_name?: string;
  id?: number;
  kudos?: number;
  level?: string;
  nick_name?: string;
  points?: number;
  provider?: string;
  provider_id?: string;
  s_role?: string;
  status?: string;
  status_info?: string;
  updated_at?: string;
  updated_by?: number;
  user_details?: adminuserdto_UserDetailsResp;
};

