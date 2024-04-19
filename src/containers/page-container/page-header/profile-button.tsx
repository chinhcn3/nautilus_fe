import PopupState, {bindMenu, bindTrigger} from 'material-ui-popup-state';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Avatar} from '@/components/user/avatar';
import ListItemText from '@mui/material/ListItemText';
import {userdto_UserResp} from '@/common/openapi';
import ListItemIcon from '@mui/material/ListItemIcon';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CheckIcon from '@mui/icons-material/Check';
import {useRef} from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import {signOut} from 'next-auth/react';
import Link from 'next/link';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';

export function ProfileButton(props: {user?: userdto_UserResp}) {
  const button = useRef<HTMLDivElement>(null);

  const ThemeSetting = () => {
    return (
      <PopupState variant="popover">
        {(popupState) => {
          return (
            <>
              <MenuItem {...bindTrigger(popupState)}>
                <ListItemText>Giao diện: Sáng</ListItemText>

                <Typography>
                  <ArrowForwardIosIcon sx={{fontSize: 16}} />
                </Typography>
              </MenuItem>
              <Menu
                style={{marginTop: 8}}
                PaperProps={{sx: {width: 320}}}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>
                  <ListItemIcon>
                    <ArrowBackIosIcon sx={{fontSize: 16, color: '#000'}} />
                  </ListItemIcon>
                  <div>
                    Giao diện <br />
                    <span style={{fontSize: 14, color: '#AEAEAE'}}>Tùy chọn giao diện phù hợp</span>
                  </div>
                </MenuItem>
                <Divider />
                <MenuItem sx={{color: '#4B40D4'}} selected onClick={popupState.close}>
                  <ListItemText>Sáng</ListItemText>
                  <Typography>
                    <CheckIcon sx={{fontSize: 16, color: '#4B40D4'}} />
                  </Typography>
                </MenuItem>
                <MenuItem onClick={popupState.close}>
                  <ListItemText>Tối</ListItemText>
                </MenuItem>
                <MenuItem onClick={popupState.close}>
                  <ListItemText>
                    Tự động
                    <Subtitle>
                      Tự động thay đổi giao diện theo <br /> cài đặt hệ thống trên thiết bị của bạn
                    </Subtitle>
                  </ListItemText>
                </MenuItem>
              </Menu>
            </>
          );
        }}
      </PopupState>
    );
  };

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
              PaperProps={{sx: {width: 320}}}
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
                  <Typography>Thông tin cá nhân</Typography>
                </MenuItem>
              </Link>
              <Divider />
              <Link href={'/dashboard/topics'}>
                <MenuItem onClick={popupState.close}>
                  <Typography>Bài viết của tôi</Typography>
                </MenuItem>
              </Link>
              <Link href={'/dashboard/saved-topics'}>
                <MenuItem onClick={popupState.close}>
                  <Typography>Bài viết theo dõi</Typography>
                </MenuItem>
              </Link>
              <Divider />
              <Link href={'/dashboard/settings'}>
                <MenuItem onClick={popupState.close}>
                  <Typography>Cài đặt thông báo</Typography>
                </MenuItem>
              </Link>
              <ThemeSetting />
              <Divider />
              <MenuItem
                onClick={() => {
                  popupState.close;
                  return signOut();
                }}>
                <Typography>Đăng xuất</Typography>
              </MenuItem>
            </Menu>
          </>
        );
      }}
    </PopupState>
  );
}

export const Subtitle = styled.div`
  color: ${themeColor('subtitle')};
  font-size: 14px;
  white-space: break-space;
  margin-top: 8px;
`;
