import styled from '@emotion/styled';
import {useProfileUpdateSelector} from '@/containers/dashboard/profile-update/provider';
import {ReactNode} from 'react';

export function InfoRow(props: {
  label: string;
  value?: string;
  renderValueEditMode?: () => ReactNode;
}) {
  const mode = useProfileUpdateSelector((state) => state.mode);
  return (
    <Wrapper>
      <Label>{props.label}</Label>
      {mode === 'VIEW' ? <Value>{props.value}</Value> : props.renderValueEditMode?.()}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
`;

const Value = styled.div``;