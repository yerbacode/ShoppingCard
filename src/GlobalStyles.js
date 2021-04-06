import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

export const ContainerFlex = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-between;
  display: flex;
  a {
    text-decoration: none;
    color: #1f1f1f;
  }
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (max-width: 810px) {
    width: 100%;
    align-items: center;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

export const Header = styled.header`
  background: #f6f6f6;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: #1f1f1f;
  @media (max-width: 810px) {
    position: sticky;
    top: 0;
    z-index: 99;
  }
`;
export const CardContainer = styled.div`
  width: 100%;
  display: flex;
`;
