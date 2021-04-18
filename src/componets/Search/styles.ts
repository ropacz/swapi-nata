import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 40px;
  /* max-width: 700px; */
  width: 100%;
  margin: 30px auto;
  display: flex;

  input[type='text'] {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;
    -moz-appearance: textfield;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    max-width: 210px;
    width: 100%;
    height: 70px;
    background-color: #f3db3b;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #202320;
    font-weight: bold;
    transition: background-color 0.2s;
  }

  @media (max-width: 768px) {
    padding: 0 15px;
    button {
      max-width: 300px;
    }
  }
`;

export const NotifyError = styled.div`
  border: 1px solid;
  margin: 10px 0px;
  padding: 15px 10px 15px;
  color: #d8000c;
  background-color: #ffbaba;
  width: 100%;
`;
