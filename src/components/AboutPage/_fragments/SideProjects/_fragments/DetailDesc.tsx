import { ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import { SideProjectType } from '../data';

const DetailDesc = ({
  detailDesc,
  projectName,
}: Pick<SideProjectType, 'detailDesc' | 'projectName'>) => {
  return (
    <UnorderedList listStyleType="none" ml="10px" spacing="5px">
      {detailDesc.map((desc) => (
        <ListItem
          textStyle="smlg"
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
