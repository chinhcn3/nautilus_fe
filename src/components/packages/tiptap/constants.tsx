import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import UnderlineExtension from '@tiptap/extension-underline';
import YoutubeExtension from '@tiptap/extension-youtube';
import {LinkPreviewExtension} from '@/components/packages/tiptap/extensions/link-preview';
import {ImagesInsideTopicExtension} from '@/components/packages/tiptap/extensions/images-inside-topic';
import {ResizableImage} from 'mui-tiptap';
import {LuckyDrawRegistration} from '@/components/packages/tiptap/extensions/LuckyDrawRegistration';

export const TIPTAP_TOPIC_EXTENSIONS = [
  StarterKit,
  ResizableImage.configure({}),
  Placeholder.configure({
    placeholder: 'Nhập nội dung bài viết...'
  }),
  UnderlineExtension,
  YoutubeExtension,
  LinkPreviewExtension,
  ImagesInsideTopicExtension,
  LuckyDrawRegistration
];
