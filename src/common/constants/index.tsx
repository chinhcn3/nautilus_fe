export const SUPPORTED_LOGIN_PROVIDERS = ['google', 'facebook'] as const;
export type ISupportedLoginProvider = typeof SUPPORTED_LOGIN_PROVIDERS[number];

export const PROFILE_TABS = ['profile', 'my-topics'] as const;
export type TProfileTab = typeof PROFILE_TABS[number];

export const DEFAULT_PAGE_SIZE = 20;
