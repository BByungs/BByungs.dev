import React from 'react';
import { METADATA } from '@configs/metaData';
import NextSeoWrapper from '@components/@common/NextSeoWrapper';

import { Flex } from '@chakra-ui/react';

import { Introduction, Projects } from './_fragments';

const AboutPage = () => {
  const metadata = {
    ...METADATA,
    url: '/about',
    title: 'About - BByungs.dev',
    description: '개발자 안병진 About페이지',
  };

  return (
    <NextSeoWrapper metaData={metadata}>
      <Flex
        w="100%"
        border="1px solid #eaeaea"
        p="20px"
        minH={{ base: 'calc(100vh - 178px)', sm: 'calc(100vh - 160px)' }}
        flexDir="column"
        rowGap="20px"
      >
        <Introduction />
        <Projects />
      </Flex>
    </NextSeoWrapper>
  );
};

export default AboutPage;
