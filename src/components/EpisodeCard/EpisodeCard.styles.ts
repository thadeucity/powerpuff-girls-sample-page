import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  padding: 0.75rem 0.75rem 1.5rem;
  background: #fff;

  border-radius: 1rem;
  overflow: hidden;

  border: 3px solid #000;

  transition: transform 200ms ease-in-out;

  &:hover {
    transform: translateY(-0.35rem) scale(1.025);
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  overflow: hidden;

  width: 100%;
  margin-bottom: 1rem;
  padding-top: ${(9 / 16) * 100}%;
  position: relative;

  background: #f2f2f2;

  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center center;
  }

  span {
    position: absolute;
    bottom: 0;
    right: 0;

    display: flex;
    padding: 0.25em 0.5em;
    border-radius: 4px;
    background: #000;

    font-size: 0.875rem;
    font-weight: bold;
    color: #fff;
  }
`;

export const EpisodeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;

  h2 {
    margin-bottom: 0.75rem;
  }
`;
