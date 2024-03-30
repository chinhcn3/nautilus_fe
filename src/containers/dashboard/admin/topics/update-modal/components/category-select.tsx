import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {Overlay} from '@/components/view/overlay';
import {UpdateModalContext} from '@/containers/dashboard/admin/topics/update-modal/provider';
import {useController} from 'react-hook-form';
import type {admintopicdto_UpdateTopicReq} from '@/common/openapi';

export function CategorySelect() {
  const [fetchCategoriesState, form] = UpdateModalContext.useSelector((state) => [
    state.fetchCategoriesState,
    state.form
  ]);

  const {field} = useController<admintopicdto_UpdateTopicReq>({
    control: form.control,
    name: 'category_id'
  });

  return (
    <Overlay.Loading
      disabled={!fetchCategoriesState.loading}
      circularProgressProps={{size: 24, color: 'secondary'}}>
      <FormControl sx={{width: 350}}>
        <InputLabel color={'secondary'}>Chọn danh mục</InputLabel>
        <Select color={'secondary'} label="Chọn danh mục" {...field} value={Number(field.value)}>
          {fetchCategoriesState.value?.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name_vi}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Overlay.Loading>
  );
}
