import * as Chakra from '@chakra-ui/react';
import {
  AlertProps,
  ListItem,
  ListItemProps,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';
import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  OlHTMLAttributes,
} from 'react';
import { MDXComponentstype } from './type';
import {
  CodeBlock,
  InlineCode,
  LinkFragment,
  Table,
  TData,
  THead,
} from './_fragments';
const { chakra, Kbd, Alert } = Chakra;

export const MDXComponents: MDXComponentstype = {
  ...Chakra,
  h1: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
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
    >,
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
    >,
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
    >,
  ) => (
    <chakra.p apply="mdx.p" marginTop="1.25rem" lineHeight={1.7} {...props} />
  ),
  ul: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLUListElement>,
      HTMLUListElement
    >,
  ) => (
    <UnorderedList
      apply="mdx.ul"
      listStylePos="inside"
      listStyleType="revert"
      {...props}
    />
  ),
  ol: (
    props: DetailedHTMLProps<
      OlHTMLAttributes<HTMLOListElement>,
      HTMLOListElement
    >,
  ) => <OrderedList apply="mdx.ul" listStylePos="inside" {...props} />,
  li: (props: ListItemProps) => <ListItem pb="4px" apply="mdx.li" {...props} />,
  pre: (
    props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>,
  ) => {
    return <CodeBlock {...props} />;
  },
  strong: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >,
  ) => <chakra.p as="strong" fontWeight="semibold" {...props} />,
  code: InlineCode,
  br: (
    props: DetailedHTMLProps<HTMLAttributes<HTMLBRElement>, HTMLBRElement>,
  ) => <chakra.br height="24px" {...props} />,
  kbd: Kbd,
  table: Table,
  th: THead,
  td: TData,
  a: (
    props: DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
  ) => <chakra.a apply="mdx.a" {...props} />,
  blockquote: (props: AlertProps) => (
    <Alert
      mt="4"
      role="none"
      status="warning"
      variant="left-accent"
      as="blockquote"
      rounded="4px"
      my="1.5rem"
      {...props}
    />
  ),
};
