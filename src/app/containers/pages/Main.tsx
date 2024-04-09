import styled from 'styled-components';

const LandingPage = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 21.25rem 1fr;
  grid-template-rows: 5.625rem 1fr;
  overflow-x: hidden;
  overflow-y: hidden;
  grid-template-areas:
    'aside header'
    'aside content';
`;

export const Main = () => {
  return (
    <LandingPage>
      <h2>React Vite App</h2>
    </LandingPage>
  );
};
