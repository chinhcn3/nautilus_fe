import Grid from '@mui/material/Grid';
import {DateTimePicker} from '@mui/x-date-pickers';
import Typography from '@mui/material/Typography';
import {UpdateModalContext} from '@/containers/dashboard/admin/topics/update-modal/provider';

export function Time() {
  const form = UpdateModalContext.useForm();

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <DateTimePicker
          label={<Typography color={'secondary'}>Thời gian bắt đầu</Typography>}
          {...form.register('lucky_draw.reg_started_at')}
          onChange={(value) => form.setValue('lucky_draw.reg_started_at', value?.toString())}
          slotProps={{
            field: {clearable: true}
          }}
          sx={{width: '100%'}}
        />
      </Grid>
      <Grid item xs={6}>
        <DateTimePicker
          label={<Typography color={'secondary'}>Thời gian kết thúc</Typography>}
          {...form.register('lucky_draw.reg_ended_at')}
          onChange={(value) => form.setValue('lucky_draw.reg_ended_at', value?.toString())}
          slotProps={{
            field: {clearable: true}
          }}
          sx={{width: '100%'}}
        />
      </Grid>
    </Grid>
  );
}
