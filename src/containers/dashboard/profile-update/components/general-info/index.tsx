import {useProfileUpdateSelector} from '@/containers/dashboard/profile-update/provider';
import {InfoRow} from '@/containers/dashboard/profile-update/components/common/info-row';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField, {TextFieldProps} from '@mui/material/TextField';
import styled from '@emotion/styled';
import FormControlLabel from '@mui/material/FormControlLabel';
import {TGender} from '@/common/helpers/transforms/user';
import {themeColor} from '@/common/configs/theme';
import {useFormState} from 'react-hook-form';
import {forwardRef} from 'react';
import Grid from '@mui/material/Grid';

function useGeneralInfo() {
  const user = useProfileUpdateSelector((state) => state.user);
  const profile = useProfileUpdateSelector((state) => state.profile);
  const form = useProfileUpdateSelector((state) => state.form);
  const formState = useFormState({control: form.control});
  return {user, profile, form, formState};
}

export function GeneralInfo() {
  const {user, profile, form, formState} = useGeneralInfo();
  return (
    <Grid container spacing={2} pt={1} pb={2}>
      <Grid item xs={12} md={6}>
        <InfoRow
          label={'Tên đầy đủ'}
          value={user.full_name || '-'}
          renderValueEditMode={() => {
            return (
              <TextFieldWithError
                defaultValue={user.full_name}
                placeholder={'Nguyễn Văn A'}
                {...form.register('full_name')}
                errorMessage={formState.errors.full_name?.message}
              />
            );
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <InfoRow
          label={'Nick name'}
          value={user.nick_name || '-'}
          renderValueEditMode={() => {
            return (
              <TextFieldWithError
                defaultValue={user.nick_name}
                placeholder={'mynickname'}
                {...form.register('nick_name')}
                errorMessage={formState.errors.nick_name?.message}
              />
            );
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <InfoRow
          label={'Email'}
          value={user.email || '-'}
          renderValueEditMode={() => {
            return (
              <TextField
                disabled={true}
                type={'email'}
                defaultValue={user.email}
                placeholder={'example@domain.com'}
              />
            );
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <InfoRow
          label={'Ngày sinh'}
          value={profile?.user_details?.birthdate || '-'}
          renderValueEditMode={() => {
            return (
              <TextFieldWithError
                type={'date'}
                placeholder={'25/01/1994'}
                {...form.register('extra.birthdate', {
                  value: ''
                })}
                errorMessage={formState.errors.extra?.birthdate?.message}
              />
            );
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <InfoRow
          label={'Số điện thoại'}
          value={profile?.user_details?.phone || '-'}
          renderValueEditMode={() => {
            return (
              <TextFieldWithError
                defaultValue={profile?.user_details?.phone}
                placeholder={'0987654321'}
                {...form.register('extra.phone')}
                errorMessage={formState.errors.extra?.phone?.message}
              />
            );
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <InfoRow
          label={'Địa chỉ'}
          value={profile?.user_details?.address || '-'}
          renderValueEditMode={() => {
            return (
              <TextFieldWithError
                defaultValue={profile?.user_details?.address}
                placeholder={'Số 1, ngõ 2, phường A, quận Hai Bà Trưng, Hà Nội'}
                {...form.register('extra.phone')}
                errorMessage={formState.errors.extra?.address?.message}
              />
            );
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <InfoRow
          label={'Giới tính'}
          value={profile?.user_details?.gender || '-'}
          direction={'row'}
          renderValueEditMode={() => {
            return (
              <>
                <RadioGroup
                  row
                  value={form.getValues('extra.gender') || 'O'}
                  onChange={e => form.setValue('extra.gender', e.target.value, {
                    shouldValidate: true,
                    shouldDirty: true,
                    shouldTouch: true
                  })}
                >
                  <FormControlLabel value={'M' satisfies TGender} control={<Radio />} label={'Nam'} />
                  <FormControlLabel value={'F' satisfies TGender} control={<Radio />} label={'Nữ'} />
                  <FormControlLabel value={'O' satisfies TGender} control={<Radio />} label={'Khác'} />
                </RadioGroup>
                {formState.errors.extra?.gender?.message &&
                  <ErrorText>{formState.errors.extra?.gender?.message}</ErrorText>}
              </>
            );
          }}
        />
      </Grid>
    </Grid>
  );
}

const TextFieldWithError = forwardRef(({errorMessage, ...props}: TextFieldProps & {
  errorMessage?: string
}, ref: any) => {
  return <>
    <TextField ref={ref} error={!!errorMessage} {...props} />
    {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
  </>;
});

const ErrorText = styled.span`
    color: ${themeColor('danger')};
    display: block;
`;
