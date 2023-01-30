import { useContext } from 'react';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../contexts/authContext';
import { HeaderContainer } from './style';

function Header() {
  const { user } = useContext(AuthContext);

  return (
    <HeaderContainer>
      <figure>
        <img src={logo} alt="" />
      </figure>

      <h1>PAGAMENTO DE FORNECEDOR</h1>
    </HeaderContainer>
  );
}

export { Header };
