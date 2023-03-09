import React from 'react';

import { Flex, Text } from '@chakra-ui/react';

import DetailDesc from './DetailDesc';
import ProjectName from './ProjectName';

const ProjectItem = ({ item }: { item: ProjectType }) => {
  const { projectName, projectLink, description, techStackList, detailDesc } =
    item;
  return (
    <Flex flexDir="column">
      <ProjectName
        projectLink={projectLink}
        projectName={projectName}
        techStackList={techStackList}
      />
      <Text textStyle="smlg_bold" mb="5px">
        {description}
      </Text>
      <DetailDesc detailDesc={detailDesc} projectName={projectName} />
    </Flex>
  );
};

export default React.memo(ProjectItem);
