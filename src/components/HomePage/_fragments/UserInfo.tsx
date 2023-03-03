import React from 'react';
import { Flex, FlexProps, Text } from '@chakra-ui/react';
import { METADATA } from '@configs/metaData';
import UserImage from './UserImage';
import ContactLinkList from './ContactLinkList';

const UserInfo = ({ ...css }: FlexProps) => {
  return (
    <Flex {...css} gap="20px">
      {/* Avatar */}
      <UserImage src={METADATA.thumbnailUrl} />
      {/* Description */}
      <Flex flexDir="column" justifyContent="space-between">
        <Flex flexDir="column">
          <Text textStyle="md_bold">{METADATA.author}</Text>
          <Text textStyle="sm">안녕하세요 프론트엔드 개발자 안병진입니다.</Text>
        </Flex>
        {/* Links */}
        <ContactLinkList />
      </Flex>
    </Flex>
  );
};

export default UserInfo;
