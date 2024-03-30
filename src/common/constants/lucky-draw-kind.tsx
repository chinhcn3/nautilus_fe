export const luckyDrawKinds = ['BIG', 'MEDIUM', 'SMALL'] as const;
export type LuckyDrawKind = typeof luckyDrawKinds[number];
