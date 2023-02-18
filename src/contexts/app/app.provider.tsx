import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import theme from '@theme/theme';
import Fonts from '@theme/components/Fonts';

function withAppProvider(AppComponent: React.FC<AppProps>) {
  return function WrappedAppComponent(props: AppProps) {
    return (
      <ChakraProvider resetCSS theme={theme}>
        <Fonts />
        <AppComponent {...props} />
      </ChakraProvider>
    );
  };
}

export default withAppProvider;
