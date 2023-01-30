import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-right: 2.8rem;

  button {
    width: 25rem;
    height: 3rem;

    border-style: none;
    border-radius: 3px;

    color: #ffffff;
    font-size: 2rem;
    font-weight: bold;
  }

  #previous-button {
    margin-right: 1rem;

    background-color: #febf00;
  }

  #next-button {
    background-color: #008b47;
  }
`;

export { ButtonContainer };
