'use client';

import styled from '@emotion/styled';
import React from 'react';
import {ProfileProvider} from '@/containers/dashboard/layout-container/profile-context';
import {themeColor} from '@/common/configs/theme';
import {Sidebar} from '@/containers/dashboard/layout-container/sidebar';
import {TTransformedUser} from '@/common/helpers/transforms/user';

export function DashboardLayoutContainer(props: React.PropsWithChildren<{user: TTransformedUser}>) {
  return (
    <ProfileProvider user={props.user}>
      <Wrapper>
        <Sidebar />
        <Content>{props.children}</Content>
      </Wrapper>
    </ProfileProvider>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: ${themeColor('lightBackground')};
  display: grid;
  grid-template-columns: 292px 1fr;
  padding: 32px;
  gap: 32px;
`;

const Content = styled.div`
  width: 100%;
  overflow: hidden;
`;
