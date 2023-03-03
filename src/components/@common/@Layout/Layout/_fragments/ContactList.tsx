import { Divider, Flex, Link, Text } from '@chakra-ui/react';
import GithubIcon from '@components/@common/@Icons/GithubIcon';
import GmailIcon from '@components/@common/@Icons/GmailIcon';
import { METADATA } from '@configs/metaData';
import React from 'react';
import ContactItem from './ContactItem';
import ModalItemWrapper from './ModalItemWrapper';

const contactList: ContactItem[] = [
  {
    link: `https://github.com/${METADATA.github}`,
    icon: <GithubIcon boxSize="20px" color="black" />,
    title: 'GitHub',
    desc: `github.com/${METADATA.github}`,
  },
  {
    link: `mailto:${METADATA.email}`,
    icon: <GmailIcon boxSize="20px" />,
    title: 'Gmail',
    desc: METADATA.email,
  },
];

const ContactList = () => {
  return (
    <Flex flexDir="column">
      <ModalItemWrapper title="Contact">
        {contactList.map(({ link, icon, title, desc }) => (
          <ContactItem
            key={`${title}_${desc}`}
            link={link}
            icon={icon}
            title={title}
            desc={desc}
          />
        ))}
      </ModalItemWrapper>
      <Divider
        w="100%"
        borderBottomWidth="2px"
        borderColor="#eaeaea"
        my="15px"
      />
    </Flex>
  );
};

export default ContactList;
