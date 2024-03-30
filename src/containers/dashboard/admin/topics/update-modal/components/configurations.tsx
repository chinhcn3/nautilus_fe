import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import {UpdateModalContext} from '@/containers/dashboard/admin/topics/update-modal/provider';

export function Configurations() {
  const form = UpdateModalContext.useForm();

  return (
    <FormControl color={'secondary'}>
      <FormLabel id="configurations" color={'secondary'}>
        Cấu hình
      </FormLabel>
      <Grid container spacing={2}>
        <Grid item>
          <FormControlLabel
            value="allow-comments"
            control={<Checkbox color={'secondary'} {...form.register('allow_discussion')} />}
            label="Cho phép bình luận"
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            value="magazin-style"
            control={<Checkbox color={'secondary'} {...form.register('magazine_styled')} />}
            label="Magazine-styled"
          />
        </Grid>
      </Grid>
    </FormControl>
  );
}
