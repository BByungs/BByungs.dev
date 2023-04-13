import { Flex, Text } from '@chakra-ui/react';
import { PROJECTLIST } from './data';
import { ProjectItem } from './_fragments';

const Projects = () => {
  return (
    <Flex
      flexDir="column"
      borderBottomWidth="1px"
      borderColor="#eaeaea"
      pb="30px"
    >
      <Text textStyle="lg_bold" mb="15px">
        Projects
      </Text>

      <Flex flexDir="column" rowGap="20px">
        {PROJECTLIST.map((item) => (
          <ProjectItem item={item} key={item.projectName} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Projects;
