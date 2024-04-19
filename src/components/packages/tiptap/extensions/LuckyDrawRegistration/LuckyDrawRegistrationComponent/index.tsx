import {NodeViewWrapper} from '@tiptap/react';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import Stack from '@mui/material/Stack';
import {FilledButton} from '@/components/mui/button/FilledButton';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import {alpha} from '@mui/material';
import {topicdto_TopicExtraResp} from '../../../../../../common/openapi';
import {TopicExtraContext} from '@/components/topic/TopicExtraProvider';

export function LuckyDrawRegistrationComponent() {
  const value = TopicExtraContext.useSelector((state) => state.fetchTopicExtraState.value);

  if (!value) return null;

  return (
    <NodeViewWrapper>
      <Wrapper alignItems={'center'}>
        <TheButton>THAM GIA TRÚNG THƯỞNG</TheButton>

        <Link href={'/'}>
          <SCondition>Thể lệ & Điều kiện</SCondition>
        </Link>

        <DescriptionText topicExtra={value} />
      </Wrapper>
    </NodeViewWrapper>
  );
}

function DescriptionText({topicExtra}: {topicExtra: topicdto_TopicExtraResp}) {
  const regCount = topicExtra.topic_stats?.lucky_draw_reg_count;

  const isNoOneRegistered = !regCount;

  if (isNoOneRegistered)
    return <RegisteredUsersText>Đăng ký để có cơ hội may mắn</RegisteredUsersText>;

  const currentUserRegistered = !!topicExtra.current_user?.registered_lucky_draw;
  const hasUsersRegisteredNotMe = !isNoOneRegistered && currentUserRegistered;

  if (hasUsersRegisteredNotMe) {
    return (
      <RegisteredUsersText>
        <span className={'primary'}>{regCount} thành viên</span>{' '}
        <span>đã tham gia chương trình này</span>
      </RegisteredUsersText>
    );
  }

  const onlyCurrentUserRegistered = currentUserRegistered && regCount === 1;

  if (onlyCurrentUserRegistered)
    return <RegisteredUsersText>Bạn đã tham gia chương trình này</RegisteredUsersText>;

  return (
    <RegisteredUsersText>
      Bạn và <span className="primary">{regCount} thành viên</span> đã tham gia chương trình này.
    </RegisteredUsersText>
  );
}

const Wrapper = styled(Stack)`
  border: 1.5px dashed ${themeColor('primary')};
  padding: 40px;
  margin: 16px 0 32px;
  background-color: ${(p) => alpha(themeColor('primary')(p), 0.05)};
`;

const TheButton = styled(FilledButton)`
  width: auto;
  padding: 18px 40px;
  font-size: 24px;
  font-weight: 700;
  height: auto;
`;

const SCondition = styled(Typography)`
  color: ${themeColor('primary')};
  text-decoration: underline;
  margin-top: 16px;
  margin-bottom: 24px;

  font-size: 16px;
  font-weight: 500;
`;

const RegisteredUsersText = styled(Typography)`
  font-size: 16px;
  font-weight: 500;

  > .primary {
    color: ${themeColor('primary')};
    font-weight: 600;
  }
`;
