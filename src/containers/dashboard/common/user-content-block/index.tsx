import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import {AvatarWithComment, UserAvatarProps} from '@/components/user/avatar';
import {ComponentProps, ReactNode} from 'react';

export type UserContentBlockProps = {
  children: ReactNode;
  userAvatarProps: UserAvatarProps;
} & ComponentProps<typeof Wrapper>;

export function UserContentBlock({children, userAvatarProps, ...props}: UserContentBlockProps) {
  return (
    <Wrapper role={'listitem'} {...props}>
      <QuoteIndicator />
      <AvatarWithComment sx={{width: 42, height: 42}} {...userAvatarProps} />
      <ContentWrapper>{children}</ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 6px 42px 1fr;
  align-items: center;
  gap: 16px;
  padding: 12px 0;
  cursor: pointer;
`;

const QuoteIndicator = styled.div`
  background: ${themeColor('primary')};
  width: 6px;
  height: 100%;
`;

const ContentWrapper = styled.div`
  overflow: hidden;
`;
