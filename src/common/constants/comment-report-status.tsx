export const commentReportStatuses = ['', 'INVALID', 'CONFIRMED'] as const;
export type TCommentReportStatus = typeof commentReportStatuses[number];
