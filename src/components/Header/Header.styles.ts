import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  .show__logo {
    width: 300px;
  }

  nav {
    a {
      font-size: 1.35rem;
      font-weight: bold;
      text-decoration: none;
      color: #333;
      text-transform: uppercase;
      text-decoration: none;
    }
  }

  @media (max-width: 768px) {
    .show__logo {
      width: 225px;
    }
  }

  @media (max-width: 480px) {
    .show__logo {
      width: 190px;
    }

    nav {
      a {
        font-size: 1.15rem;
      }
    }
  }

  @media (max-width: 360px) {
    .show__logo {
      width: 175px;
    }

    nav {
      a {
        font-size: 1rem;
      }
    }
  }
`;
