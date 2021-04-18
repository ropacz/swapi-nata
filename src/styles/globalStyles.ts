import { createGlobalStyle } from 'styled-components';
import starsPattern from '../assets/images/stars-pattern.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0
  }

  body {
    background: url(${starsPattern}) center;
    background-color: #323133;
    color: #fff;
    background-size: 400px 400px;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h6, strong {
    font-weight: 500;
    padding: 5px;
  }

  button{
    cursor: pointer;
  }

  .container {
    display: flex;
    max-width: 1020px;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
    flex-wrap: wrap;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
  }
  

`;
