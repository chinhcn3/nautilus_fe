'use client';

import {PropsWithChildren} from 'react';
import styled from '@emotion/styled';
import {ComponentPreviews, useInitial} from '@/dev';
import {DevSupport} from '@react-buddy/ide-toolbox-next';
import {PageHeader} from './page-header';
import {PageFooter} from './page-footer';
import Container from '@mui/material/Container';

export function PageContainer(props: PropsWithChildren<object>) {
    return (
        <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
            <>
                <PageHeader/>
                <PageContent>
                    <PageContent>{props.children}</PageContent>
                </PageContent>
                <PageFooter/>
            </>
        </DevSupport>
    );
}

export const PageContent = styled.div`
    width: 100%;
    margin: 0 auto;
`;
