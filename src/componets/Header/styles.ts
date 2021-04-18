import styled from 'styled-components';

export const HeaderPage = styled.header`
  display: flex;
  width: 100%;
  min-height: 60px;
  position: sticky;
  border-bottom: 2px solid #202320;
  background: #202320;

  nav {
    display: flex;
  }

  nav > ul {
    display: flex;
    width: 250px;
    justify-content: space-between;
    justify-content: row;
    list-style: none;
  }

  .container {
    justify-content: space-between;
  }
`;
