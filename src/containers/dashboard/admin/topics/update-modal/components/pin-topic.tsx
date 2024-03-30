import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {PINNED_TO_LABELS} from '@/common/constants/pinned-to';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {UpdateModalContext} from '@/containers/dashboard/admin/topics/update-modal/provider';

export function PinTopic() {
  const form = UpdateModalContext.useForm();

  return (
    <FormControl sx={{width: 350}}>
      <InputLabel id="pin-topic" color={'secondary'}>
        Pin topic to
      </InputLabel>
      <Select
        labelId={'pin-topic'}
        variant={'outlined'}
        color={'secondary'}
        placeholder={'Pin topic to'}
        label={'Pin topic to'}
        {...form.register('pinned_to')}>
        {Object.entries(PINNED_TO_LABELS).map(([value, label]) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
