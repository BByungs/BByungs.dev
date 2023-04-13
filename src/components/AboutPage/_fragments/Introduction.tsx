import { Flex, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import WrappedNextImage from '@components/@common/WrappedNextImage';
import { METADATA } from '@configs/metaData';
import React from 'react';

const contactList = [
  {
    label: 'Email : ',
    link: `mailto:${METADATA.email}`,
    linkLabel: METADATA.email,
  },
  {
    label: 'GitHub : ',
    link: `https://github.com/${METADATA.github}`,
    linkLabel: `github.com/${METADATA.github}`,
  },
];

const Introduction = () => {
  return (
    <Flex
      flexDir="column"
      borderBottomWidth="1px"
      borderColor="#eaeaea"
      pb="30px"
    >
      <Flex columnGap="30px">
        <WrappedNextImage
          src={METADATA.thumbnailUrl}
          alt="my_image"
          width="100px"
          height="100px"
          borderRadius="100%"
          overflow="hidden"
          minW="100px"
        />
        <Flex flexDir="column">
          <Text textStyle="xl_bold">안병진</Text>
          <Text textStyle="sm" mb="5px">
            Frontend Developer
          </Text>

          <UnorderedList mb="20px" textStyle="sm" listStyleType="circle">
            {contactList.map(({ label, link, linkLabel }) => (
              <ListItem key={`link:${link}`}>
                <Flex alignItems="center" flexWrap="wrap">
                  <Text mr="3px" textStyle="sm_bold">
                    {label}
                  </Text>
                  <Link href={link} isExternal>
                    <Text color="gray.500" textStyle="sm">
                      {linkLabel}
                    </Text>
                  </Link>
                </Flex>
              </ListItem>
            ))}
          </UnorderedList>
        </Flex>
      </Flex>

      <Flex flexWrap="wrap" textStyle="sm" rowGap="2px" flexDir="column">
        <Text>스타트업에서 프론트엔드 개발을 하고 있습니다.</Text>
        <Text>
          클린코드를 지향하면서 코드 짜는걸 좋아하고, 새로운 기술 스택을
          익히는걸 좋아합니다.
        </Text>
        <Text>
          팀원과 의견을 나누고, 토론하는 것을 좋아하며 이를 통해 좋은 결과물을
          만들어내는 환경 그리고 사용자의 입장에서 생각하며,
          <br /> 제품에 애착을 가지고 기여할 수 있는 환경에서 일하고 싶습니다.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Introduction;
