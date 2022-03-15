import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #FFFDFA;
    --text: #0f0d17;
  }

  [data-theme='dark'] {
    --background: #0f0d17;
    --text: #FFFDFA;
  }
`;
