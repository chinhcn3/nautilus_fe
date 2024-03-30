import Stack from '@mui/system/Stack';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import {useId} from 'react';
import {topicStatusesWithLocale} from '@/common/constants/topic-status';
import {useStatusFilterParam} from '@/containers/dashboard/admin/topics/provider';
import FormControl from '@mui/material/FormControl';

export function Filter() {
  const id = useId();
  const [status, setStatus] = useStatusFilterParam();

  return (
    <Stack direction="row" alignItems="center" justifyContent={'space-between'} marginBottom={2}>
      <div />

      <Stack direction="row" spacing={1}>
        <FormControl>
          <InputLabel id={id} color={'secondary'}>
            Lọc theo
          </InputLabel>
          <Select
            labelId={id}
            color={'secondary'}
            placeholder={'Lọc theo'}
            size={'small'}
            value={status}
            label={'Lọc theo'}
            onChange={(event) => setStatus(event.target.value)}
            displayEmpty
            sx={{width: 160}}>
            {Object.entries(topicStatusesWithLocale).map(([key, value]) => {
              return (
                <MenuItem key={key} value={key}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  );
}
