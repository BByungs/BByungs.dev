import utc from 'dayjs/plugin/utc';

import dayjs from 'dayjs';

/**
 * @docs UTC Date형식으로 리턴해주는 함수입니다.
 * @example getUtcDate(new Date()) =>  "2023-02-21T02:20:45.000Z"
 */
export const getUtcDate = (date: Date) => {
  dayjs.extend(utc);
  return dayjs(date).utc().format();
};
