import React, { useCallback } from 'react';
import { allDocuments, DocumentTypes } from 'contentlayer/generated';
import { Button, Divider, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SearchResultList = ({ inputValue }: { inputValue: string }) => {
  const { asPath } = useRouter();
  /**
   * @Description 제목과 내용중에 입력한 값이 있다면 검색에 걸리게 세팅하였습니다.
   */
  const filterCallback = useCallback(
    ({ title, body: { raw }, type, slug }: DocumentTypes) => {
      if (!inputValue) return false;

      return (
        (title.includes(inputValue) || raw.includes(inputValue)) &&
        asPath !== `/${type.toLowerCase()}/${slug}`
      );
    },
    [inputValue, asPath]
  );

  const findResults = allDocuments.filter(filterCallback);
  const typeList = Array.from(new Set(findResults.flatMap(({ type }) => type)));
  return (
    <>
      {typeList.length > 0 && (
        <Flex flexDir="column">
          <Flex flexDir="column" px="20px">
            <Text color="gray.500" mb="10px" textStyle="sm">
              Results
            </Text>

            {typeList.map((type, idx, allArr) => {
              const isLastIdx = idx === allArr.length - 1;
              return (
                <Flex
                  flexDir="column"
                  key={type}
                  mb={isLastIdx ? '0px' : '10px'}
                  pl="20px"
                >
                  <Text color="black" textStyle="sm_bold">
                    {type}
                  </Text>
                  <Flex flexDir="column" pl="20px" rowGap="10px">
                    {findResults
                      .filter((item) => item.type === type)
                      .map((item) => (
                        <Link
                          key={`${type}_${item.title}_${item.description}`}
                          href={`/${item.type.toLowerCase()}/${item.slug}`}
                        >
                          <Text color="black" float="left">
                            {item.title}
                          </Text>
                        </Link>
                      ))}
                  </Flex>
                </Flex>
              );
            })}
          </Flex>
          <Divider
            w="100%"
            borderBottomWidth="2px"
            borderColor="#eaeaea"
            my="15px"
          />
        </Flex>
      )}
    </>
  );
};

export default SearchResultList;
