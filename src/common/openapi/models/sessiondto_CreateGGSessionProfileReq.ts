/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type sessiondto_CreateGGSessionProfileReq = {
  /**
   * Iss           string `json:"iss"`
   */
  azp?: string;
  /**
   * Aud           string `json:"aud"`
   * Sub           string `json:"sub"`
   */
  email?: string;
  family_name?: string;
  given_name?: string;
  /**
   * EmailVerified bool   `json:"email_verified"`
   * AtHash        string `json:"at_hash"`
   */
  name?: string;
  picture?: string;
};

