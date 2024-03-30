import {AvatarProps as MuiAvatarProps, default as MuiAvatar} from '@mui/material/Avatar';
import commentImage from './assets/comment.png';
import styled from '@emotion/styled';
import Image from 'next/image';

export interface UserAvatarProps extends MuiAvatarProps {
  user: {
    avatar?: string;
    nick_name?: string;
  };
}

export function UserAvatar(props: UserAvatarProps) {
  const {user, ...muiAvatarProps} = props;

  let passedProps = {...muiAvatarProps};
  if (user.avatar)
    passedProps = Object.assign(passedProps, {
      src: user.avatar as string
    });

  return (
    <MuiAvatar {...passedProps}>
      {user.nick_name?.trim().at(0)}
      {props.children}
    </MuiAvatar>
  );
}

export interface NormalAvatarProps extends MuiAvatarProps {
  src: string;
}

export function NormalAvatar(props: NormalAvatarProps) {
  const {src, ...muiAvatarProps} = props;
  return <MuiAvatar src={src} {...muiAvatarProps} />;
}

export type NativeAvatarProps = UserAvatarProps | NormalAvatarProps;

export type AvatarProps = MuiAvatarProps & NativeAvatarProps;
export function Avatar(props: AvatarProps) {
  if ('user' in props) {
    return <UserAvatar {...props} />;
  }

  return <NormalAvatar {...props} />;
}

export function AvatarWithComment(props: AvatarProps) {
  return (
    <AvatarWithPropsWrapper>
      <Avatar {...props} />
      <Image {...commentImage} alt={'User comment icon'} />
    </AvatarWithPropsWrapper>
  );
}

const AvatarWithPropsWrapper = styled.div`
  position: relative;

  > img {
    position: absolute;
    inset: auto 0 0 auto;
    width: 16px;
    height: 16px;
  }
`;
