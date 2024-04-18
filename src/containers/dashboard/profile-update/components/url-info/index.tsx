import {useProfileUpdateSelector} from '@/containers/dashboard/profile-update/provider';
import {InfoRow} from '@/containers/dashboard/profile-update/components/common/info-row';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import {useFormState} from 'react-hook-form';
import {forwardRef} from 'react';
import OutlinedInput, {OutlinedInputProps} from '@mui/material/OutlinedInput';
import FacebookIcon from './assets/facebook.svg';
import LinkedInIcon from './assets/linkedin.svg';
import WebsiteIcon from './assets/website.svg';
import XIcon from './assets/x.svg';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';

function useUrlInfo() {
  const user = useProfileUpdateSelector((state) => state.user);
  const profile = useProfileUpdateSelector((state) => state.profile);
  const form = useProfileUpdateSelector((state) => state.form);
  const formState = useFormState({control: form.control});
  return {user, profile, form, formState};
}

export function UserUrlInfo() {
  const {profile, form, formState} = useUrlInfo();
  return (
    <Grid container spacing={2} pt={1} pb={2}>
      <Grid item xs={12} md={6}>
        <InfoRow
          label={''}
          value={profile?.user_details?.website_url || '-'}
          renderValueEditMode={() => {
            return (
              <TextFieldWithError
                defaultValue={profile?.user_details?.website_url}
                placeholder={'Website URL'}
                {...form.register('extra.website_url')}
                errorMessage={formState.errors.extra?.website_url?.message}
                startAdornment={
                  <InputAdornment position="start">
                    <WebsiteIcon />
                  </InputAdornment>
                }
              />
            );
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <InfoRow
          label={''}
          value={profile?.user_details?.twitter_url || '-'}
          renderValueEditMode={() => {
            return (
              <TextFieldWithError
                defaultValue={profile?.user_details?.twitter_url}
                placeholder={'X URL (Twitter)'}
                {...form.register('extra.twitter_url')}
                errorMessage={formState.errors.extra?.twitter_url?.message}
                startAdornment={
                  <InputAdornment position="start">
                    <XIcon />
                  </InputAdornment>
                }
              />
            );
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <InfoRow
          label={''}
          value={profile?.user_details?.facebook_url || '-'}
          renderValueEditMode={() => {
            return (
              <TextFieldWithError
                defaultValue={profile?.user_details?.facebook_url}
                placeholder={'Facebook URL'}
                {...form.register('extra.facebook_url')}
                errorMessage={formState.errors.extra?.facebook_url?.message}
                startAdornment={
                  <InputAdornment position="start">
                    <FacebookIcon />
                  </InputAdornment>
                }
              />
            );
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <InfoRow
          label={''}
          value={profile?.user_details?.linkedin_url || '-'}
          renderValueEditMode={() => {
            return (
              <TextFieldWithError
                defaultValue={profile?.user_details?.linkedin_url}
                placeholder={'LinkedIn URL'}
                {...form.register('extra.linkedin_url')}
                errorMessage={formState.errors.extra?.linkedin_url?.message}
                startAdornment={
                  <InputAdornment position="start">
                    <LinkedInIcon />
                  </InputAdornment>
                }
              />
            );
          }}
        />
      </Grid>
    </Grid>
  );
}

const TextFieldWithError = forwardRef(
  (
    {
      errorMessage,
      ...props
    }: OutlinedInputProps & {
      errorMessage?: string;
    },
    ref: any
  ) => {
    return (
      <>
        <OutlinedInput ref={ref} error={!!errorMessage} {...props} />
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      </>
    );
  }
);

const ErrorText = styled.span`
  color: ${themeColor('danger')};
  display: block;
`;
