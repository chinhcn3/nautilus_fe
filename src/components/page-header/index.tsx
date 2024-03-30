import {Menu} from '@/components/page-header/menu';
import {useSession} from 'next-auth/react';
import Logo from './assets/logo.svg';
import SearchIcon from './assets/ic-search.svg';
import {LoginButton} from '@/components/page-header/login-button';
import {ProfileButton} from '@/components/page-header/profile-button';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import Button from '@mui/material/Button';
import {TPath} from '@/common/path';

export function PageHeader() {
  const session = useSession();
  return (
    <HeaderLayout>
      <div className={'header-content'}>
        <div className={'left'}>
          <Logo />
        </div>
        <Menu />
        <div className={'right'}>
          <Button variant={'contained'} className={'write-button'} href={'/compose' satisfies TPath}>
            Viết và nhận quà
          </Button>
          <div className={'search-box'}>
            <input type="text" className="search-input" placeholder="Tìm kiếm..." />
            <button className="search-button">
              <SearchIcon />
            </button>
          </div>
          <div>
            {session.status === 'authenticated' ? (
              <ProfileButton user={session.data.user!} />
            ) : (
              <LoginButton />
            )}
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
}

const HeaderLayout = styled.header`
  padding: 0 40px;
  border-bottom: 1px solid ${themeColor('border')};

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      margin-right: 24px;
    }

    .right {
      display: flex;
      align-items: center;
      .write-button {
        border-radius: 25px;
        height: 40px;
        color: ${themeColor('white')};
        width: 176px;
        flex-shrink: 0;
      }
      .search-box {
        width: 100%;
        position: relative;
        display: flex;
        border: 1px solid ${themeColor('border')};
        border-radius: 25px;
        padding: 0 16px;
        margin: 0 16px;
        .search-input {
          width: 100%;
          outline: none;
          font-size: 16px;
          border: 0;
        }
        .user-info {
          flex-shrink: 0;
        }
      }
    }
  }
`;
