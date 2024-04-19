import {
  MenuButtonBlockquote,
  MenuButtonBold,
  MenuButtonBulletedList,
  MenuButtonEditLink,
  MenuButtonItalic,
  MenuButtonOrderedList,
  MenuButtonStrikethrough,
  MenuButtonUnderline,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  ResizableImage,
  RichTextEditor
} from 'mui-tiptap';
import React from 'react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import UnderlineExtension from '@tiptap/extension-underline';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';

export function WriteCommentRte({toolbarRightSlot}: {toolbarRightSlot?: React.JSX.Element}) {
  return (
    <SRte
      extensions={[
        StarterKit,
        ResizableImage.configure({}),
        Placeholder.configure({
          placeholder: 'Nhập nội dung bình luận...'
        }),
        UnderlineExtension
      ]}
      autofocus={true}
      renderControls={() => {
        return (
          <Grid container alignItems="center" rowGap={2}>
            <Grid item flex={1}>
              <MenuControlsContainer>
                <MenuSelectHeading />
                <MenuDivider />
                <MenuButtonBold />
                <MenuButtonItalic />
                <MenuButtonStrikethrough />
                <MenuButtonUnderline />
                <MenuButtonEditLink />
                <MenuDivider />
                <MenuButtonBulletedList />
                <MenuButtonOrderedList />
                <MenuButtonBlockquote />
              </MenuControlsContainer>
            </Grid>
            <Grid item>{toolbarRightSlot}</Grid>
          </Grid>
        );
      }}
    />
  );
}

const SRte = styled(RichTextEditor)`
  display: flex;
  flex-direction: column-reverse;

  .MuiTiptap-RichTextField-content {
    border-top: 1px solid ${themeColor('border')};
  }

  .tiptap.ProseMirror {
    min-height: 120px;
    max-height: calc(100vh - 120px);
    overflow-y: scroll;
  }
`;
