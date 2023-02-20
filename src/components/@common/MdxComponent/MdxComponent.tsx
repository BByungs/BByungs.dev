import * as Chakra from '@chakra-ui/react';
import {
  DetailedHTMLProps,
  HTMLAttributes,
  LiHTMLAttributes,
  OlHTMLAttributes,
} from 'react';
import { LinkFragment, Pre } from './_fragments';
const { chakra } = Chakra;

export const MDXComponents = {
  ...Chakra,
  h1: (
    props: DetailedHTMLProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => (
    <LinkFragment
      apply="mdx.h1"
      as="h1"
      fontWeight="bold"
      fontSize="1.875rem"
      marginBottom="0.25rem"
      marginTop="2rem"
      lineHeight={1.2}
      {...props}
    />
  ),
  p: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >
  ) => <chakra.p apply="mdx.p" {...props} />,
  ul: (
    props: DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>
  ) => <chakra.ul apply="mdx.ul" {...props} />,
  ol: (
    props: DetailedHTMLProps<
      OlHTMLAttributes<HTMLOListElement>,
      HTMLOListElement
    >
  ) => <chakra.ol apply="mdx.ul" {...props} />,
  li: (
    props: DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
  ) => <chakra.li pb="4px" {...props} />,
  pre: (
    props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>
  ) => <Pre {...props} />,
  code: (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >
  ) => <chakra.code w="100%" {...props} />,
};
