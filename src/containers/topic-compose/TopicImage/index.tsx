import {TopicImageWrapper} from '@/containers/topic-compose/TopicImage/TopicImageWrapper';
import {SVGProps, useCallback, useMemo} from 'react';
import {TopicComposeContext} from '@/containers/topic-compose/context';
import {useController} from 'react-hook-form';

export function TopicImage() {
  const form = TopicComposeContext.useSelector((state) => state.form);
  const imageController = useController({
    control: form.control,
    name: 'image'
  });

  const onClick = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      // @ts-ignore
      const file: File | undefined = e.target?.files[0];
      form.setValue('image', file);
    };
    input.click();
  }, []);

  const coverImageSrc = useMemo(() => {
    const value = imageController.field.value;
    return value instanceof File ? URL.createObjectURL(value) : value;
  }, [imageController.field.value]);

  const onClickDelete = useCallback(() => {
    form.setValue('image', undefined);
  }, []);

  return (
    <TopicImageWrapper
      label={'Ảnh chủ đề'}
      buttonProps={{children: 'Tải lên', startIcon: <PhUploadSimpleLight />, onClick: onClick}}
      coverImageSrc={coverImageSrc}
      onClickEdit={onClick}
      onClickDelete={onClickDelete}
    />
  );
}

export function PhUploadSimpleLight(props: SVGProps<any>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}>
      <path fill="currentColor"
            d="M222 152v56a14 14 0 0 1-14 14H48a14 14 0 0 1-14-14v-56a6 6 0 0 1 12 0v56a2 2 0 0 0 2 2h160a2 2 0 0 0 2-2v-56a6 6 0 0 1 12 0M92.24 84.24L122 54.49V152a6 6 0 0 0 12 0V54.49l29.76 29.75a6 6 0 0 0 8.48-8.48l-40-40a6 6 0 0 0-8.48 0l-40 40a6 6 0 0 0 8.48 8.48" />
    </svg>
  );
}
