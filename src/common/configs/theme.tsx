import type {Get, Paths} from 'type-fest';
import get from 'lodash/get';
import {alpha} from '@mui/system';

const getTs = <BaseType, Path extends string | string[]>(
  object: BaseType,
  path: Path
): Get<BaseType, Path> => get(object, path);

const colors = {
  primary: '#4B40D4',
  primary_blue: '#001EB8',
  primary_500: '#c9c5f2',
  primary_400: alpha('#FFCF33', 0.4),
  subtitle: '#AEAEAE',
  secondary: '#5B65AA',
  link: '#6196FF',
  darkBackground: '#0F1C36',
  lightBackground: '#F0F0F0',
  white: '#F5F5F5',
  blue: '#0022D5',
  grey: '#949494',
  black: '#111111',
  divider: '#808692',
  border: '#DEDEDE',
  text_200: '#E7E8EB',
  grey1: '#dedede',
  back1: '#111',

  warning: '#CD6200',
  warning_bg: '#FEF2E5',
  success: '#1F9254',
  success_bg: '#EBF9F1',
  danger: '#E70000',
  danger_bg: '#F7A4A4',
  f9: '#F9F9F9'
} as const;

export type TColors = typeof colors;

export const theme = {
  colors: colors as TColors
};

export type TTheme = typeof theme;

export function themeVar(path: Paths<TTheme>) {
  return (props: {theme?: any}) => getTs(props.theme, path);
}

export function themeColor(color: Paths<TColors>) {
  return themeVar((`colors.` + color) as any);
}
