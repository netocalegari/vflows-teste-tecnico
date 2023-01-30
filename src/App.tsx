import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { MainRoutes } from './routes/routes';
import Global from './styles/global';

function App() {
  return (
    <>
      <Global />
      <MainRoutes />;
      <ToastContainer/>
    </>
  );
}

export { App };
