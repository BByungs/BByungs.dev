import React from 'react';
import { ChakraProps, UnorderedList, useColorMode } from '@chakra-ui/react';
import { NAVBAR_DATA } from '@constants/navBarData';
import { useRouter } from 'next/router';
import NavItem from './NavItem';

interface NavListProps extends ChakraProps {
  isMobile?: boolean;
}

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

const NavList = ({ isMobile = false, ...css }: NavListProps) => {
  const { pathname } = useRouter();
  const { colorMode } = useColorMode();

  return (
    <UnorderedList listStyleType="none" m="0" {...css}>
      {NAVBAR_DATA.map(({ linkName, link }, idx, allArr) => {
        const isLastIdx = idx === allArr.length - 1;
        return (
          <NavItem
            key={`NAVBAR_${linkName}`}
            mr={isMobile ? '0px' : isLastIdx ? '0px' : '20px'}
            mb={isMobile ? (isLastIdx ? '0px' : '15px') : '0px'}
            borderBottomWidth={isMobile ? '2px' : '0px'}
            borderColor={isMobile ? '#eaeaea' : 'unset'}
            pb={isMobile ? '10px' : '0px'}
            linkName={linkName}
            link={link}
            float={isMobile ? 'unset' : 'left'}
            textStyle={isMobile ? 'md_bold' : 'smlg_bold'}
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

export default NavList;
