import { Container, ContainerProps } from '@chakra-ui/react';
import React from 'react';
import { MainFooter, MainHeader } from './_fragments';

export interface LayoutProps extends ContainerProps {
  header?: JSX.Element;
  footer?: JSX.Element;
  content: JSX.Element;
}

const Layout = ({
  header = <MainHeader />,
  content,
  footer = <MainFooter />,
  ...css
}: LayoutProps) => {
  return (
    <Container>
      {/* header */}
      {header}
      {/* content */}
      {content}
      {/* footer */}
      {footer}
    </Container>
  );
};

export default Layout;
