import Grid from '@mui/material/Grid';
import {BootstrapInput} from '@/components/mui/input/BootstrapInput';
import {TopicImage} from '@/containers/topic-compose/TopicImage';
import {TopicVideo} from '@/containers/topic-compose/TopicVideo';
import {Buttons} from 'src/containers/topic-compose/Form/Buttons';
import {TopicComposeContext} from '@/containers/topic-compose/context';
import Stack from '@mui/system/Stack';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import {Title} from '@/containers/topic-compose/Form/Title';
import {LongTitle} from '@/containers/topic-compose/Form/LongTitle';
import {useEffect} from 'react';
import {useErrorMessageFromForm} from '@/common/helpers/react-hook-form';
import Typography from '@mui/material/Typography';

const LazyEditor = dynamic(
  () => import('@/containers/topic-compose/Form/Editor').then((m) => m.Editor),
  {
    ssr: false
  }
);

export function Form() {
  return (
    <PageContent container spacing={2}>
      <Grid item xs={12}>
        <Title />
      </Grid>
      <Grid item xs={12}>
        <LongTitle />
      </Grid>
      <Grid item xs={6}>
        <TopicImage />
      </Grid>
      <Grid item xs={6}>
        <TopicVideo />
      </Grid>
      <Grid item xs={12}>
        <Editor />
      </Grid>

      <Grid item xs={12}>
        <Buttons />
      </Grid>
    </PageContent>
  );
}

const PageContent = styled(Grid)`
  width: 1200px;
  margin: 0 auto;
`;

function Editor() {
  const initialContent = TopicComposeContext.useSelector((state) => state.originalTopic?.content);
  const form = TopicComposeContext.useSelector((state) => state.form);
  const ref = TopicComposeContext.useSelector((state) => state.rteRef);
  const errorMessage = useErrorMessageFromForm(form, 'content');

  useEffect(() => {
    const interval = setInterval(() => {
      const html = ref.current?.editor?.getHTML();
      if (html !== form.getValues().content) {
        form.setValue('content', html ?? '', {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true
        });
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Stack direction={'column'} spacing={1}>
      <BootstrapInput.Label>Nội dung chính</BootstrapInput.Label>
      <LazyEditor rteRef={ref} initialContent={initialContent} />
      {errorMessage && (
        <Typography color={'error'} fontSize={14} mt={'4px'}>
          {errorMessage}
        </Typography>
      )}
    </Stack>
  );
}
