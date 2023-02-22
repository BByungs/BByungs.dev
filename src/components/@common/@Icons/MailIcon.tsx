import { Icon, IconProps } from '@chakra-ui/react';

const MailIcon = (props: IconProps) => (
  <Icon viewBox="0 0 25 25" {...props}>
    <title />
    <path
      d="M12.69,12.06a1,1,0,0,1-1.34,0L2.87,4.35A2,2,0,0,1,4,4H20a2,2,0,0,1,1.13.35Z"
      fill="currentColor"
    />
    <path
      d="M22,6.26V17a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V6.26l8.68,7.92a2,2,0,0,0,1.32.49,2,2,0,0,0,1.33-.51Z"
      fill="currentColor"
    />
  </Icon>
);

export default MailIcon;
