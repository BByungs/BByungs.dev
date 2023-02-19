import React from 'react';
import { Container, ContainerProps } from '@chakra-ui/react';
import { MainHeader } from './_fragments';

export interface LayoutProps extends ContainerProps {
  header?: JSX.Element;
  footer?: JSX.Element;
  content: JSX.Element;
}

const Layout = ({
  header = <MainHeader />,
  content,
  footer,
  ...css
}: LayoutProps) => {
  return (
    <React.Fragment>
      {/* Header */}
      {header}
      {/* Content */}
      <Container {...css} as="main">
        {content}
      </Container>
      {/* Footer */}
      {footer}
    </React.Fragment>
  );
};

export default Layout;
