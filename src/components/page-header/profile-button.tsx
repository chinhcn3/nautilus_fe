import PopupState, {bindMenu, bindTrigger} from 'material-ui-popup-state';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Avatar} from '@/components/user/avatar';
import {userdto_UserResp} from '@/common/openapi';
import {useRef} from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import Person from '@mui/icons-material/Person';
import Logout from '@mui/icons-material/Logout';
import Edit from '@mui/icons-material/Edit';
import {signOut} from 'next-auth/react';
import Link from 'next/link';

export function ProfileButton(props: {user: userdto_UserResp}) {
  const button = useRef<HTMLDivElement>(null);
  return (
    <PopupState variant="popover">
      {(popupState) => {
        return (
          <>
            <div ref={button} role={'button'} {...bindTrigger(popupState)}>
              <Avatar sx={{width: 40, height: 40}} user={props.user} />
            </div>
            <Menu
              style={{marginTop: 8}}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              {...bindMenu(popupState)}>
              <Link href={'/dashboard'}>
                <MenuItem onClick={popupState.close}>
                  <ListItemIcon>
                    <Person />
                  </ListItemIcon>
                  <Typography>Trang cá nhân</Typography>
                </MenuItem>
              </Link>
              <Link href={'/compose'}>
                <MenuItem onClick={popupState.close}>
                  <ListItemIcon>
                    <Edit />
                  </ListItemIcon>
                  <Typography>Tạo bài viết mới</Typography>
                </MenuItem>
              </Link>
              <MenuItem
                onClick={() => {
                  popupState.close;
                  return signOut();
                }}>
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                <Typography>Logout</Typography>
              </MenuItem>
            </Menu>
          </>
        );
      }}
    </PopupState>
  );
}
