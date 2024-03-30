import {TOP_MENU} from '@/common/constants/top-menu';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import Link from 'next/link';

export function Menu() {
  return (
    <HeaderMenu>
      {TOP_MENU.map((item) => (
        <MenuItem key={item.title} href={item.path} className="active">
          {item.title}
        </MenuItem>
      ))}
    </HeaderMenu>
  );
}

const HeaderMenu = styled.div`
  display: flex;
`;

const MenuItem = styled(Link)`
  padding: 22px 16px;
  font-weight: 600;
  color: ${themeColor('black')};
  .active {
    color: ${themeColor('primary')};
  }
`;
