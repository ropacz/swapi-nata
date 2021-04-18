import styled from 'styled-components';

export const HeaderPage = styled.header`
  display: flex;
  width: 100%;
  min-height: 60px;
  position: sticky;
  border-bottom: 2px solid #202320;
  background: #202320;
  top: 0;
  z-index: 999;

  nav {
    display: flex;
  }

  h1 a {
    color: #f3db3b;
    text-decoration: none;
  }

  h1 a:hover {
    color: #fff;
  }

  nav > ul {
    display: flex;
    width: 250px;
    justify-content: space-between;
    justify-content: row;
    list-style: none;
  }

  ul a {
    color: #f3db3b;
    text-decoration: none;
  }

  ul a:hover {
    text-decoration: line-through;
  }

  .container {
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    h1 {
      text-align: center;
      width: 100%;
    }
    nav {
      margin: 10px auto;
    }
  }
`;
