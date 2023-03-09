import React from 'react';
import { Flex, Link, Text } from '@chakra-ui/react';
import { SideProjectType } from '../data';

const ProjectName = ({
  projectLink,
  projectName,
  useTechStack,
}: Omit<SideProjectType, 'detailDesc' | 'description'>) => {
  return (
    <Flex flexDir="column" rowGap="5px" mb="15px">
      <Link href={projectLink} isExternal>
        <Flex alignItems="center" columnGap="5px">
          <Text textStyle="sm" color="teal.500">
            🔗
          </Text>
          <Text textStyle="md_bold" color="teal.500">
            {`${projectName}`}
          </Text>
        </Flex>
      </Link>

      <Text textStyle="sm">{useTechStack.join(' | ')}</Text>
    </Flex>
  );
};

export default ProjectName;
