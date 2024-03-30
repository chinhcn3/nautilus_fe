export const luckyDrawStatuses = ['OK', 'PAUSED', 'CANCELLED'] as const;
export type TLuckyDrawStatus = typeof luckyDrawStatuses[number];
export const luckyDrawStatusesWithLocale: Record<TLuckyDrawStatus, string> = {
  OK: 'Hoạt động',
  PAUSED: 'Tạm ngừng',
  CANCELLED: 'Đã huỷ'
};
