import { AuthProvider } from './contexts/authContext';
import { MainRoutes } from './routes/routes';
import Global from './styles/global';

function App() {
  return (
    <AuthProvider>
      <Global />
      <MainRoutes />
    </AuthProvider>
  );
}

export { App };
