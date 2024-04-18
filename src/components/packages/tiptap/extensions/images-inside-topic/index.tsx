import {Node} from '@tiptap/core';
import {ReactNodeViewRenderer} from '@tiptap/react';
import {ImagesInsideTopicComponent} from '@/components/packages/tiptap/extensions/images-inside-topic/ImagesInsideTopicComponent';

export type ImagesInsideTopicOptions = Record<never, never>;

export const IMAGES_INSIDE_TOPIC_NAME = 'images-inside-topic';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    imagesInsideTopic: {
      addListOfImagesInsideTopic(): ReturnType;
    };
  }
}

export const ImagesInsideTopicExtension = Node.create<ImagesInsideTopicOptions>({
  name: IMAGES_INSIDE_TOPIC_NAME,
  draggable: true,
  inline: false,
  group: 'block',
  parseHTML() {
    return [{tag: IMAGES_INSIDE_TOPIC_NAME}];
  },
  addCommands() {
    return {
      addListOfImagesInsideTopic: () => {
        return ({commands}) => {
          return commands.insertContent({
            type: IMAGES_INSIDE_TOPIC_NAME,
            attrs: {}
          });
        };
      }
    };
  },
  addAttributes() {
    return {};
  },
  renderHTML() {
    return [IMAGES_INSIDE_TOPIC_NAME];
  },
  addNodeView() {
    return ReactNodeViewRenderer(ImagesInsideTopicComponent);
  }
});
