import {
  EditCommentIcon,
  PaperPlaneRightIcon,
  WarningOctagonIcon
} from '@/containers/page-container/page-header/icons';
import {FilledButton} from '@/components/mui/button/FilledButton';
import {useSession} from 'next-auth/react';
import {UserAvatar} from '@/components/user/avatar';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import Link from 'next/link';
import {IconButton, InputBase, Paper, Stack} from '@mui/material';
import {useState} from 'react';
import dynamic from 'next/dynamic';
import {alpha} from '@mui/system';

const Editor = dynamic(() => import('./WriteCommentRte').then((m) => m.WriteCommentRte), {
  ssr: false
});

export function WriteCommentSection() {
  const {data} = useSession();
  const [isRteEnabled, setIsRteEnabled] = useState(false);
  const [content, setContent] = useState('');

  // TODO asking @tiendc about this case https://techrv.slack.com/archives/C063JKBMMRT/p1713429695560069
  if (!data?.user) return null;

  const EditSubmit = (
    <Stack direction="row" alignItems="center" spacing={2}>
      <SEditButton
        size={'small'}
        type="button"
        aria-label="edit"
        onClick={() => setIsRteEnabled((enabled) => !enabled)}
        $active={isRteEnabled}
        sx={{borderRadius: 1}}>
        <EditCommentIcon />
      </SEditButton>
      <SFilledButton endIcon={<PaperPlaneRightIcon />}>Bình luận</SFilledButton>
    </Stack>
  );

  return (
    <Stack spacing={1}>
      <Stack justifyContent="space-between" direction="row">
        <Stack alignItems="center" direction="row" spacing={1}>
          <UserAvatar user={data.user} />
          <Name>{data.user.nick_name}</Name>
        </Stack>
        <Regulations href="">
          <WarningOctagonIcon />
          Quy định
        </Regulations>
      </Stack>
      {isRteEnabled ? (
        <Editor toolbarRightSlot={EditSubmit} />
      ) : (
        <CommentWrapper elevation={0}>
          <TheInput
            placeholder="Bạn nghĩa gì về chủ đề này ?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {EditSubmit}
        </CommentWrapper>
      )}
    </Stack>
  );
}

const SEditButton = styled(IconButton)<{$active: boolean}>`
  background-color: ${(p) => (p.$active ? alpha(themeColor('primary')(p), 0.1) : 'transparent')};
  width: 40px;
  height: 40px;
`;

const CommentWrapper = styled(Paper)`
  height: 72px;
  display: flex;
  padding: 16px;
  border: 1px solid ${themeColor('border')};
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
`;

const TheInput = styled(InputBase)`
  flex: 1 0 calc(100% - 200px);
  max-width: calc(100% - 200px);

  line-height: 38px;
  height: 100%;
  padding: 0;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;

  ::placeholder {
    color: ${themeColor('subtitle')};
  }
`;

const Name = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${themeColor('black')};
`;

const Regulations = styled(Link)`
  display: flex;
  gap: 8px;
  padding: 8px;
  font-size: 16px;
  font-weight: 500;
  color: ${themeColor('white')};
  background-color: #ffa800;
  line-height: 1;
  align-items: center;
  border-radius: 4px;
`;

const SFilledButton = styled(FilledButton)`
  white-space: nowrap;
  padding: 0 16px;
  height: 40px;
`;
