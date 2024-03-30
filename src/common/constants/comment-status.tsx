export const commentStatuses = ['', 'OK', 'REJECTED', 'DELETED'] as const;
export type TCommentStatus = typeof commentStatuses[number];
