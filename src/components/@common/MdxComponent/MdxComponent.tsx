import * as Chakra from '@chakra-ui/react';
import {
  DetailedHTMLProps,
  HTMLAttributes,
  LiHTMLAttributes,
  OlHTMLAttributes,
} from 'react';
import { CodeBlock, InlineCode, LinkFragment } from './_fragments';
const { chakra } = Chakra;

export const MDXComponents = {
  ...Chakra,
  h1: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => (
    <chakra.h1
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
  h2: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => (
    <LinkFragment
      apply="mdx.h2"
      marginTop="4rem"
      marginBottom="0.5rem"
      lineHeight={1.3}
      fontWeight="semibold"
      fontSize="1.5rem"
      {...props}
    />
  ),
  h3: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => (
    <LinkFragment
      as="h3"
      marginTop="3rem"
      lineHeight={1.25}
      fontWeight="semibold"
      fontSize="1.25rem"
      apply="mdx.h3"
      {...props}
    />
  ),
  p: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >
  ) => (
    <chakra.p apply="mdx.p" marginTop="1.25rem" lineHeight={1.7} {...props} />
  ),
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
  ) => <chakra.li pb="4px" listStylePos="inside" {...props} />,
  pre: (
    props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>
  ) => {
    return <CodeBlock {...props} />;
  },
  strong: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >
  ) => <chakra.p as="strong" fontWeight="semibold" {...props} />,
  code: InlineCode,
  br: (
    props: DetailedHTMLProps<HTMLAttributes<HTMLBRElement>, HTMLBRElement>
  ) => <chakra.br height="24px" {...props} />,
};
