import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from 'react';
import { Contract } from '../models/Contract';

interface ContractContextProps {
  contract: Contract;
  setContract: Dispatch<SetStateAction<Contract>>;
}

const ContractContext = createContext({} as ContractContextProps);

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
