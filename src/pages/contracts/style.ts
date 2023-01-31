import styled from 'styled-components';
import { Table } from '../../components/contractsTable/style';
import { ButtonContainer } from '../../components/paginationButtons/style';

const BackGroundDiv = styled.div`
  background-color: #ffffff;

  margin-top: 2rem;
  margin-left: 2rem;

  height: 93vh;
  width: 97vw;

  ${Table} + ${ButtonContainer} {
    margin-top: 10rem;
  }
`;

export { BackGroundDiv };
