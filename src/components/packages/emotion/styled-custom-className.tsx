import React, {forwardRef} from 'react';
import setWith from 'lodash/setWith';
import clone from 'lodash/clone';

const immutableSet = <O extends Record<any, any>>(obj: O, path: string, value: any) =>
  setWith(clone(obj), path, value, clone);

export function withCustomClassname<
  C extends React.FC<{
    className?: string;
  }>
>(Component: C, mapToPath: string): C {
  return forwardRef(function MappedClassnamesToProps(props: React.ComponentProps<C>, ref: any) {
    const {className, ...remainingProps} = props;
    immutableSet(props, mapToPath, className);
    // @ts-ignore
    return <Component ref={ref} {...remainingProps} />;
  }) as unknown as C;
}
