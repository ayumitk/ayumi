import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';
import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }

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
