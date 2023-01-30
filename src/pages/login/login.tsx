import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/form/input';
import logo from '../../assets/logo.png';
import { LoginContainer, Main } from './style';
import { AuthContext } from '../../contexts/authContext';

function LoginPage() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const formRef = useRef(null);

  const handleSubmit = async (data: { cnpj: string }) => {
    try {
      formRef.current.setFieldError('cnpj', '');

      const schema = Yup.object().shape({
        cnpj: Yup.string().required('Campo obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      login(data.cnpj);
      navigate('/contracts');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        formRef.current.setFieldError('cnpj', err.inner[0].errors[0]);
      }
    }
  };

  return (
    <Main>
      <LoginContainer>
        <figure>
          <img src={logo} alt="" />
        </figure>
        <h2>PAGAMENTO DE FORNECEDOR</h2>
        <div id="form-container">
          <Form ref={formRef} onSubmit={handleSubmit} id="login-form">
            <div id="input-container">
              <label htmlFor="cnpj">CNPJ</label>
              <Input name="cnpj" id="cnpj" type="text" />
            </div>

            <button type="submit">Acessar</button>
          </Form>
        </div>
      </LoginContainer>
    </Main>
  );
}

export { LoginPage };
