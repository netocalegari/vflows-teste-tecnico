import logo from '../../assets/logo.png';
import { FooterContainer } from './style';

function Footer() {
  return (
    <FooterContainer>
      <figure>
        <img src={logo} alt="" />
      </figure>
    </FooterContainer>
  )
};

export { Footer };
