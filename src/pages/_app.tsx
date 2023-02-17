import { ThemeProvider, useColorMode, useTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import React from 'react';

import withAppProvider from 'contexts/app/app.provider';

function App({ Component, pageProps }: AppProps) {
  const theme = useTheme();
  return (
    <ThemeProvider theme={{ ...theme }}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default withAppProvider(App);
