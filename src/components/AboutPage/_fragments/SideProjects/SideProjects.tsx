import { Flex, Text } from '@chakra-ui/react';
import { SIDEPROJECTLIST } from './data';
import { SideProjectItem } from './_fragments';

const SideProjects = () => {
  return (
    <Flex
      flexDir="column"
      borderBottomWidth="1px"
      borderColor="#eaeaea"
      pb="20px"
    >
      <Text textStyle="lg_bold" mb="15px">
        Side Projects
      </Text>

      {SIDEPROJECTLIST.map((item) => (
        <SideProjectItem item={item} key={item.projectName} />
      ))}
    </Flex>
  );
};

export default SideProjects;
