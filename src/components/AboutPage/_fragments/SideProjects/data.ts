import { METADATA } from '@configs/metaData';

export const SIDEPROJECTLIST: SideProjectType[] = [
  {
    projectName: 'Tech Blog',
    description: '개발하며 배운 것과 생각들을 기록하는 블로그',
    projectLink: METADATA.url,
    useTechStack: [
      'Next.js',
      'TypeScript',
      'React',
      'Chakra-Ui',
      'Vercel',
      'next-contentlayer',
    ],
    detailDesc: [
      'next-contentlayer를 사용해 마크다운 HTML을 직접 디자인하여 구현',
      'Chakra-Ui를 사용해 디자인 시스템 구축, 다크모드 적용',
      'Vercel을 이용한 간편한 배포 환경 구축',
    ],
  },
];

export type SideProjectType = {
  projectName: string;
  description: string;
  projectLink: string;
  useTechStack: string[];
  detailDesc: string[];
};
