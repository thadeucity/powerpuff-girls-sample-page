import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;

  pointer-events: none;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .modal__content {
    width: 100%;
    max-width: 400px;
    min-height: 200px;
    background: #fff;
    padding: 1rem;
    border-radius: 1rem;
    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .modal__close_bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: #000;
    opacity: 0.5;
  }

  .modal__close_button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;

    width: 1.5rem;
    height: 1.5rem;
    top: 0.4rem;
    right: 0.4rem;
    border-radius: 100vw;

    font-size: 0.75rem;
    font-weight: bold;
    color: #fff;

    background: var(--clr-primary);
  }
`;
