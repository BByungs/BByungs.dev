import { useState, useEffect } from 'react';

const useScrollIndicator = () => {
  const [scrollRatio, setScrollRatio] = useState<number>(0);

  useEffect(() => {
    const scrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollRatio(scrolled);
    };

    window.addEventListener('scroll', scrollProgress);
    return () => window.removeEventListener('scroll', scrollProgress);
  }, []);

  return { scrollRatio };
};

export default useScrollIndicator;
