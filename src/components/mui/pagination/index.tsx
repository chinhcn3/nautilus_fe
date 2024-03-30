import Stack from '@mui/system/Stack';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {usePageNumber} from '@/common/helpers/paginations';
import {useMemo} from 'react';

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
      <Button
        key={'prev'}
        variant={'text'}
        startIcon={<ArrowBackIcon />}
        disabled={isFirst}
        sx={{textTransform: 'none'}}
        onClick={() => setPageNumber(pageNumber - 1)}>
        Trang trước
      </Button>
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
      <Button
        key={'next'}
        variant={'text'}
        endIcon={<ArrowForwardIcon />}
        disabled={Boolean(isLastPage)}
        sx={{textTransform: 'none'}}
        onClick={() => setPageNumber(pageNumber + 1)}>
        Trang sau
      </Button>
    </Stack>
  );
}
