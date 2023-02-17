import { ComponentSingleStyleConfig } from '@chakra-ui/theme';
import breakpoints from '@theme/foundations/breakpoints';

export const Container: ComponentSingleStyleConfig = {
  baseStyle: {
    padding: '0px',
    maxW: {
      ...breakpoints,
    },
  },
  defaultProps: {},
  sizes: {},
  variants: {},
};
