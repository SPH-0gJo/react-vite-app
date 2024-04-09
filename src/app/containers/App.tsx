import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Main } from './pages/Main';

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
          <Route path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </AppPage>
  );
};
