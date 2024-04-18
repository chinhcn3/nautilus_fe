import {useRichTextEditorContext} from 'mui-tiptap';
import type {Editor} from '@tiptap/react';

export function useOnClick() {
  const editor = useRichTextEditorContext();
  return onClickHandler(editor);
}

const onClickHandler = (editor: Editor | null) => {
  return () => {
    editor?.commands.addListOfImagesInsideTopic();
  };
};
