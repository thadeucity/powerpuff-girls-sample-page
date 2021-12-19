import styled from 'styled-components';

export const AboutShowSection = styled.section`
  display: grid;
  grid-template-columns: 5fr 3fr;
  gap: 2rem;

  h1 {
    margin-bottom: 2rem;
  }

  .show__banner {
    width: 100%;
    border-radius: 1rem;
    border: 8px solid #fff;
    box-shadow: 0 0 0 3px #000;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
