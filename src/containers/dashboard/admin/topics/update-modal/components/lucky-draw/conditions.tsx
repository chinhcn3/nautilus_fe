import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {UpdateModalContext} from '@/containers/dashboard/admin/topics/update-modal/provider';

export function Conditions() {
  const form = UpdateModalContext.useForm();
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <FormLabel color={'secondary'}>Điều kiện</FormLabel>
      </Grid>

      <Grid item>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              type={'number'}
              color={'secondary'}
              fullWidth
              label={'Số điểm trừ khi tham gia'}
              {...form.register('lucky_draw.reg_taken_points')}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type={'number'}
              color={'secondary'}
              fullWidth
              label={'Số điểm trừ khi trúng thưởng'}
              {...form.register('lucky_draw.win_taken_points')}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type={'number'}
              color={'secondary'}
              fullWidth
              label={'Lượt xem yêu cầu'}
              {...form.register('lucky_draw.required_views')}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type={'number'}
              color={'secondary'}
              fullWidth
              label={'Luợt xem hàng ngày yêu cầu'}
              {...form.register('lucky_draw.required_daily_views')}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
