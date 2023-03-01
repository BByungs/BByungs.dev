import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import { ColorModeScript } from '@chakra-ui/react';
import theme from '@theme/theme';
import { CONFIG } from '@config';
import { METADATA } from '@configs/metaData';
import { GA_TRACKING_ID } from '@utils/gtag';

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

  googleAnalyticsTag() {
    return {
      __html: `
      window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
      `,
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
          {/* Google tag (gtag.js) */}
          <script dangerouslySetInnerHTML={this.googleAnalyticsTag()} />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
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
