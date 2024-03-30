export const userStatuses = ['OK', 'BANNED'] as const;
export type TUserStatus = typeof userStatuses[number];
