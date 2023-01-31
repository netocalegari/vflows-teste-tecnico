import { Contract } from '../models/Contract';
import { User } from '../models/User';

const users: User[] = [
  {
    cnpj: '92803498000149',
  },
  {
    cnpj: '84955392000132',
  },
];

const contracts: Contract[] = [
  {
    name: 'contrato1',
    code: '11002200-01',
    retention: '5%',
    cnpj: '92803498000149',
  },
  {
    name: 'contrato2',
    code: '11002200-02',
    retention: '10%',
    cnpj: '84955392000132',
  },
  {
    name: 'contrato3',
    code: '11002200-03',
    retention: '15%',
    cnpj: '84955392000132',
  },
];

export { users, contracts };
