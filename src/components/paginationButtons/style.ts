import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-right: 2.8rem;

  button {
    width: 25rem;
    height: 3rem;

    border-style: none;
    border-radius: 3px;

    color: #FFFFFF;
    font-size: 2rem;
    font-weight: bold;
  }

  #previous-button {
    margin-right: 1rem;

    background-color: #FEBF00;
  }

  #next-button {
    background-color: #008B47;
  }

`;

export { ButtonContainer }
