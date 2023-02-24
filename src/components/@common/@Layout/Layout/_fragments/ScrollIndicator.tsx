import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';

const ScrollIndicator = () => {
  const [width, setWidth] = useState(0);

  const scrollHeight = () => {
    const element = document.documentElement;
    const ScrollTop = element.scrollTop || document.body.scrollTop;
    const ScrollHeight = element.scrollHeight >= 0 ? element.scrollHeight : 0;

    const percent = (ScrollTop / (ScrollHeight - element.clientHeight)) * 100;

    setWidth(percent);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHeight);
    return () => window.removeEventListener('scroll', scrollHeight);
  }, []);
  return (
    <React.Fragment>
      <Box
        borderBottomWidth="6px"
        borderColor="teal.500"
        w={`${width}%`}
        pos="sticky"
        top="0"
        zIndex="sticky"
      />
      <style global jsx>{`
        body {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        body::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera*/
        }
      `}</style>
    </React.Fragment>
  );
};

export default ScrollIndicator;
