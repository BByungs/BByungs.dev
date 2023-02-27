import { Button } from '@chakra-ui/react';
import React from 'react';

interface TagButtonProps {
  handleTag: (tag: string) => void;
  tag: string;
  selectTag: string;
}

const TagButton = ({ handleTag, tag, selectTag }: TagButtonProps) => {
  return (
    <Button
      bgColor="#eaeaea"
      p="0px 5px"
      maxH="30px"
      color={tag === selectTag ? 'teal.500' : 'black'}
      onClick={() => handleTag(tag)}
      textStyle="sm_bold"
      aria-label={`${tag}Tag-filter-btn`}
    >
      {tag}
    </Button>
  );
};

export default React.memo(TagButton);
