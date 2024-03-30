// noinspection JSUnusedGlobalSymbols

import type {Metadata} from 'next';
import './globals.css';
import {Providers} from '@/app/providers';
import {PageContainer} from '@/containers/page-container';
import {Suspense} from 'react';
import {SupportModal} from '@/containers/support-modal';

export const metadata: Metadata = {
  title: 'Tech Loop',
  description: 'Tech Loop'
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymous'} />

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Suspense>
          <Providers>
            <PageContainer>{children}</PageContainer>
            <SupportModal />
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
