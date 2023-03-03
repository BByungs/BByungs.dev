import { Flex } from '@chakra-ui/react';
import GithubIcon from '@components/@common/@Icons/GithubIcon';
import MailIcon from '@components/@common/@Icons/MailIcon';
import { METADATA } from '@configs/metaData';
import React from 'react';
import ContactLink from './ContactLink';

const contactLinkList: ContactLink[] = [
  {
    link: `https://github.com/${METADATA.github}`,
    icon: <GithubIcon w="100%" h="100%" />,
  },
  {
    link: `mailto:${METADATA.email}`,
    icon: <MailIcon w="100%" h="100%" />,
  },
];

const ContactLinkList = () => {
  return (
    <Flex columnGap="5px" alignItems="center">
      {contactLinkList.map(({ link, icon }, idx) => (
        <ContactLink
          key={`link:${link}`}
          link={link}
          icon={icon}
          boxSize={idx === 0 ? '24px' : '30px'}
          minW={idx === 0 ? '24px' : '30px'}
          mt={idx === 0 ? '0px' : '4px'}
        />
      ))}
    </Flex>
  );
};

export default ContactLinkList;
