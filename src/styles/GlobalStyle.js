/* ... your other global styles can go here */
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background: #10172b;
    color: #fff;
    font-family: 'Inter', Arial, sans-serif;
    scroll-behavior: smooth;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  h1, h2, h3 {
    font-weight: 700;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
