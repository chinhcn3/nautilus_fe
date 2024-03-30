/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { jwt_Token } from './jwt_Token';
import type { userdto_UserResp } from './userdto_UserResp';
import type { values_UserPermissionMap } from './values_UserPermissionMap';

export type sessiondto_SessionResp = {
  access_token?: jwt_Token;
  permissions?: values_UserPermissionMap;
  user?: userdto_UserResp;
};

