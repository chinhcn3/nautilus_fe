import Stack from '@mui/system/Stack';
import {FilledButton} from '@/components/mui/button/FilledButton';
import {OutlinedButton} from '@/components/mui/button/OutlinedButton';
import {TopicComposeContext} from '@/containers/topic-compose/context';

// TODO handle these buttons
// TODO validation - these buttons must be disabled if not validated correctly

export function Buttons() {
  const [preview, createDraftTopic, createTopic] = TopicComposeContext.useSelector((state) => [
    state.preview,
    state.createDraftTopic,
    state.createTopic
  ]);
  return (
    <Stack direction={'row'} spacing={2} justifyContent={'flex-end'}>
      <OutlinedButton sx={{minWidth: 148}} onClick={preview}>
        Xem trước
      </OutlinedButton>
      <OutlinedButton sx={{minWidth: 148}} onClick={createDraftTopic}>
        Lưu nháp
      </OutlinedButton>
      <FilledButton sx={{minWidth: 148}} onClick={createTopic}>
        Đăng bài
      </FilledButton>
    </Stack>
  );
}
