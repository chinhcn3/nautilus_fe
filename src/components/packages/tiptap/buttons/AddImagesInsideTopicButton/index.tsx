import React from 'react';
import {MenuButton} from 'mui-tiptap';
import ImageSearch from '@mui/icons-material/ImageSearch';
import {useOnClick} from '@/components/packages/tiptap/buttons/AddImagesInsideTopicButton/helpers/useOnClick';

export function MenuButtonAddImagesInTopic() {
  const onClick = useOnClick();

  return (
    <>
      <MenuButton
        IconComponent={ImageSearch}
        tooltipLabel={'Thêm "Ảnh trong bài"'}
        onClick={onClick}
      />
    </>
  );
}
