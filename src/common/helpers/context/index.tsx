import {createContext, useContextSelector} from 'use-context-selector';
import {ComponentProps, ReactNode} from 'react';

export function createHookContext<
  F extends (props?: ComponentProps<any>) => any,
  R = ReturnType<F>
>(useValues: F) {
  type Props = Parameters<F>[0] extends object ? Parameters<F>[0] : object;

  const Context = createContext({} as R);

  function Provider({children, ...props}: {children: ReactNode} & Props): React.JSX.Element {
    const values = useValues(props);
    return <Context.Provider value={values}>{children}</Context.Provider>;
  }

  function useSelector<Selected>(selector: (state: R) => Selected): Selected {
    return useContextSelector(Context, selector);
  }

  return {
    Provider,
    useSelector
  } as {
    Provider: typeof Provider;
    useSelector: typeof useSelector;
    __ContextType: R;
    __ProviderProps: Props;
  };
}
