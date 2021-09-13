import { GlobalStyle } from './layout.style';
import Header from '../header/header.component';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
    </>
  );
};

export default Layout;
