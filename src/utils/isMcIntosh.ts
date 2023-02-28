import {
  isMacOs,
  isIOS,
  isIOS13,
  isIPad13,
  isIPhone13,
  isIPod13,
  isSafari,
} from 'react-device-detect';

export const checkMcIntosh =
  isMacOs || isIOS || isIOS13 || isIPad13 || isIPhone13 || isIPod13 || isSafari;
