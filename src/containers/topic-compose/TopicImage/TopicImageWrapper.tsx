import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import Stack from '@mui/system/Stack';
import {BootstrapInput} from '@/components/mui/input/BootstrapInput';
import {MouseEventHandler, ReactNode, useCallback, useId, useState} from 'react';
import {FilledButton, FilledButtonProps} from '@/components/mui/button/FilledButton';
import EditIcon from '@mui/icons-material/Edit';
import {OutlinedButton} from '@/components/mui/button/OutlinedButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export function TopicImageWrapper({
  label,
  buttonProps,
  coverImageSrc,
  onClickEdit,
  onClickDelete
}: {
  label: ReactNode;
  buttonProps: FilledButtonProps;
  coverImageSrc?: string;
  onClickEdit?: MouseEventHandler<any>;
  onClickDelete?: MouseEventHandler<any>;
}) {
  const id = useId();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const wrapWithClose = useCallback((fn?: (...args: any[]) => any) => {
    return (...args: any[]) => {
      fn?.(...args);
      setAnchorEl(null);
    };
  }, []);

  return (
    <Stack direction={'column'} spacing={1}>
      <BootstrapInput.Label>{label}</BootstrapInput.Label>
      <Wrapper $imgSrc={coverImageSrc}>
        {coverImageSrc ? (
          <>
            <EditButton id={`${id}-button`} onClick={(e) => setAnchorEl(e.currentTarget)}>
              <EditIcon />
            </EditButton>
            <Menu
              open={!!anchorEl}
              onClose={() => setAnchorEl(null)}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              id={`${id}-menu`}>
              <MenuItem onClick={wrapWithClose(onClickEdit)}>Chỉnh sửa</MenuItem>
              <MenuItem onClick={wrapWithClose(onClickDelete)}>Xóa</MenuItem>
            </Menu>
          </>
        ) : (
          <FilledButton variant={'secondary'} {...buttonProps} />
        )}
      </Wrapper>
    </Stack>
  );
}

const Wrapper = styled.div<{$imgSrc?: string}>`
  width: 100%;
  aspect-ratio: 16/8;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;
  background-image: ${(p) => (p.$imgSrc ? `url(${encodeURI(p.$imgSrc)})` : 'none')};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: ${(p) => (p.$imgSrc ? 0 : '1px')} dashed ${themeColor('primary')};
  border-radius: 4px;

  position: relative;
`;

const EditButton = styled(OutlinedButton)`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 0;
  min-width: auto;
  width: 40px;
  height: 40px;
`;
