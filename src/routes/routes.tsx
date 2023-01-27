import { Navigate, Route, Routes } from 'react-router-dom';
import { ContractsPage } from '../pages/contratos/contracts';
import { LoginPage } from '../pages/login/login';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate replace to="/login" />} />
      <Route path="/contracts" element={<ContractsPage />} />
    </Routes>
  );
}

export { MainRoutes };
