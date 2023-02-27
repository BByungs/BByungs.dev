import { useColorMode } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { NavItemProps } from '../_fragments/NavItem';

const useNavBarColor = ({
  linkName,
  link,
}: Pick<NavItemProps, 'linkName' | 'link'>) => {
  const { asPath } = useRouter();
  const { colorMode } = useColorMode();

  let navLinkTabColor = 'teal.500';
  const RegExpMatchList = asPath.match(/(?<=\/)(.*?)(?=\/)/g) ?? [];

  if (linkName === 'Blog') {
    if (link === asPath || RegExpMatchList[0] === 'blog') {
      navLinkTabColor = 'teal.500';
    } else {
      navLinkTabColor = colorMode === 'light' ? 'black' : 'white';
    }
  } else if (linkName === 'Snippets') {
    if (link === asPath || RegExpMatchList[0] === 'snippets') {
      navLinkTabColor = 'teal.500';
    } else {
      navLinkTabColor = colorMode === 'light' ? 'black' : 'white';
    }
  } else {
    if (link === asPath) {
      navLinkTabColor = 'teal.500';
    } else {
      navLinkTabColor = colorMode === 'light' ? 'black' : 'white';
    }
  }

  return { navLinkTabColor };
};

export default useNavBarColor;
