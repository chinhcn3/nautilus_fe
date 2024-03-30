import {PropsWithChildren, useState} from 'react';
import useAsyncFn from 'react-use/lib/useAsyncFn';
import {useForm} from 'react-hook-form';
import {UsersService} from '@/common/openapi';
import {httpClient} from '@/common/helpers/axios/http-client';
import {useContextSelector, createContext} from 'use-context-selector';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  transformProfileToUpdateProfileReq,
  TUpdateProfileReq,
  userdto_UpdateProfileReqSchema
} from '@/containers/dashboard/profile-update/helpers';
import {useProfileContext} from '@/containers/dashboard/layout-container/profile-context';
import toast from 'react-hot-toast';
import useAsync from 'react-use/lib/useAsync';
import {parse} from 'date-fns';
import {getErrorMessage} from '@/common/helpers/axios/error';
export const ProfileUpdateModes = ['VIEW', 'EDIT'] as const;
export type TProfileUpdateModes = typeof ProfileUpdateModes[number];

const useValues = () => {
  const {user} = useProfileContext();

  // Old: support both, New: just edit mode
  const [mode, setMode] = useState<TProfileUpdateModes>('EDIT');
  const [avatarFile, setAvatarFile] = useState<File>();

  const form = useForm({
    resolver: yupResolver(userdto_UpdateProfileReqSchema)
  });

  const {
    value: profile,
    loading: loadingProfile,
    error: loadProfileError
  } = useAsync(async () => {
    const service = new UsersService(httpClient);
    const resp = await service.getUserProfile();

    form.reset(transformProfileToUpdateProfileReq(resp.data!));

    return resp.data;
  }, [form]);

  const [{loading: saving, error: saveError}, _save] = useAsyncFn(
    async (data: TUpdateProfileReq) => {
      const service = new UsersService(httpClient);
      const update = service.updateUserProfile({
        ...data,
        extra: {
          ...data.extra,
          birthdate:
            data.extra.birthdate &&
            parse(data.extra.birthdate, 'yyyy-MM-dd', new Date()).toISOString()
        }
      });

      await toast.promise(
        update,
        {
          loading: 'Đang cập nhật profile',
          error: getErrorMessage,
          success: 'Cập nhật profile thành công'
        },
        {
          id: 'update-profile'
        }
      );

      setTimeout(() => location.reload(), 3000);
    },
    [avatarFile]
  );

  const save = form.handleSubmit(_save);

  return {
    user,
    mode,
    setMode,
    form,
    saving,
    saveError,
    save,
    profile,
    loadingProfile,
    loadProfileError,
    avatarFile,
    setAvatarFile
  };
};

export type TProfileUpdateContextValue = ReturnType<typeof useValues>;

const ProfileUpdateContext = createContext<TProfileUpdateContextValue>(null as any);

export const ProfileUpdateProvider = (props: PropsWithChildren<any>) => {
  const value = useValues();
  return (
    <ProfileUpdateContext.Provider value={value}>{props.children}</ProfileUpdateContext.Provider>
  );
};

export const useProfileUpdateSelector = <Selected,>(
  selector: (value: TProfileUpdateContextValue) => Selected
): Selected => useContextSelector(ProfileUpdateContext, selector);
