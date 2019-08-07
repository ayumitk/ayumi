import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "nsjp";
    font-style: normal;
    font-weight: 400;
    src: url("/font/nsjpdl.woff") format("woff");
    font-display: swap;
  }

  @font-face {
    font-family: "nsjp";
    font-style: normal;
    font-weight: 700;
    src: url("/font/nsjpb.woff") format("woff");
    font-display: swap;
  }

  @font-face {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 400;
    src: url("/font/Gilroy-Light.woff") format("woff");
    font-display: swap;
  }

  @font-face {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 700;
    src: url("/font/Gilroy-ExtraBold.woff") format("woff");
    font-display: swap;
  }

  html{
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.8rem;
    line-height: 1.6;
    color: #606060;
    /* font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "nsjp", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; */
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "nsjp", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 400;
    background: #f8f8f8;
  }

  ul, ol{
    list-style: none;
  }

  p, ul, ol, li{
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6{
    line-height: 1.25;
    margin: 0;
    padding: 0;
    font-weight: 700;
    color: ${theme.color.black};
    font-family: 'Gilroy', "nsjp", sans-serif;
  }

  h1{
    font-size: 4rem;
    @media (max-width: 991.98px) {
      font-size: 3rem;
    }
    @media (max-width: 565.98px) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 2.8rem;
  }
  h3 {
    font-size: 2rem;
  }

  img{
    margin: 0;
  }

  a{
    /* font-family: 'Libre Baskerville', "nsjp", serif; */
    /* text-decoration: underline; */
    color: ${theme.color.black};
    /* font-style: italic; */
    box-shadow: none;
    &:hover{
      /* background: ${theme.color.pink}; */
      text-decoration: underline;
    }
  }

  table, th, td, blockquote{
    font-size: 1.8rem;
    line-height: 1.6;
  }

  button, input, textarea{
    line-height: 1.6;
    font-size: 1.8rem;
    font-weight: 400;
  }

  button{
    cursor: pointer;
    text-align: center;
    border:0;
  }

  svg{
    width: 2rem;
    height: 2rem;
  }
`;

export default GlobalStyle;
