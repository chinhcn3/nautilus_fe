import {
  userdto_ProfileExtraReq,
  userdto_ProfileResp,
  userdto_UpdateProfileReq
} from '@/common/openapi';
import * as Yup from 'yup';
import {format} from 'date-fns/format';

export const userdto_ProfileExtraReqSchema = Yup.object<userdto_ProfileExtraReq>().shape({
  address: Yup.string(),
  notes: Yup.string(),
  phone: Yup.string(),
  gender: Yup.string(),
  birthdate: Yup.string().optional(),
  facebook_url: Yup.string(),
  linkedin_url: Yup.string(),
  twitter_url: Yup.string(),
  website_url: Yup.string(),
});

export const userdto_UpdateProfileReqSchema = Yup.object<userdto_UpdateProfileReq>().shape({
  avatar: Yup.string(),
  extra: userdto_ProfileExtraReqSchema,
  full_name: Yup.string(),
  nick_name: Yup.string()
});

export type TUpdateProfileReq = Yup.InferType<typeof userdto_UpdateProfileReqSchema>;

export function transformProfileToUpdateProfileReq(
  profile: userdto_ProfileResp
): TUpdateProfileReq {
  return {
    avatar: profile.user?.avatar,
    nick_name: profile.user?.nick_name,
    full_name: profile.user?.full_name,
    extra: {
      ...profile.user_details,

      // conforms browser
      birthdate:
        profile.user_details?.birthdate && format(profile.user_details?.birthdate, 'yyyy-MM-dd')
    }
  };
}
