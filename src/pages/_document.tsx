import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import { ColorModeScript } from '@chakra-ui/react';
import theme from '@theme/theme';
import { CONFIG } from '@config';
import { METADATA } from '@configs/metaData';

class Document extends NextDocument {
  redirectIEtoEdge() {
    return {
      __html: `
      if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
        window.location = 'microsoft-edge:' + window.location;
        setTimeout(function() {
          window.location = 'https://go.microsoft.com/fwlink/?linkid=2135547';
        }, 1);
      }`,
    };
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          {/* Icon  */}
          <link rel="icon" href="/favicon.ico" />
          {/* Redirect IE to Edge */}
          <script dangerouslySetInnerHTML={this.redirectIEtoEdge()} />
          {/* SEO */}
          <meta name="robots" content="follow, index" />
          <meta
            name="google-site-verification"
            content={CONFIG.GOOGLE_SITE_VERIFICATION}
          />
          <meta
            name="naver-site-verification"
            content={CONFIG.NAVER_SITE_VERIFICATION}
          />
          <meta name="author" content={METADATA.author} />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
