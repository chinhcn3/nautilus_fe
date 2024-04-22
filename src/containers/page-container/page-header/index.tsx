import {useSession} from 'next-auth/react';
import Logo from './assets/logo.svg';
import SearchIcon from './assets/ic-search.svg';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import {TPath} from '@/common/path';
import {Container, IconButton, InputBase, Paper, Stack} from "@mui/material";
import Link from "next/link";
import {NotificationsIcon, CaretDownIcon, HamburgerMenu, Close} from "@/containers/page-container/page-header/icons";
import {HeaderMenu} from '@/containers/page-container/page-header/header-menu';
import {ProfileButton} from '@/containers/page-container/page-header/profile-button';
import {LoginButton} from '@/containers/page-container/page-header/login-button';
import {createTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {SearchForm} from "@/containers/page-container/page-header/search-form";
import {useState} from "react";
export function PageHeader() {
    const [isShowMenu, setIsShowMenu] = useState(false);
    const session = useSession();
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536,
            },
        },
    })
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchUpLg = useMediaQuery(theme.breakpoints.up('lg'));
    const handleHamburgerMenu = () => {
        setIsShowMenu(!isShowMenu)
    }
    return (
        <HeaderLayout>
            <Container maxWidth={false} sx={{px: {xs: 1, md: 2}}}>
                <Stack justifyContent="space-between" alignItems="center" direction="row" spacing={2}>
                    <Stack alignItems="center" direction="row" spacing={{md: 5, xs: 1}}>
                        {matchDownMd &&
                            <IconButton onClick={handleHamburgerMenu} sx={{p: 1, backgroundColor: '#f0f0f0'}}>
                                {isShowMenu ?<Close/> : <HamburgerMenu/>}
                            </IconButton>
                        }
                        <HeaderLogo href="/"><Logo/></HeaderLogo>
                        {matchUpLg && <HeaderMenu/>}
                    </Stack>
                    <Stack alignItems="center" direction="row" spacing={{md: 2, xs: 1}}>
                        <WriteButton href={'/compose' satisfies TPath}>Viết và nhận quà</WriteButton>
                        {matchUpMd &&
                            <SearchForm/>
                        }
                        {matchUpSm &&
                            <IconButton sx={{p: 1, backgroundColor: '#f0f0f0'}}>
                                <NotificationsIcon/>
                            </IconButton>
                        }
                        <div>
                            {session.status === 'authenticated' ? (
                                <ProfileButton user={session.data.user!}/>
                            ) : (
                                <LoginButton/>
                            )}
                        </div>
                    </Stack>
                </Stack>
            </Container>
        </HeaderLayout>
    );
}

const HeaderLogo = styled(Link)`
    max-width: 100px;
    flex: 1 0 100px;

    svg {
        width: 100%;
    }

    @media screen and (min-width: 390px) {
        max-width: 116px;
        flex: 1 0 116px;
    }

    @media screen and (min-width: 414px) {
        max-width: 125px;
        flex: 1 0 125px;
    }

    @media screen and (min-width: 430px) {
        max-width: 142px;
        flex: 1 0 142px;
    }

    @media screen and (min-width: 600px) {
        max-width: 190px;
        flex: 1 0 190px;
    }
`

const WriteButton = styled(Link)`
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    padding: 0 16px;
    color: ${themeColor("white")};
    background-color: ${themeColor('primary')};
    line-height: 40px;
    border-radius: 90px;
    font-weight: 500;

    @media screen and (min-width: 375px) {
        padding: 0 24px;
    }

    @media screen and (min-width: 390px) {
        font-size: 14px;
        padding: 0 16px;
    }

    @media screen and (min-width: 414px) {
        padding: 0 24px;
    }

    @media screen and (min-width: 600px) {
        font-size: 16px;
    }
`

const HeaderLayout = styled.header`
    border-bottom: 1px solid ${themeColor('border')};
    height: 64px;
    align-items: center;
    display: flex;

    // .search-box {
    //     padding: 0 16px;
    //     border-radius: 90px;
    //     border: 1px solid ${themeColor('border')};
    //     height: 40px;
    //
    //     input {
    //         line-height: 38px;
    //         height: 100%;
    //         padding: 0;
    //         font-family: 'Inter', sans-serif;
    //         font-size: 14px;
    //         font-weight: 500;
    //         width: 302px;
    //
    //         ::placeholder {
    //             color: ${themeColor('subtitle')};
    //         }
    //     }
    //
    //     button {
    //         padding: 8px 0;
    //
    //         &:hover {
    //             background-color: transparent;
    //         }
    //
    //         @media screen and (max-width: 900px) {
    //             padding: 0;
    //         }
    //     }
    //
    //     @media screen and (max-width: 900px) {
    //         padding: 8px;
    //         background-color: ${themeColor('lightBackground')};
    //         border-color: transparent;
    //     }
    // }

    .header-avatar {
        padding: 0;

        & > svg {
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