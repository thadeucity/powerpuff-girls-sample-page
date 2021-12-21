import styled from 'styled-components';

export const EpisodesPageContainer = styled.div`
  h1 {
    margin-bottom: 1.25rem;
    color: var(--clr-text);
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    list-style: none;

    margin-bottom: 2rem;

    > * + * {
      margin-left: 1rem;
    }

    button {
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      color: #fff;
      background-color: #333333;
      font-weight: bold;

      transition: background 0.2s ease-in-out;

      :hover {
        background-color: var(--clr-primary);
      }

      &.selected {
        background-color: var(--clr-primary);
      }
    }
  }
`;

export const EpisodesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;

  width: 100%;
`;
