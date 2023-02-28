import React from 'react';
import { Button, Flex, Link, chakra as Chakra } from '@chakra-ui/react';
import GithubIcon from '@components/@common/@Icons/GithubIcon';
import MailIcon from '@components/@common/@Icons/MailIcon';
import { METADATA } from '@configs/metaData';
import { maxWidth } from '@constants/maxWidth';

const MainFooter = () => {
  return (
    <Flex w="100%" as="footer" h={{ base: '112px', sm: '94px' }}>
      <Flex
        borderTopWidth="2px"
        borderColor="#eaeaea"
        w={maxWidth}
        p="15px 20px"
        mx="auto"
        h="inherit"
        flexDir="column"
        rowGap="10px"
      >
        {/* Links */}
        <Flex columnGap="10px" alignItems="center" justifyContent="flex-end">
          {/* Github */}
          <Link href={`https://github.com/${METADATA.github}`} isExternal>
            <Button
              variant="unstyled"
              boxSize="24px"
              minW="24px"
              aria-label="github-link-btn"
            >
              <GithubIcon w="100%" h="100%" />
            </Button>
          </Link>
          {/* Mail */}
          <Link href={`mailto:${METADATA.email}`}>
            <Button
              variant="unstyled"
              boxSize="30px"
              minW="30px"
              aria-label="email-link-btn"
              mt="4px"
            >
              <MailIcon w="100%" h="100%" />
            </Button>
          </Link>
        </Flex>

        <Flex justifyContent="flex-end" flexDir={{ base: 'column', sm: 'row' }}>
          <Flex textStyle="sm" justifyContent="flex-end">
            <Chakra.span mr="3px">{`Copyright © 2023`}</Chakra.span>
            <Link
              href={METADATA.url}
              isExternal
              mr={{ base: '0px', sm: '3px' }}
            >
              <Chakra.span color="gray.500">{`${METADATA.github} Blog`}</Chakra.span>
            </Link>
          </Flex>
          <Flex textStyle="sm" justifyContent="flex-end">
            <Chakra.span mr="3px">Powered by</Chakra.span>
            <Link href="https://nextjs.org/" isExternal>
              <Chakra.span color="gray.500">{`Next.js`}</Chakra.span>
            </Link>
            <Chakra.span mr="3px">{`, `}</Chakra.span>
            <Link href="https://chakra-ui.com/" isExternal>
              <Chakra.span color="gray.500">{`Chakra ui`}</Chakra.span>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MainFooter;
