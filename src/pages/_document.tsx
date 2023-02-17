import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import { ColorModeScript } from '@chakra-ui/react';
import theme from '@theme/theme';

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
