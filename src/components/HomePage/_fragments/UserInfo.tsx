import React from 'react';
import { Avatar, Button, Flex, FlexProps, Link, Text } from '@chakra-ui/react';

import GithubIcon from '@components/@common/@Icons/GithubIcon';
import MailIcon from '@components/@common/@Icons/MailIcon';
import { METADATA } from '@configs/metaData';

const UserInfo = ({ ...css }: FlexProps) => {
  return (
    <Flex {...css} gap="20px">
      {/* Avatar */}
      <Avatar boxSize="90px" src={METADATA.thumbnailUrl} name="user-photo" />
      {/* Description */}
      <Flex flexDir="column" justifyContent="space-between">
        <Flex flexDir="column">
          <Text textStyle="md_bold">{METADATA.author}</Text>
          <Text textStyle="sm">안녕하세요 프론트엔드 개발자 안병진입니다.</Text>
        </Flex>

        {/* Links */}
        <Flex columnGap="5px" alignItems="center">
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
      </Flex>
    </Flex>
  );
};

export default UserInfo;
