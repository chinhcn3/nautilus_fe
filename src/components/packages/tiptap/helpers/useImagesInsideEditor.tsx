import {Editor, NodePos} from '@tiptap/core';
import {useEffect, useState} from 'react';

export function useImagesInsideEditor(editor?: Editor | null) {
  const [imageNodes, setImageNodes] = useState<NodePos[]>(() => editor?.$nodes('image') ?? []);

  useEffect(() => {
    const handler = (props: {editor: Editor}) => {
      const images = props.editor.$nodes('image');
      setImageNodes(images ?? []);
    };

    if (editor) handler({editor});

    editor?.on('update', handler);
    return () => {
      editor?.off('update', handler);
    };
  }, [editor]);

  return imageNodes;
}
