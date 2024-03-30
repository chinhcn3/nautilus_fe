import styled from '@emotion/styled';
import {MouseEvent, ReactNode} from 'react';
import {themeColor} from '@/common/configs/theme';
import Link from 'next/link';
import {TPath} from '@/common/path';

export function MenuItem(props: {
  icon: ReactNode;
  label: ReactNode;
  active?: boolean;
  secondary?: boolean;
  href?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <Link href={props.href ?? '#'} onClick={props.onClick}>
      <Wrapper $active={props.active} $secondary={props.secondary} role={'button'}>
        {props.icon}
        <Text $active={props.active} $secondary={props.secondary}>
          {props.label}
        </Text>
      </Wrapper>
    </Link>
  );
}

/**
 * @param href URL
 * @param pathname current path
 * @description Returns href and active if url and current path is the same
 */
MenuItem.buildMenuItemProps = (href: TPath, pathname: string) => {
  return {
    href,
    active: pathname === href
  };
};

const Wrapper = styled.div<{$active?: boolean; $secondary?: boolean}>`
  display: flex;
  padding: 12px;
  column-gap: 16px;
  align-items: center;
  background-color: ${(p) =>
    p.$active ? themeColor(p.$secondary ? 'text_200' : 'primary')(p) : themeColor('white')(p)};
  border-radius: 4px;
  transition: background-color 0.3s ease;
  &:hover,
  &:active {
    background-color: ${(p) => themeColor(p.$secondary ? 'text_200' : 'primary')(p)}AA;
  }

  > svg {
    filter: ${(p) => (p.$active && !p.$secondary ? `invert(1)` : `invert(0)`)};
  }
`;

const Text = styled.span<{$active?: boolean; $secondary?: boolean}>`
  font-size: 14px;
  color: ${(p) => (p.$active && !p.$secondary ? 'white' : 'black')};
`;
