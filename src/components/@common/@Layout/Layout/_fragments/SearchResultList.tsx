import React, { useCallback } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  Divider,
  Flex,
  ListIcon,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

import { allDocuments, DocumentTypes } from 'contentlayer/generated';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import ModalItemWrapper from './ModalItemWrapper';

const SearchResultList = ({ inputValue }: { inputValue: string }) => {
  const { asPath } = useRouter();
  /**
   * @Description 해당페이지를 제외하고, 제목과 아티클 내용 둘 중 하나라도 같은 키워드가 있으면
   * 검색되게 구현함(비교는 모든 문자열과 비교 키워드를 소문자로 변환 후 했음, 그리고 3글자 이상 검색해야 결과 나오게 구현함)
   */
  const filterCallback = useCallback(
    ({ title, body: { raw }, type, slug }: DocumentTypes) => {
      if (inputValue.length < 3) return false;

      return (
        (title.toLowerCase().includes(inputValue.toLowerCase()) ||
          raw.toLowerCase().includes(inputValue.toLowerCase())) &&
        asPath !== `/${type.toLowerCase()}/${slug}`
      );
    },
    [inputValue, asPath],
  );

  const findResults = allDocuments.filter(filterCallback);
  const typeList = Array.from(new Set(findResults.flatMap(({ type }) => type)));
  return (
    <React.Fragment>
      {typeList.length > 0 && (
        <Flex flexDir="column">
          <ModalItemWrapper title="Results">
            <UnorderedList
              spacing="10px"
              listStylePos="outside"
              listStyleType="none"
            >
              {typeList.map((type) => (
                <ListItem flexDir="column" key={type}>
                  <Text color="gray.500" textStyle="sm" mb="5px">
                    {type}
                  </Text>
                  <UnorderedList spacing="10px" listStyleType="none" ml="14px">
                    {findResults
                      .filter((item) => item.type === type)
                      .map((item) => (
                        <ListItem
                          key={`${type}_${item.title}_${item.description}`}
                          alignItems="center"
                        >
                          <Link
                            href={`/${item.type.toLowerCase()}/${item.slug}`}
                          >
                            <Flex alignItems="center">
                              <ListIcon
                                as={ArrowForwardIcon}
                                color="gray.500"
                                boxSize="12px"
                              />
                              <Text
                                color="black"
                                textStyle="sm"
                                fontWeight="500"
                              >
                                {item.title}
                              </Text>
                            </Flex>
                          </Link>
                        </ListItem>
                      ))}
                  </UnorderedList>
                </ListItem>
              ))}
            </UnorderedList>
          </ModalItemWrapper>
          <Divider
            w="100%"
            borderBottomWidth="2px"
            borderColor="#eaeaea"
            my="15px"
          />
        </Flex>
      )}
    </React.Fragment>
  );
};

export default SearchResultList;
