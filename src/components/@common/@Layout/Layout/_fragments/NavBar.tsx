import React from 'react';
import Link from 'next/link';
import { ListItem, Text, UnorderedList, ListProps } from '@chakra-ui/react';
import { NAVBAR_DATA } from '@constants/navBarData';

const NavBar = ({ ...css }: ListProps) => {
  return (
    <UnorderedList listStyleType="none" m="0" {...css}>
      {NAVBAR_DATA.map(({ linkName, link }, idx) => (
        <ListItem
          float="left"
          mr={idx !== 4 ? '20px' : '0px'}
          key={`NAVBAR_${linkName}`}
        >
          <Link href={link}>
            <Text>{linkName}</Text>
          </Link>
        </ListItem>
      ))}
    </UnorderedList>
  );
};

export default NavBar;
