'use client';

import {PageHeader} from 'src/components/page-header';
import {PropsWithChildren} from 'react';
import styled from '@emotion/styled';
import {ComponentPreviews, useInitial} from '@/dev';
import {DevSupport} from '@react-buddy/ide-toolbox-next';
import {PageFooter} from '@/components/page-footer';

export function PageContainer(props: PropsWithChildren<object>) {
  return (
    <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
      <>
        <PageHeader />
        <PageContent>{props.children}</PageContent>
        <PageFooter />
      </>
    </DevSupport>
  );
}

export const PageContent = styled.main`
  width: 100%;
  margin: 0 auto;
`;
