import {useProfileUpdateSelector} from '@/containers/dashboard/profile-update/provider';
import TextField from '@mui/material/TextField';
import {InfoRow} from '@/containers/dashboard/profile-update/components/common/info-row';

function useProfileNotes() {
  return useProfileUpdateSelector((state) => ({profile: state.profile, form: state.form}));
}

export function UserProfileNotes() {
  const {profile, form} = useProfileNotes();
  return (
    <InfoRow
      label={''}
      value={profile?.user_details?.notes || 'Chưa thiết lập'}
      renderValueEditMode={() => {
        return (
          <TextField
            defaultValue={profile?.user_details?.notes}
            placeholder={'Nội dung'}
            multiline={true}
            minRows={3}
            maxRows={20}
            {...form.register('extra.notes')}
          />
        );
      }}
    />
  );
}
