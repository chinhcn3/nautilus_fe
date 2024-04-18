import Stack from '@mui/system/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIosRounded';
import {usePageNumber} from '@/common/helpers/paginations';
import {useMemo} from 'react';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

export function Pagination({isLastPage}: {isLastPage?: boolean}) {
  const [pageNumber, setPageNumber] = usePageNumber();
  const isFirst = pageNumber <= 1;

  const pages = useMemo(() => {
    return [pageNumber - 2, pageNumber - 1, pageNumber, !isLastPage ? pageNumber + 1 : 0].filter(
      (pageNumber) => pageNumber > 0
    );
  }, [pageNumber]);

  return (
    <Stack direction="row" alignItems="center" spacing={2} justifyContent={'center'} marginTop={2}>
      <IconButton key={'prev'} disabled={isFirst} onClick={() => setPageNumber(pageNumber - 1)}>
        <ArrowBackIcon />
      </IconButton>
      {pages.map((page) => {
        return (
          <Button
            key={page}
            variant={'contained'}
            onClick={() => setPageNumber(page)}
            disabled={pageNumber === page}>
            {page}
          </Button>
        );
      })}
      <IconButton
        key={'next'}
        disabled={Boolean(isLastPage)}
        onClick={() => setPageNumber(pageNumber + 1)}>
        <ArrowForwardIcon />
      </IconButton>
    </Stack>
  );
}
