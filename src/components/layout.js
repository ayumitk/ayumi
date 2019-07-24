import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';
import Header from './Header';
import Footer from './Footer';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <div>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </>
    );
  }
}

export default Layout;
