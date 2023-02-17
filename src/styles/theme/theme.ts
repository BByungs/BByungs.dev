import { extendTheme } from '@chakra-ui/react';
import components from './components';
import foundations from './foundations';
import textStyles from './testStyles';

const overrides = {
  ...foundations,
  components,
  textStyles,
};

const theme = extendTheme(overrides);

export default theme;
