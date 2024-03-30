export const PINNED_TO = ['HOME', 'PINNED', ''] as const;
export type TPinnedTo = typeof PINNED_TO[number];
export const PINNED_TO_LABELS: Record<TPinnedTo, string> = {
  HOME: 'Trang chủ',
  PINNED: 'Nổi bật',
  '': 'None'
};
