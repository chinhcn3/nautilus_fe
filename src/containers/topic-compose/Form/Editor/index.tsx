'use client';

import StarterKit from '@tiptap/starter-kit';
import {
  MenuButtonBlockquote,
  MenuButtonBold,
  MenuButtonBulletedList,
  MenuButtonEditLink,
  MenuButtonImageUpload,
  MenuButtonItalic,
  MenuButtonOrderedList,
  MenuButtonStrikethrough,
  MenuButtonUnderline,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  ResizableImage,
  RichTextEditor,
  RichTextEditorRef
} from 'mui-tiptap';
import styled from '@emotion/styled';
import Placeholder from '@tiptap/extension-placeholder';
import {RefObject} from 'react';
import {MenuButtonYoutube} from '@/components/packages/tiptap';
import UnderlineExtension from '@tiptap/extension-underline';
import YoutubeExtension from '@tiptap/extension-youtube';
import {generateObjectKey, uploadFiles} from '@/common/helpers/uploads';

export const Editor = (props: {rteRef: RefObject<RichTextEditorRef>}) => {
  return (
    <SRichTextEditor
      ref={props.rteRef}
      extensions={[
        StarterKit,
        ResizableImage,
        Placeholder.configure({
          placeholder: 'Nhập nội dung bài viết...'
        }),
        UnderlineExtension,
        YoutubeExtension
      ]}
      content="" // Initial content for the editor
      renderControls={() => (
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
          <MenuButtonImageUpload
            onUploadFiles={async (files) => {
              const urls = await uploadFiles(files, {
                objectKey: (file) => generateObjectKey(file.name)
              });

              return urls.map((url) => ({
                src: url
              }));
            }}
          />
          <MenuButtonYoutube />
        </MenuControlsContainer>
      )}
    />
  );
};

const SRichTextEditor = styled(RichTextEditor)`
  background: #ffffff;

  .tiptap.ProseMirror {
    min-height: 220px;
    max-height: calc(100vh - 120px);
    overflow-y: scroll;
  }
`;
