import React from 'react';
import { Container, ContainerProps } from '@chakra-ui/react';
import { MainFooter, MainHeader, ScrollIndicator } from './_fragments';

export interface LayoutProps extends ContainerProps {
  header?: JSX.Element;
  footer?: JSX.Element;
  content: JSX.Element;
  isScrollIndicator?: boolean;
}

const Layout = ({
  isScrollIndicator = false,
  header = <MainHeader />,
  content,
  footer = <MainFooter />,
  ...css
}: LayoutProps) => {
  return (
    <>
      {isScrollIndicator && <ScrollIndicator />}
      {/* Header */}
      {header}
      {/* Content */}
      <Container
        {...css}
        as="main"
        mb="40px"
        minH={{ base: 'calc(100vh - 178px)', sm: 'calc(100vh - 160px)' }}
      >
        {content}
      </Container>
      {/* Footer */}
      {footer}
    </>
  );
};

export default Layout;
