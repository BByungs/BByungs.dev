/**
 * @param func Function to run after set milliseconds
 * @param ms delay(unit : milliseconds)
 */
const debounce = <F extends ParametersType>(func: F, ms: number) => {
  let timeoutId: NodeJS.Timeout | null = null;
  const _debounced = (...args: Parameters<F>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    timeoutId = setTimeout(() => func(...args), ms);
  };

  return _debounced as (...args: Parameters<F>) => ReturnType<F>;
};

/**
 * @param func Function to run after set milliseconds
 * @param ms delay(unit : milliseconds)
 */
const throttle = <F extends ParametersType>(func: F, ms: number) => {
  let timeoutId: NodeJS.Timeout | null = null;
  const _throttled = (...args: Parameters<F>) => {
    if (timeoutId) return;
    timeoutId = setTimeout(() => {
      func(...args);
      timeoutId = null;
    }, ms);
  };
  return _throttled as (...args: Parameters<F>) => ReturnType<F>;
};

export { debounce, throttle };
