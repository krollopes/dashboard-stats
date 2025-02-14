import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Reset de CSS */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Estilos básicos para o corpo */
  body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    background-color: #f4f4f4;
    color: #333;
    padding: 20px;
  }

  /* Estilos para links */
  a {
    color: #3498db;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  /* Estilos para títulos */
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 20px;
    font-weight: 600;
  }

  /* Estilos para listas */
  ul {
    list-style: none;
    padding: 0;
  }

  /* Estilos para botões */
  button {
    font-family: inherit;
    font-size: 1rem;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #3498db;
    color: #fff;

    &:hover {
      background-color: #2980b9;
    }
  }
`;

export default GlobalStyle;
