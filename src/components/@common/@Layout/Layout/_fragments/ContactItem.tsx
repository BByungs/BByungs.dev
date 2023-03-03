import { Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';

const ContactItem = ({ link, icon, title, desc }: ContactItem) => {
  return (
    <Link isExternal href={link}>
      <Flex columnGap="10px" alignItems="center" mb="15px">
        {icon}
        <Flex columnGap="5px">
          <Text textStyle="sm" color="black">
            {title}
          </Text>
          <Text textStyle="sm" color="gray.500">
            {desc}
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
};

export default ContactItem;
