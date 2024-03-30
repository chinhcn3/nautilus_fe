/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type sessiondto_CreateGGSessionAccountReq = {
  /**
   * Type              string `json:"type"`
   * AccessToken       string `json:"access_token"`
   * ExpiresAt         int    `json:"expires_at"`
   * Scope             string `json:"scope"`
   * TokenType         string `json:"token_type"`
   */
  id_token?: string;
  provider?: string;
  /**
   * FE next-auth uses this field
   */
  providerAccountId?: string;
};

