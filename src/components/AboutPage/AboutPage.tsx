import React from 'react';
import { METADATA } from '@configs/metaData';
import NextSeoWrapper from '@components/@common/NextSeoWrapper';

import { Flex } from '@chakra-ui/react';

import { Career, Education, Introduction, Projects } from './_fragments';

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
        rowGap="30px"
      >
        <Introduction />
        <Projects />
        <Career />
        <Education />
      </Flex>
    </NextSeoWrapper>
  );
};

export default AboutPage;
