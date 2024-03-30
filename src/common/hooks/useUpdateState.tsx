import {Dispatch, SetStateAction, useState} from 'react';
import useShallowCompareEffect from 'react-use/lib/useShallowCompareEffect';

export function useUpdateState<T>(state: T): [T, Dispatch<SetStateAction<T>>] {
  const [newState, setState] = useState<T>(state);

  useShallowCompareEffect(() => {
    setState(state);
  }, [state]);

  return [newState, setState] as const;
}
