import React from 'react';
import {MenuButton} from 'mui-tiptap';
import PreviewIcon from '@mui/icons-material/Preview';
import {useAskForUrlDialog} from '@/components/packages/tiptap/buttons/LinkPreviewButton/helpers/useAskForUrlDialog';

export function LinkPreviewButton() {
  const {dialog, show} = useAskForUrlDialog();
  return (
    <>
      <MenuButton IconComponent={PreviewIcon} tooltipLabel={'Link Preview'} onClick={show} />
      {dialog}
    </>
  );
}
