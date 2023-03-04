/**
 * @param func Function to run after set milliseconds
 * @param ms delay(unit : milliseconds)
 */
export const debounce = <F extends (...args: any[]) => any>(
  func: F,
  ms: number,
) => {
  let timeoutId: NodeJS.Timeout | null = null;
  const _debounce = (...args: Parameters<F>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    timeoutId = setTimeout(() => func(...args), ms);
  };

  return _debounce as (...args: Parameters<F>) => ReturnType<F>;
};
