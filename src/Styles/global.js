import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  ${normalize};

  :root {
    box-sizing: border-box;
  }

  body {
    background-color: ${theme.colors.grey};
    color: ${theme.colors.black};
    font-family: ${theme.fonts.default};
    font-size: ${theme.fontSize.default};   
    text-size-adjust: 100%;
    touch-action: manipulation;
    text-rendering: optimizeLegibility;    
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .Screen {
    background-color: ${theme.colors.white};
    max-width: 414px;
    margin: 0 auto;
    padding: 15px 10px;
  }
`;
