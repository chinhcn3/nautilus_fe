import {TopicImageWrapper} from '@/containers/topic-compose/TopicImage/TopicImageWrapper';
import CodeIcon from '@mui/icons-material/Code';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import {BootstrapInput} from '@/components/mui/input/BootstrapInput';
import Grid from '@mui/material/Grid';
import {OutlinedButton} from '@/components/mui/button/OutlinedButton';
import {FilledButton} from '@/components/mui/button/FilledButton';
import useToggle from 'react-use/lib/useToggle';
import {TopicComposeContext} from '@/containers/topic-compose/context';
import {useCallback, useMemo, useRef} from 'react';
import {useController} from 'react-hook-form';
import {getYoutubeVideoImageUrl} from '@/containers/topic-compose/TopicVideo/helpers/getYoutubeVideoImageUrl';
import {checkIsValueYoutubeVideoUrl} from '@/containers/topic-compose/TopicVideo/helpers/checkIsValueYoutubeVideoUrl';
import toast from 'react-hot-toast';

export function TopicVideo() {
  const [open, toggleOpen] = useToggle(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const form = TopicComposeContext.useSelector((state) => state.form);
  const controller = useController({control: form.control, name: 'video'});

  const onSubmit = useCallback(() => {
    const value = inputRef.current?.value;

    if (!checkIsValueYoutubeVideoUrl(value)) {
      toast.error('Bạn cần nhập Youtube URL đúng');
      return;
    }

    form.setValue('video', inputRef.current?.value);
    toggleOpen();
  }, []);

  const videoImageUrl = useMemo(() => {
    if (!controller.field.value) return;
    return getYoutubeVideoImageUrl(controller.field.value);
  }, [controller.field.value]);

  return (
    <>
      <TopicImageWrapper
        label={'Video chủ đề'}
        buttonProps={{
          children: 'Nhúng link video',
          startIcon: <CodeIcon />,
          onClick: toggleOpen
        }}
        coverImageSrc={videoImageUrl}
      />

      <Dialog open={open} onClose={toggleOpen}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <BootstrapInput
                label={'Link video'}
                placeholder={'Nhập đường link'}
                inputProps={{
                  autoFocus: true,
                  inputRef,
                  defaultValue: controller.field.value,
                  sx: {height: 56}
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <OutlinedButton sx={{width: '100%', height: 48}} onClick={toggleOpen}>
                Hủy
              </OutlinedButton>
            </Grid>
            <Grid item xs={6}>
              <FilledButton
                sx={{width: '100%', height: 48}}
                startIcon={<CodeIcon />}
                onClick={onSubmit}>
                Nhúng
              </FilledButton>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}
