import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';

export function useIsXsUp() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up('xs'));
}

export function useIsSmUp() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up('sm'));
}
