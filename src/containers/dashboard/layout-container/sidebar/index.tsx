import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import {MenuItem} from '@/containers/dashboard/layout-container/sidebar/menu-item';
import * as Icons from './icons';
import {signOut} from 'next-auth/react';
import {usePathname} from 'next/navigation';
import {AdminMenuItems} from '@/containers/dashboard/layout-container/sidebar/admin';
import {SupportButton} from '@/containers/dashboard/layout-container/sidebar/SupportButton';
import {useIsSmUp} from '@/components/packages/mui/responsive';

export function Sidebar() {
  const pathname = usePathname();

  const isSmUp = useIsSmUp();

  if (!isSmUp) return null;

  return (
    <Wrapper>
      <MenuItem
        icon={<Icons.UserIcon />}
        label={'Hồ sơ'}
        {...MenuItem.buildMenuItemProps('/dashboard', pathname)}
      />
      <MenuItem
        icon={<Icons.EditIcon />}
        label={'Bài của tôi'}
        {...MenuItem.buildMenuItemProps('/dashboard/topics', pathname)}
      />
      <MenuItem
        icon={<Icons.CommentIcon />}
        label={'Bình luận của tôi'}
        {...MenuItem.buildMenuItemProps('/dashboard/comments', pathname)}
      />
      <MenuItem
        icon={<Icons.LikeIcon />}
        label={'Tương tác của tôi'}
        {...MenuItem.buildMenuItemProps('/dashboard/reactions', pathname)}
      />
      <MenuItem
        icon={<Icons.LikedTopicIcon />}
        label={'Bài theo dõi'}
        {...MenuItem.buildMenuItemProps('/dashboard/saved-topics', pathname)}
      />
      <MenuItem
        icon={<Icons.LikedAuthorIcon />}
        label={'Tác giả theo dõi'}
        {...MenuItem.buildMenuItemProps('/dashboard/following-users', pathname)}
      />
      <MenuItem
        icon={<Icons.SettingIcon />}
        label={'Cấu hình'}
        {...MenuItem.buildMenuItemProps('/dashboard/settings', pathname)}
      />

      <AdminMenuItems />

      <div className="gap" />

      <SupportButton />
      <MenuItem
        icon={<Icons.LogoutIcon />}
        label={'Đăng xuất'}
        secondary={true}
        onClick={() => signOut()}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100%;
  padding: 32px;
  background-color: ${themeColor('white')};
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  row-gap: 8px;

  > .gap {
    margin-top: auto;
  }
`;
