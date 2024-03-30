export const topicStatuses = ['ALL', 'WAITING', 'APPROVED', 'REJECTED', 'DELETED'] as const;
export const apiTopicStatuses = [undefined, '', 'OK', 'REJECTED', 'DELETED'] as const;
export type TTopicStatus = typeof topicStatuses[number];
export type TApiTopicStatus = typeof apiTopicStatuses[number];
export const topicStatusesWithLocale: Record<TTopicStatus, string> = {
  ALL: 'Tất cả',
  WAITING: 'Chờ duyệt',
  APPROVED: 'Đã duyệt',
  REJECTED: 'Đã từ chối',
  DELETED: 'Đã xoá'
};

export const mapStatusesToApiStatus: Record<TTopicStatus, TApiTopicStatus> = {
  ALL: undefined,
  WAITING: '',
  APPROVED: 'OK',
  DELETED: 'DELETED',
  REJECTED: 'REJECTED'
};

export const apiTopicStatusesWithLocale: Record<NonNullable<TApiTopicStatus>, string> = {
  '': 'Chờ duyệt',
  OK: 'Đã duyệt',
  REJECTED: 'Đã từ chối',
  DELETED: 'Đã xóa'
};
