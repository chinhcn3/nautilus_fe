'use server';
import {getLinkPreview} from 'link-preview-js';

export async function getPreviewInfo(content: string) {
  return await getLinkPreview(content, {
    followRedirects: 'follow'
  });
}
