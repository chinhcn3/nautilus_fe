'use client';

import styled from '@emotion/styled';
import {
  ProfileUpdateProvider,
  useProfileUpdateSelector
} from '@/containers/dashboard/profile-update/provider';
import {GeneralInfo} from '@/containers/dashboard/profile-update/components/general-info';
import {UserProfileNotes} from 'src/containers/dashboard/profile-update/components/profile-notes';
import {UserUrlInfo} from '@/containers/dashboard/profile-update/components/url-info';
import {Banner} from '@/containers/dashboard/profile-update/banner';
import {themeColor} from '@/common/configs/theme';
import {FilledButton} from '@/components/mui/button/FilledButton';

export function ProfileUpdateContainer() {
  return (
    <ProfileUpdateProvider>
      <Banner />

      <Box>
        <SectionTitle>Thông tin chung</SectionTitle>
        <GeneralInfo />

        <SectionTitle>WEBSITE</SectionTitle>
        <UserUrlInfo />

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
      <SButton onClick={values.onClickSave} size={'large'} disabled={values.saving}>
        Lưu
      </SButton>
    )
  );
}

const Box = styled.div`
  background: ${themeColor('white')};
  margin-top: 32px;
  border-radius: 12px;
  padding: 16px 32px 32px 32px;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h2`
  font-size: 16px;
  line-height: 20px;
  color: ${themeColor('primary')};
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 16px;
`;

const SButton = styled(FilledButton)`
  align-self: flex-end;
  padding-left: 32px;
  padding-right: 32px;
  margin-top: 32px;
`;
