import {UpdateModalContext} from '@/containers/dashboard/admin/topics/update-modal/provider';
import {Overlay} from '@/components/view/overlay';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export function Gift() {
  const form = UpdateModalContext.useForm();
  const giftsState = UpdateModalContext.useSelector((state) => state.fetchGiftsState);
  return (
    <Overlay.Loading
      disabled={!giftsState.loading}
      circularProgressProps={{size: 24, color: 'secondary'}}>
      <FormControl sx={{width: 350}}>
        <InputLabel color={'secondary'}>Chọn quà</InputLabel>
        <Select color={'secondary'} label="Chọn quà" {...form.register('lucky_draw.gift_id')}>
          {giftsState.value?.map((gift) => (
            <MenuItem key={gift.id} value={gift.id}>
              {gift.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Overlay.Loading>
  );
}
