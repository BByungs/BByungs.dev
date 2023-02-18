import { Container, ContainerProps } from '@chakra-ui/react';
import ColorModeButton from '@components/@common/ColorModeButton';
import React from 'react';
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
      {/* header */}
      {header}
      {/* content */}
      <Container {...css}>{content}</Container>
      {/* footer */}
      {footer}

      <ColorModeButton />
    </React.Fragment>
  );
};

export default Layout;
