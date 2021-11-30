import { createGlobalStyle } from 'styled-components';

// font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all .3s cubic-bezier(0.4, 0.0, 0.2, 1);
  }
  `;
