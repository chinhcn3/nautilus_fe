import {MenuButton, useRichTextEditorContext} from 'mui-tiptap';
import YouTube from '@mui/icons-material/YouTube';

export function MenuButtonYoutube() {
  const editor = useRichTextEditorContext();
  return (
    <MenuButton
      tooltipLabel={'Youtube'}
      IconComponent={YouTube}
      disabled={!editor?.isEditable}
      onClick={() => {
        const url = prompt('Enter Youtube URL');
        if (!url) return;
        editor?.commands.setYoutubeVideo({
          src: url
        });
      }}
    />
  );
}
