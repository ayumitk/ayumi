import React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';
import Header from './Header';

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <div>
            <Header />
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </div>
        </ThemeProvider>
      </div>
    )
  }
}

export default Layout
