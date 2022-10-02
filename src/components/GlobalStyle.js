import { createGlobalStyle } from 'styled-components';
import backgraundIMG from "../images/18129294.jpg";
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: ${p => p.theme.space[0]}px;
  margin-top: 70px;  
  padding: ${p=> p.theme.space[5]}px;
  font-family:  ${p=> p.theme.fonts.body};
  font-size: ${p=> p.theme.fontSizes.m};
  color: ${p => p.theme.colors.text};
  background: url(${backgraundIMG}) no-repeat fixed;
  background-size: cover;
}

ul {
  padding: ${p=> p.theme.space[0]}px;
  margin: ${p=> p.theme.space[0]}px;
  /* list-style-type: none;  */
}

h1, h2, h3, p {
  padding: ${p=> p.theme.space[0]}px;
  margin: ${p=> p.theme.space[0]}px;
}

h1 {
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 25px;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace, 'Roboto';
}

`;