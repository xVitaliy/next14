'use client';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ReactNode } from 'react';
import {
  CssBaseline,
  Experimental_CssVarsProvider as CssVarsProvider,
  getInitColorSchemeScript,
} from '@mui/material';
import { theme } from '../../theme';
import { Layout } from '@/Layout/Layout';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <AppRouterCacheProvider>
      <CssBaseline enableColorScheme={true} />
      <CssVarsProvider
        defaultMode='system'
        theme={theme}
        // set as root provider
        disableNestedContext
      >
        {getInitColorSchemeScript()}
        <Layout>{children}</Layout>
      </CssVarsProvider>
    </AppRouterCacheProvider>
  );
};
