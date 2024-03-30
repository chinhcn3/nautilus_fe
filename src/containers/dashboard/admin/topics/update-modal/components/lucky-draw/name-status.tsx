import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {UpdateModalContext} from '@/containers/dashboard/admin/topics/update-modal/provider';
import {luckyDrawStatusesWithLocale, TLuckyDrawStatus} from '@/common/constants/lucky-draw-status';
import {luckyDrawKinds} from '@/common/constants/lucky-draw-kind';

export function NameStatus() {
  const form = UpdateModalContext.useForm();
  return (
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <FormControl fullWidth>
          <InputLabel sx={{width: '100%'}} color={'secondary'}>
            Loại chương trình
          </InputLabel>
          <Select label={'Loại chương trình'} fullWidth {...form.register('lucky_draw.kind')} color={'secondary'}>
            {luckyDrawKinds.map(kind => {
              return <MenuItem key={kind} value={kind}>{kind}</MenuItem>
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl sx={{width: '100%'}}>
          <InputLabel sx={{width: '100%'}} color={'secondary'}>
            Trạng thái
          </InputLabel>

          <Select
            sx={{width: '100%'}}
            color={'secondary'}
            label="Trạng thái"
            value={'OK' satisfies TLuckyDrawStatus}
            {...form.register('lucky_draw.status')}>
            {Object.entries(luckyDrawStatusesWithLocale).map(([value, name]) => {
              return <MenuItem key={value} value={value}>{name}</MenuItem>
            })}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}
