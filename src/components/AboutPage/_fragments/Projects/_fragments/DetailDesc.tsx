import { ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react';

const DetailDesc = ({
  detailDesc,
  projectName,
}: Pick<ProjectType, 'detailDesc' | 'projectName'>) => {
  return (
    <UnorderedList
      listStyleType="none"
      ml="10px"
      spacing="5px"
      listStylePos="inside"
    >
      {detailDesc.map((desc) => (
        <ListItem
          textStyle="sm"
          key={`${projectName}_${desc}`}
          _before={{ content: '"- "' }}
        >
          {desc}
        </ListItem>
      ))}
    </UnorderedList>
  );
};

export default DetailDesc;
