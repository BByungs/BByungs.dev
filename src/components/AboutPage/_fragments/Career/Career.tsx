import { Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';

const Career = () => {
  return (
    <Flex
      flexDir="column"
      borderBottomWidth="1px"
      borderColor="#eaeaea"
      pb="30px"
    >
      <Text textStyle="lg_bold" mb="15px">
        Career
      </Text>

      <Flex flexDir="column" rowGap="20px">
        <Flex columnGap="20px" alignItems="center">
          {/* Left */}
          <Flex flexDir="column">
            <Text textStyle="sm_bold">똑똑한 개발자</Text>
            <Flex textStyle="smlg_bold" columnGap="10px">
              <Text>2022.08.24</Text>
              <Text>~</Text>
            </Flex>
          </Flex>

          {/* Right */}
          <Flex flexDir="column">
            <Text textStyle="sm_bold" mb="15px">
              똑똑한 개발자에서 프론트엔드 개발을 맡고 있습니다.
            </Text>

            <UnorderedList
              listStyleType="disc"
              textStyle="sm"
              listStylePos="inside"
              spacing="5px"
            >
              <ListItem>
                놀면서 배우는 심리학 1차 개발 (2022.08 ~ 2023.02)
              </ListItem>
              <ListItem>
                아시아나 IDT 항공 플랫폼 APP (2023.03 ~ 2023.04)
              </ListItem>
              <ListItem>놀면서 배우는 심리학 2차 개발 (2022.04 ~ )</ListItem>
              <ListItem>남서울 대학교 N-MOOC (2022.04 ~ )</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Career;
