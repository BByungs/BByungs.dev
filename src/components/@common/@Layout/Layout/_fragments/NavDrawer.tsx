import React, { useMemo } from 'react';
import {
  Button,
  ButtonProps,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  ListItem,
  Text,
  UnorderedList,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import { ArrowLeftIcon, HambergerMenu } from '@components/@common/@Icons';
import { NAVBAR_DATA } from '@constants/navBarData';
import Link from 'next/link';

const NavDrawer = ({ ...css }: ButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightMode = useMemo(() => {
    return colorMode === 'light';
  }, [colorMode]);

  return (
    <React.Fragment>
      <Button variant="unstyled" onClick={onOpen} {...css}>
        <HambergerMenu
          boxSize="30px"
          color={isLightMode ? 'gray.800' : 'white'}
        />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth="1px"
            display="flex"
            h="66px"
            alignItems="center"
            justifyContent="space-between"
          >
            {/* CLOSE MENU BUTTON */}
            <Button variant="unstyled" onClick={onClose}>
              <ArrowLeftIcon
                boxSize="30px"
                color={isLightMode ? 'gray.800' : 'white'}
              />
            </Button>

            {/* COLOR MODE BUTTON */}
            <Button
              onClick={toggleColorMode}
              variant="unstyled"
              boxSize="30px"
              minW="30px !important"
            >
              <Image
                src={`/icons/${isLightMode ? 'sun' : 'moon'}.png`}
                alt="asdasd"
                boxSize="30px"
              />
            </Button>
          </DrawerHeader>
          <DrawerBody p="20px 40px">
            <UnorderedList listStyleType="none" m="0">
              {NAVBAR_DATA.map(({ linkName, link }, idx) => (
                <ListItem
                  mb={idx !== 4 ? '20px' : '0px'}
                  key={`NAVBAR_${linkName}`}
                >
                  <Link href={link}>
                    <Text>{linkName}</Text>
                  </Link>
                </ListItem>
              ))}
            </UnorderedList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  );
};

export default NavDrawer;
