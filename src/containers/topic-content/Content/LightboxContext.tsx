import {createHookContext} from '@/common/helpers/context';
import {Editor} from '@tiptap/core';
import {useCallback, useEffect, useMemo} from 'react';
import {useSetState} from 'react-use';
import {useImagesInsideEditor} from '@/components/packages/tiptap/helpers/useImagesInsideEditor';

function useLightboxContextValues({editor}: {editor?: Editor | null}) {
  const imageNodePoses = useImagesInsideEditor(editor);

  const [state, setState] = useSetState({
    isOpen: false,
    slide: 1
  });

  const openLightboxByIndex = useCallback((index: number) => {
    setState({isOpen: true, slide: index});
  }, []);

  const onLightboxClose = useCallback(() => setState({isOpen: false}), []);

  const sources = useMemo(() => {
    return imageNodePoses.map((imageNodePos) => imageNodePos.node.attrs['src'] as string) ?? [];
  }, [imageNodePoses]);

  useEffect(() => {
    editor?.setOptions({
      editorProps: {
        handleClick: (_editorView, pos) => {
          const element = _editorView.nodeDOM(pos);
          if (!(element && 'pmViewDesc' in element)) return;

          const viewDesc = element.pmViewDesc;

          const node = viewDesc?.node;

          if (node?.type.name !== 'image') return;

          const src = node.attrs['src'] as string | undefined;

          if (!src) return;

          openLightboxByIndex(sources.indexOf(src));
        }
      }
    });
  }, [editor, sources]);

  return {
    ...state,
    openLightboxByIndex,
    sources,
    onLightboxClose
  };
}

export const LightboxContext = createHookContext(useLightboxContextValues);
