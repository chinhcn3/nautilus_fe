import {useDialogWithOk} from '@/components/packages/mui/use-dialog';
import {BootstrapInput} from '@/components/mui/input/BootstrapInput';
import {useRef} from 'react';
import {useAddContent} from '@/components/packages/tiptap/buttons/LinkPreviewButton/helpers/useAddContent';

export function useAskForUrlDialog() {
  const urlRef = useRef<string>('');
  const addContent = useAddContent();
  const {dialog, hide, show} = useDialogWithOk({
    title: 'Nhập URL bạn muốn thêm preview',
    content: (
      <BootstrapInput placeholder="URL" onChange={(e) => (urlRef.current = e.target.value)} />
    ),
    okButtonProps: {
      onClick: () => {
        addContent(urlRef.current);
        hide();
      }
    }
  });

  return {dialog, hide, show};
}
