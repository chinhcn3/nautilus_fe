'use client';

import {createContext, PropsWithChildren, useContext} from 'react';
import {TTransformedUser} from '@/common/helpers/transforms/user';

const defaultContextProps = {
  user: {} as TTransformedUser
};

export type ProfileContextProps = typeof defaultContextProps;

export const ProfileContext = createContext(defaultContextProps);

export const ProfileProvider = ({children, ...props}: PropsWithChildren<ProfileContextProps>) => {
  return <ProfileContext.Provider value={props}>{children}</ProfileContext.Provider>;
};

export const useProfileContext = () => useContext(ProfileContext);
