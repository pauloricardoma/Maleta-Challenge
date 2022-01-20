import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors.grey.ligth};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary.dark};
  }

  button {
    cursor: pointer;
  }
`;
