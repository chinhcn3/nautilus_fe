'use client';

import styled from '@emotion/styled';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Button from '@mui/material/Button';
import {signOut} from 'next-auth/react';
import {redirect} from 'next/navigation';
import List from '@mui/material/List';
import {ListItemButton, ListItemText} from '@mui/material';
import {themeColor} from '@/common/configs/theme';
import {PropsWithChildren} from 'react';

// noinspection JSUnusedGlobalSymbols
export function DashboardLayoutContainer(props: PropsWithChildren<object>) {
  return (
    <ThemeProvider theme={MuiTheme}>
      <SDashboardLayout>
        <div className="grid-logo">
          <Logo href="#">TechRV</Logo>
        </div>
        <div className="grid-header">
          <Button
            variant="outlined"
            onClick={async () => {
              await signOut();
              redirect('/');
            }}>
            Logout
          </Button>
        </div>
        <div className="grid-nav">
          <List component={'nav'}>
            <ListItemButton href={'/dashboard'}>
              <ListItemText>Dashboard</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText>Categories</ListItemText>
            </ListItemButton>
            <ListItemButton href={'/dashboard/topics'}>
              <ListItemText>Topics</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText>Users</ListItemText>
            </ListItemButton>
          </List>
        </div>
        <div className="grid-body">{props.children}</div>
      </SDashboardLayout>
    </ThemeProvider>
  );
}

const MuiTheme = createTheme({
  palette: {
    mode: 'light'
  }
});

const SDashboardLayout = styled.div`
  display: grid;
  height: 100%;
  grid-template:
    'logo header' 65px
    'nav body' 1fr
    / 300px 1fr;
  > .grid-logo {
    grid-area: logo;
    display: flex;
    place-self: center;
    padding: 0 16px;
    border-bottom: 1px solid ${themeColor('darkBackground')}A0;
  }
  > .grid-header {
    grid-area: header;
    display: flex;
    place-self: center flex-end;
    padding: 0 16px;
    border-bottom: 1px solid rgba(194, 224, 255, 0.08);
  }
  > .grid-nav {
    grid-area: nav;
    padding: 0 16px;
    border-right: 1px solid rgba(194, 224, 255, 0.08);
  }
  > .grid-body {
    grid-area: body;
  }
`;

const Logo = styled.a`
  color: #3378ff;
  font-size: 34px;
  font-weight: 700;
`;
