import {useCurrentTopicExtra} from '@/components/packages/tiptap/extensions/LuckyDrawRegistration/LuckyDrawRegistrationComponent/useCurrentTopicExtra';
import {NodeViewWrapper} from '@tiptap/react';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import Stack from '@mui/material/Stack';
import {FilledButton} from '@/components/mui/button/FilledButton';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import {alpha} from '@mui/material';

export function LuckyDrawRegistrationComponent() {
  const {value} = useCurrentTopicExtra();

  if (!value) return null;

  return (
    <NodeViewWrapper>
      <Wrapper alignItems={'center'}>
        <TheButton>THAM GIA TRÚNG THƯỞNG</TheButton>

        <SCondition href={'/'}>
          <Typography>Thể lệ & Điều kiện</Typography>
        </SCondition>

        <RegisteredUsersText>
          Bạn và <span className="primary">123 thành viên</span> đã tham gia chương trình này.
        </RegisteredUsersText>
      </Wrapper>
    </NodeViewWrapper>
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

const SCondition = styled(Link)`
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
