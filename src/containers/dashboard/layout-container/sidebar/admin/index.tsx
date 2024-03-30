import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import {MenuItem} from '@/containers/dashboard/layout-container/sidebar/menu-item';
import {usePathname} from 'next/navigation';
import CommentsDisabledOutlinedIcon from '@mui/icons-material/CommentsDisabledOutlined';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import {useProfileContext} from '../../profile-context';

export function AdminMenuItems() {
  const pathName = usePathname();

  const {user} = useProfileContext();
  const role = user.s_role;
  if (role === 'user') return null;

  return (
    <div>
      <Separator />
      <ItemsWrapper>
        <MenuItem
          icon={<FeedOutlinedIcon />}
          label={'Bài viết'}
          {...MenuItem.buildMenuItemProps('/dashboard/admin/topics', pathName)}
        />
        <MenuItem
          icon={<MarkUnreadChatAltOutlinedIcon />}
          label={'Bình luận chờ duyệt'}
          {...MenuItem.buildMenuItemProps('/dashboard/admin/comments', pathName)}
        />
        <MenuItem
          icon={<CommentsDisabledOutlinedIcon />}
          label={'Bình luận báo xấu'}
          {...MenuItem.buildMenuItemProps('/dashboard/admin/reported-comments', pathName)}
        />
        <MenuItem
          icon={<PeopleOutlinedIcon />}
          label={'Users'}
          {...MenuItem.buildMenuItemProps('/dashboard/admin/users', pathName)}
        />
      </ItemsWrapper>
    </div>
  );
}

function Separator() {
  return (
    <SepWrapper>
      <div className="line" />
      <span>Khu vực admin</span>
    </SepWrapper>
  );
}

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SepWrapper = styled.div`
  color: ${themeColor('secondary')};
  font-weight: 700;
  text-align: center;
  position: relative;
  margin: 20px 0;
  > span {
    background: ${themeColor('white')};
    z-index: 1;
    position: relative;
    padding: 0 8px;
  }
  .line {
    position: absolute;
    top: 10px;
    left: 0;
    height: 1px;
    width: 100%;
    background: ${themeColor('secondary')};
    z-index: 0;
  }
`;
