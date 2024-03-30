export const topicTypes = ['NEWS', 'REVIEW', 'ADS', 'VIDEO'] as const;
export type TTopicType = typeof topicTypes[number];

export const topicTypesWithLocale: Record<TTopicType, string> = {
  NEWS: 'Tin tức',
  REVIEW: 'Đánh giá',
  ADS: 'Quảng cáo',
  VIDEO: 'Video'
};
