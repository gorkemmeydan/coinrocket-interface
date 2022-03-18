import type { AppProps } from 'next/app';

import { AppContextProvider } from '@contexts/AppContextProvider';

import 'react-toastify/dist/ReactToastify.css';
import CustomToastContaier from '@lib/toast';

import { GlobalStyle } from '@styles/GlobalStyle';
import '@styles/globals.css';
import { ThemeProvider } from 'next-themes';

import { useEffect } from 'react';
import createTestEnvironment from '@utils/createTestEnvironment';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    createTestEnvironment();
  }, []);

  return (
    <AppContextProvider>
      <GlobalStyle />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
      <CustomToastContaier />
    </AppContextProvider>
  );
}
