import { Flex, FlexProps } from '@chakra-ui/react';
import React from 'react';
import TagButton from './TagButton';

interface TagListProps extends FlexProps {
  tagList: string[];
  selectTag: string;
  handleTag: (tag: string) => void;
}
const TagList = ({ tagList, handleTag, selectTag, ...css }: TagListProps) => {
  return (
    <Flex gap="10px" flexWrap="wrap" {...css}>
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
