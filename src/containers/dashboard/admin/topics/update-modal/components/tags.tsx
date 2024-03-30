import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {UpdateModalContext} from '@/containers/dashboard/admin/topics/update-modal/provider';
import Stack from '@mui/system/Stack';
import {RecommendedTags} from '@/containers/dashboard/admin/topics/update-modal/components/tags/recommended-tags/recommended-tags';
import {useWatch} from 'react-hook-form';
import Chip from '@mui/material/Chip';

export function Tags() {
  const form = UpdateModalContext.useForm();
  const tags = useWatch({control: form.control, name: 'tags'});

  return (
    <Stack spacing={1}>
      <Autocomplete
        multiple
        options={[]}
        freeSolo={true}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              size={'medium'}
              variant="outlined"
              label="Nhập tags"
              placeholder="Nhấn Enter để xác nhận tag"
              color={'secondary'}
            />
          );
        }}
        onChange={(_event, value) => form.setValue('tags', [...new Set(value)])}
        value={tags ?? []}
        defaultValue={[]}
        renderTags={(tags, getTagProps) =>
          tags.map((tag, index) => <Chip {...getTagProps({index})} key={tag} label={tag} />)
        }
      />

      <RecommendedTags />
    </Stack>
  );
}
