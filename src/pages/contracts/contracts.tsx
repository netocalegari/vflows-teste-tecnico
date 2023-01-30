import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { BackGroundDiv } from './style';
import { UserData } from '../../components/userData/userData';
import { ContentTitle } from '../../components/contentTitle/contentTitle';
import { ContractsTable } from '../../components/contractsTable/contractsTable';
import { PaginationButtons } from '../../components/paginationButtons/paginationButtons';
import { Footer } from '../../components/footer/footer';
import { AuthContext } from '../../contexts/authContext';
import { User } from '../../models/User';

function ContractsPage() {
  const navigate = useNavigate();
  const { setUser, user } = useContext(AuthContext);

  useEffect(() => {
    if (!user.cnpj) navigate('/login');
  }, [user.cnpj, navigate]);

  const previous = () => {
    setUser({} as User);
    navigate('/login');
  };

  return (
    <BackGroundDiv>
      <Header />
      <UserData />
      <ContentTitle />
      <ContractsTable />
      <PaginationButtons previous={previous} next={() => null} />
      <Footer />
    </BackGroundDiv>
  );
}

export { ContractsPage };
