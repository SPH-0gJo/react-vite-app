import styled from 'styled-components';

export const Header = styled.header`
  background-color: var(--white-a100);
  height: 3.625rem;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  grid-area: header;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.625rem 1.25rem;
  z-index: 999;
  em {
    font-size: 1.5rem;
    margin-right: 0.88rem;
  }
`;
