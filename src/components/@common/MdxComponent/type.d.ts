import * as Chakra from '@chakra-ui/react';
import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  OlHTMLAttributes,
} from 'react';

export type MDXComponentstype = {
  h1: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) => JSX.Element;
  h2: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) => JSX.Element;
  h3: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) => JSX.Element;
  p: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >,
  ) => JSX.Element;
  ul: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLUListElement>,
      HTMLUListElement
    >,
  ) => JSX.Element;
  ol: (
    props: DetailedHTMLProps<
      OlHTMLAttributes<HTMLOListElement>,
      HTMLOListElement
    >,
  ) => JSX.Element;
  li: (props: ListItemProps) => JSX.Element;
  pre: (
    props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>,
  ) => JSX.Element;
  strong: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >,
  ) => JSX.Element;
  code: (props: Chakra.HTMLChakraProps<'code'>) => JSX.Element;
  br: (
    props: DetailedHTMLProps<HTMLAttributes<HTMLBRElement>, HTMLBRElement>,
  ) => JSX.Element;
  kbd: Chakra.ComponentWithAs<'kbd', Chakra.KbdProps>;
  table: (props: Chakra.TableProps) => JSX.Element;
  th: (props: Chakra.TableHeadProps) => JSX.Element;
  td: (props: Chakra.TableColumnHeaderProps) => JSX.Element;
  a: (
    props: DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
  ) => JSX.Element;
  blockquote: (props: AlertProps) => JSX.Element;
};
