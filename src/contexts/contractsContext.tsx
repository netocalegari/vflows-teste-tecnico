import { createContext, ReactNode, useMemo, useState } from 'react';
import { Contract } from '../models/Contract';

const ContractContext = createContext({} as AuthContextProps);

interface ContractProps {
  children: ReactNode;
}

function ContractProvider({ children }: ContractProps) {
  const [contract, setContract] = useState({} as Contract);
  return (
    <ContractContext.Provider
      value={useMemo(() => {
        return {
          contract,
          setContract,
        };
      }, [contract])}
    >
      {children}
    </ContractContext.Provider>
  );
}

export { ContractContext, ContractProvider };
