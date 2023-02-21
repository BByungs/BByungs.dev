import React, { ReactNode, useMemo } from 'react';
import Head from 'next/head';
import { chakra, Flex, Text, useColorMode } from '@chakra-ui/react';
import { MetaDataType } from '@configs/metaData';
import usDateString from '@utils/date/usDateString';

interface NextSeoWrapperProps {
  metaData: MetaDataType;
  children: ReactNode;
}

const NextSeoWrapper = ({ metaData, children }: NextSeoWrapperProps) => {
  const isHome = useMemo(() => {
    return metaData.url === '/';
  }, [metaData.url]);
  const { colorMode } = useColorMode();
  // 이미지의 이름에 .이 포함되면 안된다
  const [_, ext] = metaData.thumbnailUrl.split('.');

  return (
    <React.Fragment>
      <Head>
        <meta name="description" content={metaData.description} />
        <meta property="og:site_name" content={metaData.title} />
        <meta property="og:title" content={metaData.title} />
        <title>{metaData.title}</title>
        <meta property="og:description" content={metaData.description} />
        {/* image */}
        <meta property="og:image" content={metaData.thumbnailUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content={`image/${ext}`} />
      </Head>

      <React.Fragment>
        {!isHome && (
          <Flex
            w="100%"
            justifyContent="space-between"
            alignItems="center"
            marginTop="2rem"
            flexDir={{ base: 'column', sm: 'row' }}
            borderBottomWidth="2px"
            pb="10px"
            borderColor={colorMode === 'light' ? 'gray.800' : 'white'}
          >
            <chakra.h1
              apply="mdx.h1"
              as="h1"
              fontWeight="bold"
              fontSize="1.875rem"
              marginBottom="0.25rem"
              lineHeight={1.2}
              float="left"
              w={{ base: '100%', sm: 'auto' }}
            >
              {metaData.title}
            </chakra.h1>

            <Text float="left" w={{ base: '100%', sm: 'auto' }}>
              {usDateString(metaData.date)}
            </Text>
          </Flex>
        )}

        {children}
      </React.Fragment>
    </React.Fragment>
  );
};

export default NextSeoWrapper;
