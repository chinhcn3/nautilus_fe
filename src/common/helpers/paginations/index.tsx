import {NumberParam, useQueryParam, withDefault} from 'use-query-params';
import {DEFAULT_PAGE_SIZE} from '@/common/constants';
import {useMemo} from 'react';

export const pageNumberParamName = 'page';
export const usePageNumber = () => useQueryParam(pageNumberParamName, withDefault(NumberParam, 1));

export function usePageFilterObject(options?: {pageSize?: number}) {
  const pageSize = options?.pageSize ?? DEFAULT_PAGE_SIZE;
  const [pageNumber] = usePageNumber();

  return useMemo(() => {
    return {
      limit: pageSize,
      offset: (pageNumber - 1) * pageSize
    };
  }, [pageSize, pageNumber]);
}

export function getIsLastPage(totalItems?: number, pageSize = DEFAULT_PAGE_SIZE) {
  return ~~Number(totalItems) < pageSize;
}
