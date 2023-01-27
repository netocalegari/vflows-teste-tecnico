import logo from '../../assets/logo.png'
import { HeaderContainer } from './style'

function Header() {
  return (
    <HeaderContainer>
      <figure>
        <img src={logo} alt="" />
      </figure>

      <h1>PAGAMENTO DE FORNECEDOR</h1>
    </HeaderContainer>
  )
}

export {Header}
