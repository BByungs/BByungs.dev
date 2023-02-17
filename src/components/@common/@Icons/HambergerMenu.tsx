import { Icon, IconProps } from '@chakra-ui/react';

const HambergerMenu = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path
        d="M19.5 5H4.5C3.67157 5 3 5.67157 3 6.5C3 7.32843 3.67157 8 4.5 8H19.5C20.3284 8 21 7.32843 21 6.5C21 5.67157 20.3284 5 19.5 5Z"
        fill="currentColor"
      />
      <path
        d="M19.5 17H4.5C3.67157 17 3 17.6716 3 18.5C3 19.3284 3.67157 20 4.5 20H19.5C20.3284 20 21 19.3284 21 18.5C21 17.6716 20.3284 17 19.5 17Z"
        fill="currentColor"
      />
      <path
        d="M19.5 11H4.5C3.67157 11 3 11.6716 3 12.5C3 13.3284 3.67157 14 4.5 14H19.5C20.3284 14 21 13.3284 21 12.5C21 11.6716 20.3284 11 19.5 11Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default HambergerMenu;
