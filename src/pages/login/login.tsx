import { LoginContainer, Main } from './style';
import logo from '../../assets/logo.png'
import { Form } from '@unform/web';
import { Input } from '../../components/form/input';
import * as Yup from 'yup';
import { useRef } from 'react';
import { toast } from 'react-toastify/dist/core';

function LoginPage() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const formRef = useRef(null);

  async function handleSubmit(data: any) {
    if (data.cnpj === "") {
      // formRef.current.setFieldError('cnpj', 'Campo obrigatório')
      toast.error('Campo obrigatório');
    }

    console.log(data);
  }

  return (
    <Main>
      <LoginContainer>
        <figure>
          <img src={logo} alt="" />
        </figure>
        <h2>PAGAMENTO DE FORNECEDOR</h2>
        <div id='form-container'>
          <Form ref={formRef} onSubmit={handleSubmit} id='login-form'>
            <div id='input-container'>
              <label htmlFor="cnpj">CNPJ</label>
              <Input name={'cnpj'} id="cnpj" type="text" />
            </div>

            <button>Acessar</button>
          </Form>
        </div>
      </LoginContainer>
    </Main>
  );
}

export { LoginPage };
