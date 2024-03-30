import {useProfileContext} from '@/containers/dashboard/layout-container/profile-context';
import {
  notificationdto_NotificationSettingResp,
  NotificationsService
} from '../../../common/openapi';
import {httpClient} from '@/common/helpers/axios/http-client';
import useAsyncRetry from 'react-use/lib/useAsyncRetry';
import {createHookContext} from '@/common/helpers/context';
import useAsyncFn from 'react-use/lib/useAsyncFn';
import {TNotificationSetting} from '@/common/constants/notification-settings';
import toast from 'react-hot-toast';
import {getErrorMessage} from '@/common/helpers/axios/error';
import {useCallback} from 'react';
import useSetState from 'react-use/lib/useSetState';

const notificationService = new NotificationsService(httpClient);

function useValues() {
  const {user} = useProfileContext();

  const [settings, setSettings] = useSetState<notificationdto_NotificationSettingResp>();

  const fetchNotificationSettingsState = useAsyncRetry(async () => {
    const resp = await notificationService.getNotificationSettings();
    setSettings(resp.data!);
  }, []);

  const updateSetting = useCallback((data: {key: TNotificationSetting; value: boolean}) => {
    setSettings({[data.key]: data.value});
  }, []);

  const [saveState, save] = useAsyncFn(async () => {
    const promise = notificationService.updateNotificationSettings(settings);

    await toast.promise(promise, {
      loading: 'Đang cập nhật...',
      success: 'Cập nhật thành công',
      error: getErrorMessage
    });

    fetchNotificationSettingsState.retry();
  }, [settings, fetchNotificationSettingsState.retry]);

  return {
    user,
    settings,
    fetchNotificationSettingsState: {
      ...fetchNotificationSettingsState,
      loading: fetchNotificationSettingsState.loading || saveState.loading
    },
    updateSetting,
    save
  };
}

export const SettingsContext = createHookContext(useValues);
