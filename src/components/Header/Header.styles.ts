import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  nav {
    display: flex;

    > * + * {
      margin-left: 1rem;
    }
  }

  .show__logo {
    width: 300px;
  }

  .mobile_only {
    display: none;
  }

  @media (max-width: 768px) {
    .show__logo {
      width: 225px;
    }

    .desktop_only {
      display: none;
    }

    .mobile_only {
      display: block;
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

export const ThemeModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 1rem 0;

  > * + * {
    margin-top: 0.5rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25em 0.75em;
    border-radius: 0.5em;
    background: transparent;
    width: 100%;
    position: relative;

    img {
      width: 50px;
      height: 50px;
      border-radius: 100vw;
      border: 4px solid #fff;
      box-shadow: 0 0 0 3px #000;
      z-index: 1;
    }

    span {
      background: #000;
      color: #fff;
      font-size: 0.915rem;
      padding: 0.25em 0.7em 0.25em 1.5em;
      width: 15ch;
      margin-left: -1em;
      border-radius: 100vw;
      transition: background 200ms;
    }

    &.selected {
      img {
        box-shadow: 0 0 0 3px var(--clr-primary);
      }

      span {
        background: var(--clr-primary);
      }
    }
  }
`;

export const MobileMenuContent = styled.div`
  width: 200px;

  nav {
    > * + * {
      margin-top: 1rem;
    }
  }

  button {
    width: 100%;
  }
`;
