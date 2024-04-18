import styled from '@emotion/styled';
import {useProfileUpdateSelector} from '@/containers/dashboard/profile-update/provider';
import {ReactNode} from 'react';

export function InfoRow(props: {
  label: string;
  value?: string;
  direction?: 'column' | 'row';
  renderValueEditMode?: () => ReactNode;
}) {
  const mode = useProfileUpdateSelector((state) => state.mode);
  return (
    <Wrapper $direction={props.direction}>
      <Label>{props.label}</Label>
      {mode === 'VIEW' ? <Value>{props.value}</Value> : props.renderValueEditMode?.()}
    </Wrapper>
  );
}

const Wrapper = styled.div<{$direction?: 'column' | 'row'}>`
  display: flex;
  ${(p) =>
    p.$direction === 'row'
      ? `flex-direction: row; align-items: center;`
      : `flex-direction: column;`}
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
`;

const Value = styled.div``;
