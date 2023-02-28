import { RxHamburgerMenu } from 'react-icons/rx';
import React, { useCallback } from 'react';
import NavList from './NavList';
import { Button, Icon, useDisclosure } from '@chakra-ui/react';
import MobileMenuDrawer from './MobileMenuDrawer';

const NavBar = () => {
  const {
    isOpen: isDrawerOpen,
    onOpen: openDrawer,
    onClose: closeDrawer,
  } = useDisclosure();

  const handleMenuButton = useCallback(() => {
    if (isDrawerOpen) {
      closeDrawer();
      return;
    }
    openDrawer();
  }, [closeDrawer, isDrawerOpen, openDrawer]);

  return (
    <React.Fragment>
      {/* PC Only */}
      <NavList display={{ base: 'none', mobile: 'list-item' }} />
      {/* Mobile Only */}
      <Button
        type="button"
        boxSize="26px"
        variant="unstyled"
        aria-label="menu-btn"
        minW="26px"
        onClick={handleMenuButton}
        display={{ base: 'block', mobile: 'none' }}
      >
        <Icon
          boxSize="26px"
          as={RxHamburgerMenu}
          display={{ base: 'block', mobile: 'none' }}
        />
      </Button>
      <MobileMenuDrawer handleClose={closeDrawer} isDrawerOpen={isDrawerOpen} />
    </React.Fragment>
  );
};

export default NavBar;
