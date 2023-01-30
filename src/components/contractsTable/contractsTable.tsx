import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { contracts as contractsMocks } from '../../mocks/mocks';
import { Contract } from '../../models/Contract';
import { Table } from './style';

function ContractsTable() {
  const { user } = useContext(AuthContext);
  const [contracts, setContracts] = useState([] as Contract[]);

  useEffect(() => {
    const filteredContracts = contractsMocks.filter(
      (contract) => contract.cnpj === user.cnpj
    );
    setContracts(filteredContracts);
  }, [user.cnpj]);

  return (
    <Table>
      <thead>
        <tr id="table-header-container">
          <th>Nome do Contrato</th>
          <th>Código do Contrato</th>
          <th>Retenção Técnica</th>
          <th>Detalhes</th>
        </tr>
      </thead>
      <tbody>
        {contracts.map(({ name, code, retention }) => {
          return (
            <tr key={code} className="contracts">
              <td className="checkbox-input">
                <input type="checkbox" />
              </td>
              <td className="contract-title">{name}</td>
              <td className="contract-code">{code}</td>
              <td className="technical-retention">{retention}</td>
              <td className="details">Buscar</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export { ContractsTable };
