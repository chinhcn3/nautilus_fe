import styled from '@emotion/styled';
import {useProfileContext} from '@/containers/dashboard/layout-container/profile-context';
import background from './assets/background.png';
import {Avatar} from './avatar';
import {Specs} from './specs';

export function Banner() {
  const {user} = useProfileContext();

  return (
    <BannerWrapper>
      <Avatar />

      <div>
        <Name>{user.nick_name}</Name>
        <Specs />
      </div>
    </BannerWrapper>
  );
}

const BannerWrapper = styled.div`
  width: 100%;
  position: relative;
  background-image: url(${background.src});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  padding: 28px 32px;

  display: flex;
  align-items: center;
  column-gap: 24px;
`;

const Name = styled.h1`
  font-size: 24px;
`;
