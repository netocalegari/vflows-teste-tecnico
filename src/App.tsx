import { AuthProvider } from './contexts/authContext';
import { ContractProvider } from './contexts/contractsContext';
import { MainRoutes } from './routes/routes';
import Global from './styles/global';

function App() {
  return (
    <AuthProvider>
      <ContractProvider>
        <Global />
        <MainRoutes />
      </ContractProvider>
    </AuthProvider>
  );
}

export { App };
