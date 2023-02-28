import React from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { RxHamburgerMenu } from 'react-icons/rx';
import SearchButton from './SearchButton';
import ColorModeButton from './ColorModeButton';
import NavList from './NavList';

interface MobileMenuDrawerProps {
  isDrawerOpen: boolean;
  handleClose: () => void;
}

const MobileMenuDrawer = ({
  handleClose,
  isDrawerOpen,
}: MobileMenuDrawerProps) => {
  return (
    <Drawer
      placement="left"
      onClose={handleClose}
      isOpen={isDrawerOpen}
      size="full"
    >
      <DrawerOverlay />
      <DrawerContent w="100%">
        <DrawerHeader
          w="100%"
          h="66px"
          px="20px"
          display="flex"
          justifyContent="space-between"
        >
          <Button
            type="button"
            boxSize="26px"
            variant="unstyled"
            aria-label="menu-btn"
            minW="26px"
            onClick={handleClose}
            display={{ base: 'block', mobile: 'none' }}
            mt="5px"
          >
            <Icon
              boxSize="26px"
              mb="3px"
              as={RxHamburgerMenu}
              display={{ base: 'block', mobile: 'none' }}
            />
          </Button>
          <Flex alignItems="center" columnGap="10px" mt="5px">
            <SearchButton />
            <ColorModeButton />
          </Flex>
        </DrawerHeader>
        <DrawerBody>
          <NavList isMobile />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileMenuDrawer;
