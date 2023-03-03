import React from 'react';
import { Button, ButtonProps, Link } from '@chakra-ui/react';

const ContactLink = ({ link, icon, ...css }: ContactLink & ButtonProps) => {
  return (
    <Link href={link} isExternal>
      <Button variant="unstyled" aria-label="github-link-btn" {...css}>
        {icon}
      </Button>
    </Link>
  );
};

export default ContactLink;
