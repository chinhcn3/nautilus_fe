'use client';

import {useSupportModal} from '@/common/hooks/useSupportModal';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import Dialog from '@mui/material/Dialog';
import {ClassNames} from '@emotion/react';
import {SupportModalContext} from '@/containers/support-modal/SupportModalContext';
import {Form} from '@/containers/support-modal/Form';

export function SupportModal() {
  const [open, setOpen] = useSupportModal();

  return (
    <ClassNames>
      {({css}) => (
        <Dialog open={open} onClose={() => setOpen(false)} classes={{paper: css({maxWidth: 800})}}>
          <Wrapper>
            <Title variant={'h5'}>Liên hệ với chúng tôi</Title>
            <Subtitle variant={'subtitle2'}>
              Có câu hỏi hoặc phản hồi? Hãy gửi tin nhắn cho chúng tôi và chúng tôi sẽ trả lời trong
              vòng 24 giờ
            </Subtitle>

            <SupportModalContext.Provider>
              <Form />
            </SupportModalContext.Provider>
          </Wrapper>
        </Dialog>
      )}
    </ClassNames>
  );
}

const Wrapper = styled(DialogContent)`
  background: ${themeColor('lightBackground')};
  padding: 40px;
`;

const Title = styled(Typography)`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 8px;
`;

const Subtitle = styled(Typography)`
  color: #aeaeae;
  margin-bottom: 16px;
  font-size: 14px;
`;
