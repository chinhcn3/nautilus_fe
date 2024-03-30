import {Avatar as CommonAvatar} from '@/components/user/avatar';
import {useProfileContext} from '@/containers/dashboard/layout-container/profile-context';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import editIcon from './assets/edit-icon.png';
import React, {useCallback} from 'react';
import useAsyncFn from 'react-use/lib/useAsyncFn';
import {uploadFile} from '@/common/helpers/uploads';
import toast from 'react-hot-toast';
import {UsersService} from '@/common/openapi';
import {httpClient} from '@/common/helpers/axios/http-client';

function useValues() {
  const {user} = useProfileContext();
  const onClick = useCallback(() => document.getElementById('change-avatar-input')?.click(), []);
  const [fileChangeState, onFileChange] = useAsyncFn(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const firstFile = event.target.files?.[0];
      if (!firstFile) return;

      const uploadPromise = uploadFile(firstFile, {
        objectKey: (file) => `avatar-${user.id}.${file.name.split('.').pop()?.toLowerCase()}`
      });

      const newAvatarUri = await toast.promise(
        uploadPromise,
        {
          loading: 'Đang upload avatar...',
          error: 'Upload avatar lỗi',
          success: 'Upload avatar thành công'
        },
        {
          id: 'update-profile'
        }
      );

      const service = new UsersService(httpClient);
      const update = service.updateUserProfile({
        ...user,
        avatar: newAvatarUri
      });

      await toast.promise(
        update,
        {
          loading: 'Đang cập nhật profile',
          error: 'Có lỗi xảy ra khi cập nhật profile, vui lòng thử lại sau',
          success: 'Cập nhật profile thành công'
        },
        {
          id: 'update-profile'
        }
      );

      setTimeout(() => location.reload(), 3000);
    },
    [user]
  );
  return {user, onClick, fileChangeState, onFileChange};
}

export function Avatar() {
  const {user, onClick, onFileChange} = useValues();
  return (
    <Wrapper onClick={onClick}>
      <SAvatar user={user} role={'button'} />
      <EditIcon {...editIcon} width={26} height={26} alt={'Update avatar'} />
      <input
        hidden
        id={'change-avatar-input'}
        type="file"
        accept="image/*"
        onChange={onFileChange}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;

  &:hover,
  &:active {
    opacity: 0.8;
  }
`;

const SAvatar = styled(CommonAvatar)`
  width: 100px;
  height: 100px;
  font-size: 50px;
  border: 2px solid ${themeColor('white')};
`;

const EditIcon = styled.img`
  position: absolute;
  inset: auto 6px 6px auto;
`;
