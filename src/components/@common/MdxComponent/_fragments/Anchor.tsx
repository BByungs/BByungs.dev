import React, { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

import { Link } from '@chakra-ui/react';

const Anchor = (
  props: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >,
) => {
  return (
    <Link
      href={props.href}
      isExternal
      textDecoration="underline"
      _hover={{ textDecor: 'underline' }}
      color="gray.500"
      {...props}
    >
      {props.children}
    </Link>
  );
};

export default Anchor;
