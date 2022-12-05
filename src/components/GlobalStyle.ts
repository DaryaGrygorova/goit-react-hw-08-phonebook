import { createGlobalStyle } from 'styled-components';
import { SCThemeType } from 'types/types';
import backgroundIMG from "images/18129294.jpg";
import 'modern-normalize';

type GlobalThemeProps = {
  theme: SCThemeType
};

export const GlobalStyle = createGlobalStyle`
body {
  margin: ${({ theme }: GlobalThemeProps) => theme.space[0]}px;
  margin-top: 70px;  
  padding-left: ${({ theme }: GlobalThemeProps) => theme.space[5]}px;
  padding-right: ${({ theme }: GlobalThemeProps) => theme.space[5]}px;
  padding-top:  ${({ theme }: GlobalThemeProps) => theme.space[3]}px;
  padding-bottom:  ${({ theme }: GlobalThemeProps) => theme.space[0]}px;
  font-family:  ${({ theme }: GlobalThemeProps) => theme.fonts.body};
  font-size: ${({ theme }: GlobalThemeProps) => theme.fontSizes.m};
  color: ${({ theme }: GlobalThemeProps) => theme.colors.text};
  background: url(${backgroundIMG}) no-repeat fixed;
  background-size: cover;
}

ul {
  padding: ${({ theme }: GlobalThemeProps) => theme.space[0]}px;
  margin: ${({ theme }: GlobalThemeProps) => theme.space[0]}px;
  /* list-style-type: none;  */
}

h1, h2, h3, p {
  padding: ${({ theme }: GlobalThemeProps) => theme.space[0]}px;
  margin: ${({ theme }: GlobalThemeProps) => theme.space[0]}px;
}

h1 {
  text-align: center;
  text-transform: uppercase;
  margin-bottom: ${({ theme }: GlobalThemeProps) => theme.space[5]}px;
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