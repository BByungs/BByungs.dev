import {
  chakra,
  TableColumnHeaderProps,
  TableHeadProps,
  TableProps,
  Thead,
} from '@chakra-ui/react';
import * as React from 'react';

export const Table = (props: TableProps) => (
  <chakra.div overflowX="auto">
    <chakra.table textAlign="left" mt="32px" width="full" {...props} />
  </chakra.div>
);

export const THead = (props: TableHeadProps) => (
  <Thead
    bg="gray.50"
    _dark={{ bg: 'whiteAlpha.100' }}
    fontWeight="semibold"
    p={2}
    fontSize="sm"
    {...props}
  />
);

export const TData = (props: TableColumnHeaderProps) => (
  <chakra.td
    p={2}
    borderTopWidth="1px"
    borderColor="inherit"
    fontSize="sm"
    whiteSpace="normal"
    {...props}
  />
);
