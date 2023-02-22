import { Avatar, Button, Flex, FlexProps, Link, Text } from '@chakra-ui/react';
import GithubIcon from '@components/@common/@Icons/GithubIcon';
import MailIcon from '@components/@common/@Icons/MailIcon';
import React from 'react';

const UserInfo = ({ ...css }: FlexProps) => {
  return (
    <Flex {...css} gap="20px">
      {/* photo */}
      <Avatar
        boxSize="90px"
        src="https://user-images.githubusercontent.com/81910935/220374865-f170d3b5-89e1-453b-a6b2-32835bafeb8c.jpeg"
        name="user-photo"
      />

      {/* desc */}
      <Flex flexDir="column" justifyContent="space-between">
        <Flex flexDir="column">
          <Text textStyle="md_bold">ByungJin Ahn</Text>
          <Text textStyle="sm">안녕하세요 프론트엔드 개발자 안병진입니다.</Text>
        </Flex>

        {/* Links */}
        <Flex columnGap="5px" alignItems="center">
          <Link href="https://github.com/BByungs" isExternal>
            <Button
              variant="unstyled"
              boxSize="24px"
              minW="24px"
              aria-label="BByungs-github-link-btn"
            >
              <GithubIcon w="100%" h="100%" />
            </Button>
          </Link>

          <Link href="mailto:byungjin0120@gmail.com">
            <Button
              variant="unstyled"
              boxSize="30px"
              minW="30px"
              aria-label="BByungs-github-link-btn"
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
