import React from 'react';
import { UnorderedList } from '@chakra-ui/react';
import { NAVBAR_DATA } from '@constants/navBarData';
import NavItem from './NavItem';

const NavBar = () => {
  return (
    <UnorderedList listStyleType="none" m="0">
      {NAVBAR_DATA.map(({ linkName, link }, idx, allArr) => {
        const isLastIdx = idx === allArr.length - 1;
        return (
          <NavItem
            key={`NAVBAR_${linkName}`}
            linkName={linkName}
            link={link}
            mr={isLastIdx ? '0px' : '20px'}
          />
        );
      })}
    </UnorderedList>
  );
};

export default NavBar;
