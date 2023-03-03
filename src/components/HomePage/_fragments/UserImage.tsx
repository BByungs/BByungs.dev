import React from 'react';
import Image, { ImageProps } from 'next/image';
import { Box } from '@chakra-ui/react';

const UserImage = ({ src }: Pick<ImageProps, 'src'>) => {
  return (
    <Box borderRadius="100%" overflow="hidden" boxSize="90px" pos="relative">
      <Image fill priority src={src} alt="user-photo" objectFit="cover" />
    </Box>
  );
};

export default UserImage;
