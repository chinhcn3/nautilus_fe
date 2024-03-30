'use client';

import styled from '@emotion/styled';
import {
  ProfileUpdateProvider,
  useProfileUpdateSelector
} from '@/containers/dashboard/profile-update/provider';
import {GeneralInfo} from '@/containers/dashboard/profile-update/components/general-info';
import {UserProfileNotes} from 'src/containers/dashboard/profile-update/components/profile-notes';
import {Banner} from '@/containers/dashboard/profile-update/banner';
import {themeColor} from '@/common/configs/theme';
import {SubmitButton} from '@/components/mui/button';

export function ProfileUpdateContainer() {
  return (
    <ProfileUpdateProvider>
      <Banner />

      <Box>
        <SectionTitle>Thông tin chung</SectionTitle>

        <GeneralInfo />

        <div className="gap" />

        <SectionTitle>Thông tin thêm</SectionTitle>

        <UserProfileNotes />

        <SaveButton />
      </Box>
    </ProfileUpdateProvider>
  );
}

function useSaveButton() {
  return useProfileUpdateSelector((state) => ({
    onClickSave: state.save,
    saving: state.saving,
    mode: state.mode
  }));
}

function SaveButton() {
  const values = useSaveButton();
  return (
    values.mode === 'EDIT' && (
      <SButton
        variant={'contained'}
        onClick={values.onClickSave}
        size={'large'}
        disabled={values.saving}>
        Lưu
      </SButton>
    )
  );
}

const Box = styled.div`
  background: ${themeColor('white')};
  margin-top: 16px;
  border-radius: 12px;
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h2`
  font-size: 16px;
  line-height: 20px;
  color: ${themeColor('secondary')};
  text-transform: uppercase;
  font-weight: 700;
`;

const SButton = styled(SubmitButton)`
  align-self: flex-end;
`;
