import { METADATA } from '@configs/metaData';

export const PROJECTLIST: ProjectType[] = [
  {
    projectName: 'Tech Blog',
    description: '개발하며 배운 것과 생각들을 기록하는 블로그',
    projectLink: METADATA.url,
    techStackList: [
      'Next.js',
      'TypeScript',
      'React',
      'Chakra-Ui',
      'Vercel',
      'Next-Contentlayer',
    ],
    detailDesc: [
      'next-contentlayer를 사용해 ',
      'Chakra-Ui를 사용해 디자인 시스템 구축, 다크모드 적용',
      'Vercel을 이용한 간편한 배포 환경 구축',
      '블로그가 검색엔진에 잘 노출 될 수 있도록 SEO 최적화',
    ],
  },
  {
    projectName: '놀면서 배우는 심리학',
    description: '누구나 사용할 수 있는 심리학 플랫폼',
    projectLink: 'https://www.nolsim.co.kr/',
    techStackList: [
      'React',
      'React-Query',
      'React-Hook-Form',
      'TypeScript',
      'Axios',
      'Next.js',
      'Redux-Toolkit',
      'Chakra-Ui',
    ],
    detailDesc: [
      'React-Hook-Form을 사용하여 form관련 페이지 코드 작성',
      '서버 데이터는 React-Query를 사용하여 핸들링.',
      'Client측 데이터는 RTK로 관리.',
      '작성중이던 포스트 임시저장 기능 구현',
    ],
  },
];
