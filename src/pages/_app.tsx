import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AppContextProvider } from '../contexts/AppContextProvider';

import 'react-toastify/dist/ReactToastify.css';

import CustomToastContaier from '../lib/toast';
import { GlobalStyle } from '../styles/GlobalStyle';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }: AppProps) {
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
