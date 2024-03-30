import {useMemo, useState} from 'react';

export function useBoolean(defaultState: boolean = false) {
  const [state, setState] = useState(defaultState);

  return useMemo(() => {
    return [state, () => setState(true), () => setState(false)] as const;
  }, [state]);
}
