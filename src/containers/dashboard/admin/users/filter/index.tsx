import {Search} from '@/components/mui/search';
import Grid from '@mui/material/Grid';

export function Filter() {
  return (
    <Grid justifyContent={'space-between'} display={'flex'}>
      <div />
      <Search sx={{width: 320}} />
    </Grid>
  );
}
