import {generateObjectKey, uploadFile} from '@/common/helpers/uploads';
import invariant from 'tiny-invariant';

export async function prepareImageUrlBeforeSave(image?: File | string) {
  if (!image || typeof image === 'string') return image;
  const generatedUrl = await uploadFile(image, {
    objectKey: (file) => generateObjectKey(file.name)
  });
  invariant(generatedUrl, 'Cannot get uploaded image object key');
  return generatedUrl;
}
