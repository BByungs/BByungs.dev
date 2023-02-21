import { getUtcDate } from './../utils/date/getUtcDate';

export const METADATA: MetaDataType = {
  url: 'https://devahn.vercel.app/',
  title: `Home | BByungs.dev`,
  author: '안병진',
  description: `Dev Ahn's Blog`,
  email: 'byungjin0120@gmail.com',
  github: 'bbyungs',
  date: getUtcDate(new Date()),
  // 기초 썸네일 url
  thumbnailUrl: '',
};

export type MetaDataType = {
  url?: string;
  title?: string;
  author?: string;
  description?: string;
  email?: string;
  github?: string;
  date: string;
  thumbnailUrl: string;
};
