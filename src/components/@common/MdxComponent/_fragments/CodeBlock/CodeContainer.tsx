import { Box, BoxProps } from '@chakra-ui/react';

function CodeContainer(props: BoxProps) {
  return (
    <Box
      rounded="8px"
      my="10px"
      bg="#011627"
      sx={{ '& > div': { paddingBlock: '5', paddingEnd: '4' } }}
      {...props}
    />
  );
}

export default CodeContainer;
