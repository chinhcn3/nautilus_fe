import {FormItemsWrapper} from '../common';
import {useProfileUpdateSelector} from '@/containers/dashboard/profile-update/provider';
import TextField from '@mui/material/TextField';
import {InfoRow} from '@/containers/dashboard/profile-update/components/common/info-row';
import styled from '@emotion/styled';

function useProfileNotes() {
  return useProfileUpdateSelector((state) => ({profile: state.profile, form: state.form}));
}

export function UserProfileNotes() {
  const {profile, form} = useProfileNotes();
  return (
    <Wrapper>
      <InfoRow
        label={''}
        value={profile?.user_details?.notes || 'Chưa thiết lập'}
        renderValueEditMode={() => {
          return (
            <TextField
              defaultValue={profile?.user_details?.notes}
              placeholder={'Nội dung'}
              sx={{width: 420}}
              {...form.register('extra.notes')}
            />
          );
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled(FormItemsWrapper)`
  padding: 16px 0;
`;
