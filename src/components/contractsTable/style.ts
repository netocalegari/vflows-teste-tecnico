import styled from "styled-components";

const Table = styled.table`
  border-radius: 3px;

  width: 93vw;
  height: 23rem;
  max-height: 23rem;

  margin-left: 2rem;
  margin-top: 0.7rem;

  display: flex;
  flex-direction: column;

  #table-header-container {
    background-color: #959595;

    height: 2.5rem;

    border-radius: 3px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    th {
      font-size: 1.2rem;
      color: #FFFFFF;
    }
  }

  .contracts {
    margin-top: 0.5rem;
    height: 2rem;

    display: flex;
    align-items: center;

    background-color: #B4B4B4;

    .checkbox-input {
      margin-left: 1rem;

      input[type=checkbox] {
        transform: scale(2);
      }
    }

    .contract-title {
      margin-left: 7.3rem
    }

    .contract-code {
      margin-left: 13.6rem
    }

    .technical-retention {
      margin-left: 26.5rem
    }

    .details {
      margin-left: 23.8rem
    }
  }

  tr:nth-child(even) {
    background-color: #DDDDDD;
  }
`;

export { Table }
