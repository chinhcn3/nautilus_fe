import React, {useCallback, useState} from 'react';
import uuid from 'uuid';

type TPortalOptions = {
  key?: string;
};

type IPutElementFn = (
  element: React.ReactElement,
  options?: TPortalOptions
) => {
  remove: () => void;
  update: (
    element: React.ReactElement,
    options?: Omit<TPortalOptions, 'key'>
  ) => ReturnType<IPutElementFn>;
};
export let putElement: IPutElementFn;
export let removeElement: (key: string) => void;

export function Portal() {
  const [elements, setElements] = useState<Map<string, React.ReactElement>>(() => new Map());

  putElement = useCallback((element, options) => {
    const key = options?.key || uuid.v4();
    setElements((map) => {
      const newMap = new Map(map);
      newMap.set(key, element);
      return newMap;
    });

    return {
      remove: () => removeElement(key),
      update: (element, options) =>
        putElement(element, {
          ...options,
          key
        })
    };
  }, []);

  removeElement = useCallback((key) => {
    setElements((map) => {
      const newMap = new Map(map);
      newMap.delete(key);
      return newMap;
    });
  }, []);

  return (
    <>
      {Array.from(elements.entries()).map(([key, element]) =>
        React.cloneElement(element, {
          key
        })
      )}
    </>
  );
}
