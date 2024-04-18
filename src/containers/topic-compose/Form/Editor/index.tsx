'use client';

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
  RichTextEditor,
  RichTextEditorRef
} from 'mui-tiptap';
import styled from '@emotion/styled';
import {RefObject} from 'react';
import {MenuButtonYoutube} from '@/components/packages/tiptap';
import {generateObjectKey, uploadFiles} from '@/common/helpers/uploads';
import {LinkPreviewButton} from 'src/components/packages/tiptap/buttons/LinkPreviewButton';
import {TIPTAP_TOPIC_EXTENSIONS} from '@/components/packages/tiptap/constants';
import {MenuButtonAddImagesInTopic} from 'src/components/packages/tiptap/buttons/AddImagesInsideTopicButton';

/**
 * content is initial content only, it won't update if you update it
 */
export const Editor = (props: {rteRef: RefObject<RichTextEditorRef>; initialContent?: string}) => {
  return (
    <SRichTextEditor
      ref={props.rteRef}
      extensions={TIPTAP_TOPIC_EXTENSIONS}
      content={props.initialContent} // Initial content for the editor
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
          <LinkPreviewButton />
          <MenuButtonAddImagesInTopic />
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
