import {
  createContext,
  ReactNode,
  useState,
  useMemo,
  Dispatch,
  SetStateAction,
} from 'react';
import { users } from '../mocks/mocks';
import { User } from '../models/User';

interface AuthContextProps {
  login: (cnpj: string) => void;
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

interface AuthProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProps) {
  const [user, setUser] = useState<User>({} as User);

  function login(cnpj: string) {
    const loggedUser = users.filter((newUser) => {
      return newUser.cnpj === cnpj;
    });

    if (loggedUser.length < 1) {
      alert('CNPJ não encontrado');
      throw new Error('CNPJ não encontrado');
    } else {
      setUser(loggedUser[0]);
    }
  }

  return (
    <AuthContext.Provider
      value={useMemo(() => {
        return {
          login,
          user,
          setUser,
        };
      }, [user])}
    >
      {children}
    </AuthContext.Provider>
  );
}
