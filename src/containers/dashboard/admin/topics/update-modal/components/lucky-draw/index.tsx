import Grid from '@mui/material/Grid';
import {NameStatus} from '@/containers/dashboard/admin/topics/update-modal/components/lucky-draw/name-status';
import {Time} from '@/containers/dashboard/admin/topics/update-modal/components/lucky-draw/time';
import {Conditions} from '@/containers/dashboard/admin/topics/update-modal/components/lucky-draw/conditions';
import {Gift} from '@/containers/dashboard/admin/topics/update-modal/components/lucky-draw/gift';
import {UpdateModalContext} from '@/containers/dashboard/admin/topics/update-modal/provider';

export function LuckyDraw() {
  const isLuckyDraw = UpdateModalContext.useSelector((state) => state.isLuckyDraw);
  if (!isLuckyDraw) return null;

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <NameStatus />
      </Grid>
      <Grid item>
        <Time />
      </Grid>
      <Grid item>
        <Conditions />
      </Grid>
      <Grid item>
        <Gift />
      </Grid>
    </Grid>
  );
}
