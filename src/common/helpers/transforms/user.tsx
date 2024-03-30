import {userdto_UserResp} from '../../openapi';

export const genders = ['M', 'F', 'O'] as const;
export type TGender = typeof genders[number];

// DO NOT CHANGE POSITION, this is how we compare the role level
export const roles = ['user', 'support', 'mod', 'smod', 'admin', 'sadmin'] as const;
export type TRole = typeof roles[number];

export class UserTransform {
  /**
   * @return TransformedUser
   */
  static transformUser(user: userdto_UserResp) {
    return {
      ...user,
      s_role: user.s_role as TRole
    };
  }
}

export type TTransformedUser = ReturnType<typeof UserTransform.transformUser>;
