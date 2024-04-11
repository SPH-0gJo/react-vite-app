import styled from 'styled-components';

const Main = styled.main`
  background-color: var(--light-surface-level-2);
  grid-area: content;
  padding: 2.5rem 2.5rem 0 2.5rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export const AdminContents = (props) => {
  return <Main>{props.children}</Main>;
};
