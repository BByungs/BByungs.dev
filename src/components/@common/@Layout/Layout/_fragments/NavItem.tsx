import { ListItem, ListItemProps, Text, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export interface NavItemProps extends ListItemProps {
  link: string;
  linkName: string;
}

const NavItem = ({ link, linkName, ...css }: NavItemProps) => {
  return (
    <ListItem float="left" {...css}>
      <Link href={link}>
        <Text fontWeight="bold">{linkName}</Text>
      </Link>
    </ListItem>
  );
};

export default React.memo(NavItem);
