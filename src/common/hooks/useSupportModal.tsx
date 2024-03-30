import createGlobalState from 'react-use/lib/factory/createGlobalState';
import {useCallback} from 'react';

export const useSupportModal = createGlobalState<boolean>(false);

export function useOpenSupportModal(): () => void {
  const setOpen = useSupportModal()[1];
  return useCallback(() => setOpen(true), []);
}
