import { useState } from 'react';
import { LoginContainer, Main } from './style';
import logo from '../../assets/logo.png'

function LoginPage() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Main>
      <LoginContainer>
        <figure>
          <img src={logo} alt="" />
        </figure>
        <h2>PAGAMENTO DE FORNECEDOR</h2>
        <div id='form-container'>
          <form action="" id='login-form'>
            <div id='input-container'>
              <label htmlFor="cnpj">CNPJ</label>
              <input id="cnpj" type="text" />
            </div>

            <button>Acessar</button>
          </form>
        </div>
        {/* <figure>
          <img src="../../assets/logo.png" alt="" />
        </figure> */}
      </LoginContainer>
    </Main>
  );
}

export { LoginPage };
