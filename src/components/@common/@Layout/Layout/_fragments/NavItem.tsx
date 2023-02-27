import { ListItem, ListItemProps, Text, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import useNavBarColor from '../_hooks/useNavBarColor';

export interface NavItemProps extends ListItemProps {
  link: string;
  linkName: string;
}

const NavItem = ({ link, linkName, ...css }: NavItemProps) => {
  const { navLinkTabColor } = useNavBarColor({ linkName, link });

  return (
    <ListItem float="left" {...css}>
      <Link href={link}>
        <Text fontWeight="bold" color={navLinkTabColor}>
          {linkName}
        </Text>
      </Link>
    </ListItem>
  );
};

export default React.memo(NavItem);
