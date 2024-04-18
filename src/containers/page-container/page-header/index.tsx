import {useSession} from 'next-auth/react';
import Logo from './assets/logo.svg';
import SearchIcon from './assets/ic-search.svg';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import {TPath} from '@/common/path';
import {Container, IconButton, InputBase, Paper, Stack} from "@mui/material";
import Link from "next/link";
import {NotificationsIcon} from '@/containers/page-container/page-header/icons';
import {HeaderMenu} from '@/containers/page-container/page-header/header-menu';
import {ProfileButton} from '@/containers/page-container/page-header/profile-button';
import {LoginButton} from '@/containers/page-container/page-header/login-button';
export function PageHeader() {
  const session = useSession();
  return (
    <HeaderLayout>
      <Container maxWidth={false}>
        <Stack justifyContent="space-between" alignItems="center" direction="row" spacing={2}>
          <Stack alignItems="center" direction="row" spacing={{md: 5, xs: 2}}>
            <HeaderLogo href="/">
              <Logo/>
            </HeaderLogo>
            <HeaderMenu/>
          </Stack>
          <Stack alignItems="center" direction="row" spacing={{md: 2, xs: 1}}>
            <WriteButton href={'/compose' satisfies TPath}>Viết và nhận quà</WriteButton>
            <Paper elevation={0} className="search-box" component="form" sx={{display: {xs: 'none', md: 'inline-flex'}}}>
              <InputBase sx={{display: {xs: 'none', md: 'inline-flex'}}}
                         placeholder="Tìm sản phẩm công nghệ, bài viết, review..."
              />
              <IconButton type="button" aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
            <IconButton sx={{p: 1, backgroundColor: '#f0f0f0', display: {xs: 'none', md: 'inline-flex'}}}>
              <NotificationsIcon />
            </IconButton>
            <div>
              {session.status === 'authenticated' ? (
                <ProfileButton user={session.data.user!} />
              ) : (
                <LoginButton />
              )}
            </div>

          </Stack>
        </Stack>
      </Container>
    </HeaderLayout>
  );
}

const HeaderLogo = styled(Link)`
    max-width: 190px;
    flex: 1 0 190px;

    svg {
        width: 100%;
    }

    @media screen and (max-width: 600px) {
        max-width: 116px;
        flex: 1 0 116px;
    }
`

const WriteButton = styled(Link)`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    padding: 0 24px;
    color: ${themeColor("white")};
    background-color: ${themeColor('primary')};
    line-height: 40px;
    border-radius: 90px;
    font-weight: 500;
`

const HeaderLayout = styled.header`
    border-bottom: 1px solid ${themeColor('border')};
    height: 64px;
    align-items: center;
    display: flex;

    .search-box {
        padding: 0 16px;
        border-radius: 90px;
        border: 1px solid ${themeColor('border')};
        height: 40px;

        input {
            line-height: 38px;
            height: 100%;
            padding: 0;
            font-family: 'Inter', sans-serif;
            font-size: 14px;
            font-weight: 500;
            width: 302px;

            ::placeholder {
                color: ${themeColor('subtitle')};
            }
        }

        button {
            padding: 8px 0;

            &:hover {
                background-color: transparent;
            }

            @media screen and (max-width: 600px) {
                padding: 0;
            }
        }

        @media screen and (max-width: 600px) {
            padding: 8px;
            background-color: ${themeColor('lightBackground')};
            border-color: transparent;
        }
    }

    .header-avatar {
        padding: 0;

        &>svg {
            margin-left: 8px;

            @media screen and (max-width: 600px) {
                display: none;
            }
        }

        &:hover {
            background-color: transparent;
        }
    }
`;
