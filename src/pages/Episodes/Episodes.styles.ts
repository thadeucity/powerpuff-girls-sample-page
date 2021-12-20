import styled from 'styled-components';

export const EpisodesPageContainer = styled.div`
  h1 {
    margin-bottom: 1.25rem;
  }
`;

export const EpisodesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;

  width: 100%;
`;
