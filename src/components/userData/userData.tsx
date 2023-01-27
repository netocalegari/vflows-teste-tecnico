import { DataContainer } from "./style";

function UserData() {
  return (
    <DataContainer>
      <div>
        <span>Razão Social: Razão Social do fornecedor logado</span>
        <span id="cnpj">CNPJ: 00.000.000/000-0</span>
      </div>
      <span id="fantasy-name">Nome Fantasia: Nome Fantasia do Forcenecedor Logado</span>
    </DataContainer>
  )
};

export {UserData};
