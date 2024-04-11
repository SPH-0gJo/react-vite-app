import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Admin } from './pages/admin/Admin';
import { Main } from './pages/admin/Main';

const AppPage = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const App = () => {
  return (
    <AppPage>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to={'/admin'} />} />
          <Route path='/admin' element={<Admin />}>
            <Route index element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppPage>
  );
};
