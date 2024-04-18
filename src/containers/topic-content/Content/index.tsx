import {TopicDetailContext} from '@/containers/topic-content/TopicDetailContext';
import {EditorContent, useEditor} from '@tiptap/react';
import {TIPTAP_TOPIC_EXTENSIONS} from '@/components/packages/tiptap/constants';
import styled from '@emotion/styled';
import {useEffect, useState} from 'react';
import {TOPIC_CONTENT_ID} from '@/containers/topic-content/constants';
import {LightboxContext} from '@/containers/topic-content/Content/LightboxContext';
import {Lightbox} from '@/containers/topic-content/Content/Lightbox';
import {LuckyDrawRegistration} from '@/components/packages/tiptap/extensions/LuckyDrawRegistration';

export function Content() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <ContentWrapper>{isClient ? <ContentClientside /> : <ContentServerside />}</ContentWrapper>
  );
}

function ContentServerside() {
  const content = TopicDetailContext.useSelector((state) => state.topic?.content);
  return <div dangerouslySetInnerHTML={{__html: content ?? ''}} />;
}

function ContentClientside() {
  const content = TopicDetailContext.useSelector((state) => state.topic?.content);
  const editor = useEditor({
    extensions: TIPTAP_TOPIC_EXTENSIONS,
    content,
    editable: false,
    enableInputRules: false,
    enablePasteRules: false
  });

  LuckyDrawRegistration.useAutoAddToEditor({editor, isContentReady: !!content});

  return (
    <LightboxContext.Provider editor={editor}>
      <EditorContent editor={editor} id={TOPIC_CONTENT_ID} />
      <Lightbox />
    </LightboxContext.Provider>
  );
}

const ContentWrapper = styled.article`
  img {
    max-width: 100%;
  }
`;
