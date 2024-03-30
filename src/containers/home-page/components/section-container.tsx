import styled from 'styled-components';
import {PropsWithChildren} from 'react';

export function SectionContainer({children}: PropsWithChildren<any>) {
  return <SectionWrapper>{children}</SectionWrapper>;
}

const SectionWrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 20px 0;
`;
