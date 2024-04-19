'use client';

import {PropsWithChildren} from 'react';
import styled from '@emotion/styled';
import {ComponentPreviews, useInitial} from '@/dev';
import {DevSupport} from '@react-buddy/ide-toolbox-next';
import {PageHeader} from './page-header';
import {PageFooter} from './page-footer';
import {themeColor} from "@/common/configs/theme";

export function PageContainer(props: PropsWithChildren<object>) {
  return (
    <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
      <ContainerFuild>
        <PageHeader />
        <PageContent>{props.children}</PageContent>
        <PageFooter />
      </ContainerFuild>
    </DevSupport>
  );
}

export const ContainerFuild = styled.div`
    background-color: ${themeColor('white2')};
`

export const PageContent = styled.div`
  width: 100%;
  margin: 0 auto;
`;
