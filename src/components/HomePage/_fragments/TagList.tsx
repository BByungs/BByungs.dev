import { Flex } from '@chakra-ui/react';
import React from 'react';
import TagButton from './TagButton';

interface TagListProps {
  tagList: string[];
  selectTag: string;
  handleTag: (tag: string) => void;
}
const TagList = ({ tagList, handleTag, selectTag }: TagListProps) => {
  return (
    <Flex gap="10px" flexWrap="wrap" mb="40px">
      {tagList.map((tag) => (
        <TagButton
          key={tag}
          handleTag={handleTag}
          tag={tag}
          selectTag={selectTag}
        />
      ))}
    </Flex>
  );
};

export default TagList;
