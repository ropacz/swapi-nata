import styled from 'styled-components';

export const CardList = styled.header`
  background-color: white;
  padding: 10px;
  border-radius: 0.4rem;
  min-height: 250px;
  width: 100%;
  max-width: 300px;
  color: #202320;
  overflow: hidden;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin-bottom: 1em;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-0.5%);
  }

  ul > li > h3 {
    font-size: 1.3em;
    text-align: center;
    margin: 10px auto;
  }

  li {
    margin: 10px auto;
    padding: 5px;
  }

  li:first-child {
    background-color: #323133;
    color: #fff;
  }

  li:nth-child(1n) {
    border-bottom: 1px solid #ccc;
  }

  li:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    max-width: 400px;
    margin: 1rem auto 0 auto;
  }
`;
