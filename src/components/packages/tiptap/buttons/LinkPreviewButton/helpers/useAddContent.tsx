import {useRichTextEditorContext} from 'mui-tiptap';
import {getPreviewInfo} from '@/components/packages/tiptap/buttons/LinkPreviewButton/helpers/getPreviewInfo';

export function useAddContent() {
  const editor = useRichTextEditorContext();
  return async (content: string) => {
    const info = await getPreviewInfo(content);
    editor?.commands.addLinkPreview(info);
  };
}
