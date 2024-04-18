'use client';

import styled from '@emotion/styled';
import React from 'react';
import {ProfileProvider} from '@/containers/dashboard/layout-container/profile-context';
import {themeColor} from '@/common/configs/theme';
import {Sidebar} from '@/containers/dashboard/layout-container/sidebar';
import {TTransformedUser} from '@/common/helpers/transforms/user';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {useIsSmUp} from '@/components/packages/mui/responsive';

export function DashboardLayoutContainer(props: React.PropsWithChildren<{user: TTransformedUser}>) {
  const isSmUp = useIsSmUp();
  return (
    <ProfileProvider user={props.user}>
      <Wrapper>
        <Container>
          <Grid container columnSpacing={4}>
            {isSmUp && (
              <Grid item md={4} lg={3}>
                <Sidebar />
              </Grid>
            )}
            <Grid item xs={12} md={8} lg={9}>
              <Content>{props.children}</Content>
            </Grid>
          </Grid>
        </Container>
      </Wrapper>
    </ProfileProvider>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: ${themeColor('lightBackground')};
  padding-top: 32px;
  padding-bottom: 32px;
`;

const Content = styled.div`
  width: 100%;
  overflow: hidden;
`;
