'use client';

import {SessionProvider} from 'next-auth/react';
import {ReactNode} from 'react';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter';
import {theme} from '@/common/configs/theme';
import {
  createTheme as createMuiTheme,
  ThemeProvider as MuiThemeProvider
} from '@mui/material/styles';
import {ThemeProvider} from '@emotion/react';
import {SessionInstance} from '@/common/helpers/authentication/session-instance';
import {Toaster} from 'react-hot-toast';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFnsV3';
import {QueryParamProvider} from 'use-query-params';
import NextAdapterApp from 'next-query-params/app';

const muiTheme = createMuiTheme({
  palette: {
    mode: 'light',
    primary: {
      main: theme.colors.primary
    },
    secondary: {
      main: theme.colors.secondary
    },
    info: {
      main: theme.colors.blue
    },

    success: {
      main: theme.colors.success
    },
    error: {
      main: theme.colors.danger
    },
    warning: {
      main: theme.colors.warning
    }
  }
});

export function Providers({children}: {children: ReactNode}) {
  return (
    <SessionProvider>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={muiTheme}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <QueryParamProvider adapter={NextAdapterApp}>{children}</QueryParamProvider>
            </LocalizationProvider>
            <Toaster position={'top-right'} />
          </MuiThemeProvider>
        </ThemeProvider>
      </AppRouterCacheProvider>

      <SessionInstance />
    </SessionProvider>
  );
}
