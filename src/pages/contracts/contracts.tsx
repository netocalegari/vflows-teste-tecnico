import { useContext, useEffect, useState } from 'react';
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
import { Contract } from '../../models/Contract';

function ContractsPage() {
  const navigate = useNavigate();
  const { setUser, user } = useContext(AuthContext);
  const [contracts, setContracts] = useState([] as Contract[]);

  useEffect(() => {
    if (!user.cnpj) navigate('/login');
  }, [user.cnpj, navigate]);

  const previous = () => {
    setUser({} as User);
    navigate('/login');
  };

  const next = () => {
    navigate('/invoices');
  };

  return (
    <BackGroundDiv>
      <Header />
      <UserData />
      <ContentTitle />
      <ContractsTable
        addToSelectedContracts={setContracts}
        selectedContracts={contracts}
      />
      <PaginationButtons previous={previous} next={next} />
      <Footer />
    </BackGroundDiv>
  );
}

export { ContractsPage };
