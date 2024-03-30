import {TopicImageWrapper} from '@/containers/topic-compose/TopicImage/TopicImageWrapper';
import UploadFileOutlined from '@mui/icons-material/CloudUpload';
import {useCallback, useMemo} from 'react';
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
    if (!imageController.field.value) return;
    return URL.createObjectURL(imageController.field.value);
  }, [imageController.field.value]);

  const onClickDelete = useCallback(() => {
    form.setValue('image', undefined);
  }, []);

  return (
    <TopicImageWrapper
      label={'Ảnh chủ đề'}
      buttonProps={{children: 'Tải lên', startIcon: <UploadFileOutlined />, onClick: onClick}}
      coverImageSrc={coverImageSrc}
      onClickEdit={onClick}
      onClickDelete={onClickDelete}
    />
  );
}
