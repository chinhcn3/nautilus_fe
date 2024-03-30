import styled from '@emotion/styled';
import {UserAvatar} from '@/components/user/avatar';
import {themeColor} from '@/common/configs/theme';
import {BoldText} from '@/components/mui/typography';
import {SeparatedContent} from '@/containers/dashboard/common/separated-content';
import NotificationsOff from '@mui/icons-material/NotificationsOff';
import {SmallButton} from '@/components/mui/button';
import {userdto_OtherUserResp} from '@/common/openapi';
import {differenceInYears} from 'date-fns/differenceInYears';
import {differenceInMonths} from 'date-fns/differenceInMonths';
import {differenceInDays} from 'date-fns/differenceInDays';
import {FollowingUsersContext} from '@/containers/dashboard/following-users/context';

export function UserItem({user}: {user: userdto_OtherUserResp}) {
  const unfollow = FollowingUsersContext.useSelector((state) => state.unfollow);
  const age = useAge({member_at: user.member_at!});
  return (
    <Wrapper>
      <AvatarWrapper>
        <UserAvatar user={user} />
      </AvatarWrapper>
      <Content>
        <h5>{user.nick_name}</h5>
        <p>
          <BoldText>Tuổi Techloop:</BoldText> <span>{age}</span>
        </p>
        <SSeparatedContent>
          <span>{user.stats?.topics} bài viết</span>
          <span>{user.stats?.comments} bình luận</span>
        </SSeparatedContent>
      </Content>

      <Actions>
        <SmallButton startIcon={<NotificationsOff />} onClick={() => unfollow(user.id!)}>
          Bỏ theo dõi
        </SmallButton>
      </Actions>
    </Wrapper>
  );
}

function useAge({member_at}: {member_at: string}) {
  const now = new Date();
  const years = differenceInYears(now, member_at);
  if (years) return years + ' tuổi';

  const months = differenceInMonths(now, member_at);
  if (months) return months + ' tháng';

  const days = differenceInDays(now, member_at);
  return days + ' ngày';
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  gap: 20px;
`;

const AvatarWrapper = styled.div`
  padding: 6px;
  background-color: ${themeColor('primary_400')};
  border-radius: 50%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SSeparatedContent = styled(SeparatedContent)`
  color: ${themeColor('black')};
`;
const Actions = styled.div`
  margin-left: auto;
`;
