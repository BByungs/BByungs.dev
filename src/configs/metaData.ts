export const METADATA: MetaDataType = {
  url: 'https://devahn.vercel.app/',
  title: `Home - BByungs.dev`,
  author: 'ByungJin Ahn',
  description: `Dev Ahn's Blog`,
  email: 'byungjin0120@gmail.com',
  github: 'BByungs',
  thumbnailUrl: '/images/my-photo.jpeg',
  date: '',
  tags: [],
};

export type MetaDataType = {
  url: string;
  title: string;
  author: string;
  description: string;
  email: string;
  github: string;
  date: string;
  thumbnailUrl: string;
  tags: string[];
};
