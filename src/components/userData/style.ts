import styled from "styled-components";

const DataContainer = styled.div`
  border: 1px solid red;
  border-radius:8px;

  margin-left: 2rem;
  margin-top: 2rem;

  height: 6rem;
  width: 93vw;

  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    margin-left: 1rem;
  }

  span {
    font-size: 1.2rem;
  }

  #cnpj {
    margin-left: 60rem;
  }

  #fantasy-name {
    margin-top: 1rem;
    margin-left: 1rem;
  }
`;

export {DataContainer}
