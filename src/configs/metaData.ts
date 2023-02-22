export const METADATA: MetaDataType = {
  url: 'https://devahn.vercel.app/',
  title: `Home | BByungs.dev`,
  author: 'ByungJin Ahn',
  description: `Dev Ahn's Blog`,
  email: 'byungjin0120@gmail.com',
  github: 'BByungs',
  thumbnailUrl:
    'https://user-images.githubusercontent.com/81910935/220374865-f170d3b5-89e1-453b-a6b2-32835bafeb8c.jpeg',
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
