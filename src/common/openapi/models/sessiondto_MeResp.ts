/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { sessiondto_ConfigResp } from './sessiondto_ConfigResp';
import type { userdto_UserResp } from './userdto_UserResp';
import type { values_UserPermissionMap } from './values_UserPermissionMap';

export type sessiondto_MeResp = {
  config?: sessiondto_ConfigResp;
  permissions?: values_UserPermissionMap;
  user?: userdto_UserResp;
};

