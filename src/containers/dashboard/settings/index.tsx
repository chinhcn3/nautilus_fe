import {ContentWrapper} from '@/containers/dashboard/common/content-wrapper';
import {SettingsContext} from '@/containers/dashboard/settings/provider';
import {
  notificationSettingsWithLocales,
  TNotificationSetting
} from '@/common/constants/notification-settings';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {Overlay} from '@/components/view/overlay';
import {ReactNode} from 'react';
import {FilledButton} from '@/components/mui/button/FilledButton';

export function Settings() {
  return (
    <SettingsContext.Provider>
      <ContentWrapper>
        <Typography variant={'h4'} color={'secondary'}>
          Cài đặt thông báo
        </Typography>

        <LoadingOverlay>
          <Grid container spacing={2} marginTop={2}>
            {Object.keys(notificationSettingsWithLocales).map((key) => {
              return (
                <Grid key={key} item xs={6}>
                  <NotificationSettingItem settingKey={key as TNotificationSetting} />
                </Grid>
              );
            })}

            <Grid key={'save'} item container xs={12} justifyContent="flex-end">
              <SaveButton />
            </Grid>
          </Grid>
        </LoadingOverlay>
      </ContentWrapper>
    </SettingsContext.Provider>
  );
}

function LoadingOverlay({children}: {children: ReactNode}) {
  const loading = SettingsContext.useSelector(
    (state) => state.fetchNotificationSettingsState.loading
  );
  return <Overlay.Loading disabled={!loading}>{children}</Overlay.Loading>;
}

function NotificationSettingItem({settingKey}: {settingKey: TNotificationSetting}) {
  const [settings, updateSetting] = SettingsContext.useSelector((state) => [
    state.settings,
    state.updateSetting
  ]);

  return (
    <FormControlLabel
      control={<Checkbox checked={!!settings?.[settingKey]} color={'secondary'} />}
      label={notificationSettingsWithLocales[settingKey]}
      onChange={(_e, checked) =>
        updateSetting({
          key: settingKey,
          value: checked
        })
      }
    />
  );
}

function SaveButton() {
  const save = SettingsContext.useSelector((state) => state.save);
  return <FilledButton onClick={save}>Cập nhật</FilledButton>;
}
