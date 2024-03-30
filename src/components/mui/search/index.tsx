import {StringParam, useQueryParam, withDefault} from 'use-query-params';
import TextField from '@mui/material/TextField';
import {useState} from 'react';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';
import {TextFieldProps} from '@mui/material/TextField/TextField';

function useSearch() {
  return useQueryParam('search', withDefault(StringParam, ''));
}

function _Search(props: TextFieldProps) {
  const [search, setSearch] = useSearch();
  const [currentSearchText, setSearchText] = useState(search);

  useUpdateEffect(() => {
    const timeout = setTimeout(() => setSearch(currentSearchText), 1000);
    return () => clearTimeout(timeout);
  }, [currentSearchText]);

  return (
    <TextField
      value={currentSearchText}
      onChange={(e) => setSearchText(e.target.value)}
      onKeyUp={(e) => e.key === 'Enter' && setSearch(currentSearchText)}
      size={'small'}
      color={'secondary'}
      placeholder={'Tìm kiếm'}
      {...props}
    />
  );
}

export const Search = Object.assign(_Search, {
  useSearch
});
