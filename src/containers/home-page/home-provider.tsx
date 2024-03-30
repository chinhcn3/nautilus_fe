'use client';

import {createContext, PropsWithChildren, useContext} from 'react';
import {type contentdto_HomeContentResp} from '@/common/openapi';

const defaultContextProps = {
  home: {} as contentdto_HomeContentResp
};

export type HomeContextProps = typeof defaultContextProps;

export const HomePageContext = createContext(defaultContextProps);

export const HomePageProvider = ({children, ...props}: PropsWithChildren<HomeContextProps>) => {
  return <HomePageContext.Provider value={props}>{children}</HomePageContext.Provider>;
};

export const useHomePageContext = () => useContext(HomePageContext);
