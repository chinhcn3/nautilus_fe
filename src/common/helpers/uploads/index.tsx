import dayjs from 'dayjs';
import {UploadsService} from '@/common/openapi';
import {httpClient} from '@/common/helpers/axios/http-client';
import invariant from 'tiny-invariant';
import axios from 'axios';

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

export function generateObjectKey(
  fileName: string,
  options?: {
    slugify?: boolean;
  }
) {
  const {slugify: shouldSlugify = true} = options || {};
  const dateFormat = dayjs().format('YYYYMMDD HH:mm:ss');
  const computedFileName = shouldSlugify ? slugify(fileName) : fileName;
  return `[${dateFormat}] ${computedFileName}`;
}

export async function uploadFile(
  file: File,
  options?: {
    objectKey?: (file: File) => string;
  }
) {
  const objectKey = options?.objectKey?.(file) || file.name;

  const uploadService = new UploadsService(httpClient);
  const presignPutObjectResp = await uploadService.presignUploadPut({
    object_key: objectKey
  });

  invariant(presignPutObjectResp.data?.url, 'Không có Presign URL');

  await axios.put(presignPutObjectResp.data.url, file, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

  return presignPutObjectResp.data.access_url;
}

export async function uploadFiles(
  files: File[],
  options?: {
    objectKey?: (file: File) => string;
  }
) {
  const uploadService = new UploadsService(httpClient);
  const presignUrlsResp = await uploadService.presignMultiUploadPut({
    object_keys: files.map((file) => options?.objectKey?.(file) || file.name)
  });

  invariant(presignUrlsResp.data);

  await Promise.all(
    presignUrlsResp.data.map((resp, index) => {
      const url = resp.url;
      invariant(url);

      return axios.put(url, files[index], {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    })
  );

  return presignUrlsResp.data.map((resp) => resp.access_url!);
}
