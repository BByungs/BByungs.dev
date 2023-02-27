import React from 'react';
import { UnorderedList, useColorMode } from '@chakra-ui/react';
import { NAVBAR_DATA } from '@constants/navBarData';
import { useRouter } from 'next/router';
import NavItem from './NavItem';

const findActivePage = (pathname: string, pageName: string) => {
  const _pageName = pageName.toLowerCase();
  if (
    pathname === '/' ||
    pathname.includes('page') ||
    pathname === '/[...slug]'
  ) {
    return _pageName === 'blog';
  }
  return pathname.includes(_pageName);
};

const NavBar = () => {
  const { pathname } = useRouter();
  const { colorMode } = useColorMode();

  return (
    <UnorderedList listStyleType="none" m="0">
      {NAVBAR_DATA.map(({ linkName, link }, idx, allArr) => {
        const isLastIdx = idx === allArr.length - 1;
        return (
          <NavItem
            key={`NAVBAR_${linkName}`}
            mr={isLastIdx ? '0px' : '20px'}
            linkName={linkName}
            link={link}
            color={
              findActivePage(pathname, linkName)
                ? 'teal.500'
                : colorMode === 'light'
                ? 'black'
                : 'white'
            }
          />
        );
      })}
    </UnorderedList>
  );
};

export default NavBar;
