import { useState, useEffect } from 'react';

const useScrollIndicator = () => {
  const [scrollRatio, setScrollRatio] = useState<number>(0);
  useEffect(() => {
    let timeoutId: null | ReturnType<typeof setTimeout> = null;
    const throttleTime = 15;

    const throttle = (callback: () => void, time: number) => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        callback();
        timeoutId = null;
      }, time);
    };

    const scrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollRatio(scrolled);
    };

    const scrollCallback = () => {
      throttle(scrollProgress, throttleTime);
    };

    window.addEventListener('scroll', scrollCallback);
    return () => window.removeEventListener('scroll', scrollCallback);
  }, [scrollRatio]);

  return { scrollRatio };
};

export default useScrollIndicator;
