import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import {UpdateModalContext} from '@/containers/dashboard/admin/topics/update-modal/provider';
import {topicTypesWithLocale, TTopicType} from '@/common/constants/topic-type';

export function Type() {
  const form = UpdateModalContext.useForm();
  return (
    <FormControl color={'secondary'}>
      <FormLabel id="topic-type" color={'secondary'}>
        Kiểu
      </FormLabel>
      <RadioGroup
        aria-labelledby="topic-type"
        defaultValue={'NEWS' satisfies TTopicType}
        row
        color={'secondary'}
        {...form.register('type')}>
        {Object.entries(topicTypesWithLocale).map(([key, value]) => {
          return <FormControlLabel key={key} value={key} control={<Radio color={'secondary'} />} label={value} />
        })}
      </RadioGroup>
    </FormControl>
  );
}
