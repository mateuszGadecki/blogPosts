import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    position: relative;
    overflow-x: hidden;
}   
button {   
  &:focus {
    outline: 0;   
  }
}
video {
  &:focus {
    outline: 0;
  }
}
*, *::before, *::after {
    box-sizing: border-box;    
}
`;
