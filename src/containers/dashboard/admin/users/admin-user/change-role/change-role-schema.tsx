import {RJSFSchema} from '@rjsf/utils';
import {userRoles, userRolesWithLocale} from '@/common/constants/user-role';

export const changeRoleSchema: RJSFSchema = {
  required: ['role'],
  properties: {
    role: {
      title: 'Role',
      type: 'string',
      anyOf: userRoles.map((role) => ({
        title: userRolesWithLocale[role],
        type: 'string',
        enum: [role]
      }))
    }
  }
};
