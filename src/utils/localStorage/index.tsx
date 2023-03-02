const setLocalStorage = <T extends unknown>(key: string, value: T) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorageItem = (key: string) => {
  if (typeof window === 'undefined') return null;
  const getItem = localStorage.getItem(key);
  return getItem ? JSON.parse(getItem) : null;
};

const removeLocalStorageItem = (key: string) => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(key);
};

/**
 * @description 비교 할 대상이 string 타입일때만 비교
 */
const compareLocalStorageItem = <T extends unknown>(
  currentValue: T,
  checkKey: string
) => {
  if (typeof currentValue === 'object') return false;
  const getItem = getLocalStorageItem(checkKey);
  return getItem ? getItem === currentValue : false;
};

export {
  setLocalStorage,
  getLocalStorageItem,
  removeLocalStorageItem,
  compareLocalStorageItem,
};
