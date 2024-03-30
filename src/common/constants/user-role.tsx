export const userRoles = ['user', 'support', 'mod', 'smod', 'admin', 'sadmin'] as const;

export type TUserRole = typeof userRoles[number];
export const canUpdateRoles: TUserRole[] = ['smod', 'admin', 'sadmin'];

export const userRolesWithLocale: Record<TUserRole, string> = {
  user: 'User',
  support: 'Support',
  mod: 'Mod',
  smod: 'Super Mod',
  admin: 'Admin',
  sadmin: 'Super Admin'
};
