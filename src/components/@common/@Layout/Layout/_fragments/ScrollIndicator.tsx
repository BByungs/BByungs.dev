import { Box, BoxProps } from '@chakra-ui/react';
import useScrollIndicator from '@hooks/useScrollIndicator';

const ScrollIndicator = () => {
  const { scrollRatio } = useScrollIndicator();
  return (
    <>
      <Box
        h="66px"
        bgColor="transparent"
        borderBottomWidth="6px"
        borderColor="teal.500"
        w={`${scrollRatio}%`}
        pos="absolute"
        sx={{
          transform: 'translate3d(0,0,0)',
          '-webkit-transform': 'translateZ(0)',
          '-webkit-overflow-scrolling': 'touch',
        }}
      />
      <style global jsx>{`
        body {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
          transform: translate3d(0, 0, 0) !important;
          -webkit-transform: translateZ(0) !important;
          -webkit-overflow-scrolling: 'touch' !important;
        }
        body::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera*/
        }
      `}</style>
    </>
  );
};

export default ScrollIndicator;
