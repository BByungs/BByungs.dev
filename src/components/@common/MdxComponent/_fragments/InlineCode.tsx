import { chakra, HTMLChakraProps } from '@chakra-ui/react';
import React, { useRef } from 'react';

import { useSize } from '@chakra-ui/react-use-size';

const InlineCode = (props: HTMLChakraProps<'code'>) => {
  const codeRef = useRef(null);
  const dimensions = useSize(codeRef);

  /**
   * Value (in pixels) comes from the minimum width of
   * the `li` parent element in the changelog page
   * before the layout shifts to mobile.
   */
  const MIN_CONTENT_WIDTH = 363;
  //   const shouldWrap = dimensions.borderBox.width > MIN_CONTENT_WIDTH;
  const shouldWrap = dimensions ? dimensions?.width > MIN_CONTENT_WIDTH : false;

  return (
    <chakra.code
      apply="mdx.code"
      color={'purple.500'}
      _dark={{
        color: 'purple.200',
      }}
      ref={codeRef}
      whiteSpace={shouldWrap ? undefined : 'nowrap'}
      {...props}
    />
  );
};

export default InlineCode;
