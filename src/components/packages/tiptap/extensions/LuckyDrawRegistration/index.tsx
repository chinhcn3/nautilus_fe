import {Editor, Node} from '@tiptap/core';
import {ReactNodeViewRenderer} from '@tiptap/react';
import {LuckyDrawRegistrationComponent} from '@/components/packages/tiptap/extensions/LuckyDrawRegistration/LuckyDrawRegistrationComponent';
import {useEffect} from 'react';
import {IMAGES_INSIDE_TOPIC_NAME} from '@/components/packages/tiptap/extensions/images-inside-topic';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    luckyDrawRegistration: {
      addLuckyDrawRegistrationBlock(): ReturnType;
    };
  }
}

export const LUCKY_DRAW_REGISTRATION_NAME = 'lucky-draw-registration';

const _LuckyDrawRegistration = Node.create({
  name: LUCKY_DRAW_REGISTRATION_NAME,
  inline: false,
  draggable: true,
  group: 'block',
  renderHTML() {
    return [LUCKY_DRAW_REGISTRATION_NAME];
  },
  parseHTML() {
    return [
      {
        tag: LUCKY_DRAW_REGISTRATION_NAME
      }
    ];
  },
  addCommands() {
    return {
      addLuckyDrawRegistrationBlock() {
        return function ({commands}) {
          return commands.insertContent({
            type: LUCKY_DRAW_REGISTRATION_NAME,
            attrs: {}
          });
        };
      }
    };
  },
  addNodeView() {
    return ReactNodeViewRenderer(LuckyDrawRegistrationComponent);
  }
});

export const LuckyDrawRegistration = Object.assign(_LuckyDrawRegistration, {
  useAutoAddToEditor({editor, isContentReady}: {editor?: Editor | null; isContentReady: boolean}) {
    useEffect(() => {
      if (!editor || !isContentReady) return;

      const imagesInsideTopic = editor.$node(IMAGES_INSIDE_TOPIC_NAME);

      const pos = imagesInsideTopic?.pos;

      setTimeout(() => {
        pos
          ? editor.commands.insertContentAt(pos, {
              type: LUCKY_DRAW_REGISTRATION_NAME
            })
          : editor.commands.insertContent({
              type: LUCKY_DRAW_REGISTRATION_NAME
            });
      });
    }, [editor, isContentReady]);
  }
});
