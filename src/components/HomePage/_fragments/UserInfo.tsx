import React from 'react';
import { Flex, FlexProps, Text } from '@chakra-ui/react';
import { METADATA } from '@configs/metaData';
import ContactLinkList from './ContactLinkList';
import WrappedNextImage from '@components/@common/WrappedNextImage';

const UserInfo = ({ ...css }: FlexProps) => {
  return (
    <Flex {...css} gap="20px">
      {/* User Image */}
      <WrappedNextImage
        src={METADATA.thumbnailUrl}
        alt="user-photo"
        overflow="hidden"
        borderRadius="100%"
        width="90px"
        height="90px"
        nextImageProps={{ priority: true }}
      />
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
