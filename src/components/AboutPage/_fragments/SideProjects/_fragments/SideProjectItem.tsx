import React from 'react';

import { Flex, Text } from '@chakra-ui/react';
import { SideProjectType } from '../data';

import DetailDesc from './DetailDesc';
import ProjectName from './ProjectName';

const SideProjectItem = ({ item }: { item: SideProjectType }) => {
  const { projectName, projectLink, description, useTechStack, detailDesc } =
    item;
  return (
    <Flex flexDir="column">
      <ProjectName
        projectLink={projectLink}
        projectName={projectName}
        useTechStack={useTechStack}
      />
      <Text textStyle="smlg_bold" mb="5px">
        {description}
      </Text>
      <DetailDesc detailDesc={detailDesc} projectName={projectName} />
    </Flex>
  );
};

export default React.memo(SideProjectItem);
