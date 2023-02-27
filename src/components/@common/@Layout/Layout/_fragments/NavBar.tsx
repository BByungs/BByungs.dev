import React from 'react';
import Link from 'next/link';
import { ListItem, Text, UnorderedList, useColorMode } from '@chakra-ui/react';
import { NAVBAR_DATA } from '@constants/navBarData';
import { useRouter } from 'next/router';

const NavBar = () => {
  const { pathname } = useRouter();
  const { colorMode } = useColorMode();

  return (
    <UnorderedList listStyleType="none" m="0">
      {NAVBAR_DATA.map(({ linkName, link }, idx, allArr) => {
        const isLastIdx = idx === allArr.length - 1;
        return (
          <ListItem
            float="left"
            key={`NAVBAR_${linkName}`}
            mr={isLastIdx ? '0px' : '20px'}
          >
            <Link href={link}>
              <Text
                fontWeight="bold"
                color={
                  pathname === link
                    ? 'teal.500'
                    : colorMode === 'light'
                    ? 'black'
                    : 'white'
                }
              >
                {linkName}
              </Text>
            </Link>
          </ListItem>
        );
      })}
    </UnorderedList>
  );
};

export default NavBar;
