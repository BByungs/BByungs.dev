import React, { ReactNode, useMemo } from 'react';
import Head from 'next/head';
import { chakra, Flex, Text, useColorMode } from '@chakra-ui/react';
import { MetaDataType } from '@configs/metaData';
import dayjs from 'dayjs';

interface NextSeoWrapperProps {
  metaData: MetaDataType;
  children: ReactNode;
}

const NextSeoWrapper = ({ metaData, children }: NextSeoWrapperProps) => {
  const isHome = useMemo(() => {
    return metaData.url === '/';
  }, [metaData.url]);
  const { colorMode } = useColorMode();

  return (
    <React.Fragment>
      <Head>
        <meta name="description" content={metaData.description} />
        <meta property="og:site_name" content={metaData.title} />
        <meta property="og:title" content={metaData.title} />
        <title>{metaData.title}</title>
        <meta property="og:description" content={metaData.description} />
        {/* image */}
        <meta property="og:image" content={`/posts/${metaData.thumbnailUrl}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
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
              {dayjs(metaData.date).format('YYYY-MM-DD')}
            </Text>
          </Flex>
        )}

        {children}
      </React.Fragment>
    </React.Fragment>
  );
};

export default NextSeoWrapper;
