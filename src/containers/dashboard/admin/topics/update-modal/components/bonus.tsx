import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {UpdateModalContext} from '@/containers/dashboard/admin/topics/update-modal/provider';

export function Bonus() {
  const form = UpdateModalContext.useForm();
  return (
    <Box gridTemplateColumns={'200px 200px'} columnGap={2} display="grid">
      <TextField
        type={'number'}
        color={'secondary'}
        label={'Điểm thưởng'}
        {...form.register('bonus_points')}
      />
      <TextField
        type={'number'}
        color={'secondary'}
        label={'Điểm uy tín'}
        {...form.register('bonus_kudos')}
      />
    </Box>
  );
}
