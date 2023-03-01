import { ThemeProvider, useColorMode, useTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';

import withAppProvider from 'contexts/app/app.provider';
import { useRouter } from 'next/router';

import * as gtag from '@utils/gtag';

function App({ Component, pageProps }: AppProps) {
  const theme = useTheme();
  const router = useRouter();

  /**
   * @Description 이 코드의 존재이유: _document.tsx 파일에서 애널리틱스 코드가 작동되지만, NEXT JS 앱의 특성상 넥스트 앱에서의 페이지 이동은 구글애널리틱스가 파악 못하므로, next/router를 이용하여 라우팅이 발생했을때, 강제적으로 gtag의 pageview함수로 구글 애널리틱스에게 다른 페이지도 봤다고 알리는것임
   */
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider theme={{ ...theme }}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default withAppProvider(App);
