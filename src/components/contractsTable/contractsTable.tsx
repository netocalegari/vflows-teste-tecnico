import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { AuthContext } from '../../contexts/authContext';
import { ContractContext } from '../../contexts/contractsContext';
import { contracts as contractsMocks } from '../../mocks/mocks';
import { Contract } from '../../models/Contract';
import { Table } from './style';

interface ContractsTableProps {
  selectedContracts: Contract[];
  addToSelectedContracts: Dispatch<SetStateAction<Contract[]>>;
}

function ContractsTable({
  selectedContracts,
  addToSelectedContracts,
}: ContractsTableProps) {
  const { user } = useContext(AuthContext);
  const { contract, setContract } = useContext(ContractContext);
  const [contracts, setContracts] = useState([] as Contract[]);

  useEffect(() => {
    const filteredContracts = contractsMocks.filter(
      (userContract) => userContract.cnpj === user.cnpj
    );
    setContracts(filteredContracts);
  }, [user.cnpj]);

  const handleChange = (newContract: Contract) => {
    console.log(selectedContracts);

    const isContractAlreadySelected = selectedContracts.filter(
      (c) => c.code === newContract.code
    );

    if (isContractAlreadySelected.length < 1) {
      const contractsWithSelectedContract = selectedContracts;

      contractsWithSelectedContract.push(newContract);
      addToSelectedContracts(contractsWithSelectedContract);
      console.log(selectedContracts);
    }

    if (isContractAlreadySelected.length > 0) {
      const contractsWithoutSelectedContract = [] as Contract[];
      selectedContracts.forEach((sc) => {
        if (sc.code !== newContract.code) {
          contractsWithoutSelectedContract.push(sc);
        }
      });

      addToSelectedContracts(contractsWithoutSelectedContract);
      console.log(selectedContracts);
    }
  };

  return (
    <Table>
      <tr id="table-header-container">
        <th style={{ width: '5%' }}> </th>
        <th id="th1" style={{ width: '15%' }}>
          Nome do Contrato
        </th>
        <th id="th2" style={{ width: '18%' }}>
          Código do Contrato
        </th>
        <th id="th3" style={{ width: '10%' }}>
          Retenção Técnica
        </th>
        <th id="th4" style={{ width: '5%' }}>
          Detalhes
        </th>
      </tr>

      {contracts.map((c) => {
        const { name, code, retention } = c;
        return (
          <tr key={code} className="contracts">
            <td className="checkbox-input" style={{ textAlign: 'center' }}>
              <input onChange={() => handleChange(c)} type="checkbox" />
            </td>
            <td className="contract-title" headers="th1">
              {name}
            </td>
            <td className="contract-code" headers="th2">
              {code}
            </td>
            <td className="technical-retention" headers="th3">
              {retention}
            </td>
            <td
              className="details"
              headers="th4"
              style={{ textAlign: 'center' }}
            >
              <button type="button">
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </td>
          </tr>
        );
      })}
    </Table>
  );
}

export { ContractsTable };
