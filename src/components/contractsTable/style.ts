import styled from 'styled-components';

const Table = styled.table`
  border-radius: 3px;

  width: 93vw;
  /* height: 23rem; */
  max-height: 23rem;

  margin-left: 2rem;
  margin-top: 0.7rem;

  /* display: flex;
  flex-direction: column; */

  table-layout: fixed;

  th,
  td {
    text-align: left;
  }

  #table-header-container {
    background-color: #959595;

    height: 2.5rem;

    border-radius: 3px;

    /* display: flex;
    align-items: center;
    justify-content: space-around; */

    th {
      font-size: 1.2rem;
      color: #ffffff;
    }
  }

  .contracts {
    margin-top: 0.5rem;
    height: 2rem;

    /* display: flex;
    align-items: center; */

    background-color: #b4b4b4;

    .checkbox-input {
      /* margin-left: 1rem; */

      input[type='checkbox'] {
        transform: scale(2);
      }
    }

    .contract-title {
      /* margin-left: 7.3rem; */
    }

    .contract-code {
      /* margin-left: 13.6rem; */
    }

    .technical-retention {
      display: flex;
      justify-content: center;
      align-items: center;

      /* margin-left: 22.1rem; */
      width: 9.5rem;
      height: 2rem;
      background-color: #2c70b9;
      color: #ffffff;
    }

    .details {
      /* margin-left: 20.1rem; */
    }
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
`;

export { Table };
