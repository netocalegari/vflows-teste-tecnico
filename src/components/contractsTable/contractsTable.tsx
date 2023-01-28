import { Table } from './style';

function ContractsTable() {
  return (
    <Table>
      <tr id="table-header-container">
        <th>Nome do Contrato</th>
        <th>Código do Contrato</th>
        <th>Retenção Técnica</th>
        <th>Detalhes</th>
      </tr>
      <tr className="contracts">
        <td className='checkbox-input'>
          <input type="checkbox" />
        </td>
        <td className='contract-title'>Título do primeiro contrado de exemplo</td>
        <td className='contract-code'>11002200-01</td>
        <td className='technical-retention'>5%</td>
        <td className='details'>Buscar</td>
      </tr>
      <tr className="contracts">
        <td className='checkbox-input'>
          <input type="checkbox" />
        </td>
        <td className='contract-title'>Título do primeiro contrado de exemplo</td>
        <td className='contract-code'>11002200-01</td>
        <td className='technical-retention'>5%</td>
        <td className='details'>Buscar</td>
      </tr>
      <tr className="contracts">
        <td className='checkbox-input'>
          <input type="checkbox" />
        </td>
        <td className='contract-title'>Título do primeiro contrado de exemplo</td>
        <td className='contract-code'>11002200-01</td>
        <td className='technical-retention'>5%</td>
        <td className='details'>Buscar</td>
      </tr>
      <tr className="contracts">
        <td className='checkbox-input'>
          <input type="checkbox" />
        </td>
        <td className='contract-title'>Título do primeiro contrado de exemplo</td>
        <td className='contract-code'>11002200-01</td>
        <td className='technical-retention'>5%</td>
        <td className='details'>Buscar</td>
      </tr>
      <tr className="contracts">
        <td className='checkbox-input'>
          <input type="checkbox" />
        </td>
        <td className='contract-title'>Título do primeiro contrado de exemplo</td>
        <td className='contract-code'>11002200-01</td>
        <td className='technical-retention'>5%</td>
        <td className='details'>Buscar</td>
      </tr>
      <tr className="contracts">
        <td className='checkbox-input'>
          <input type="checkbox" />
        </td>
        <td className='contract-title'>Título do primeiro contrado de exemplo</td>
        <td className='contract-code'>11002200-01</td>
        <td className='technical-retention'>5%</td>
        <td className='details'>Buscar</td>
      </tr>
      <tr className="contracts">
        <td className='checkbox-input'>
          <input type="checkbox" />
        </td>
        <td className='contract-title'>Título do primeiro contrado de exemplo</td>
        <td className='contract-code'>11002200-01</td>
        <td className='technical-retention'>5%</td>
        <td className='details'>Buscar</td>
      </tr>
      <tr className="contracts">
        <td className='checkbox-input'>
          <input type="checkbox" />
        </td>
        <td className='contract-title'>Título do primeiro contrado de exemplo</td>
        <td className='contract-code'>11002200-01</td>
        <td className='technical-retention'>5%</td>
        <td className='details'>Buscar</td>
      </tr>
    </Table>
  );
}

export { ContractsTable };
