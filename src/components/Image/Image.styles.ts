import styled, { FlattenSimpleInterpolation } from 'styled-components';

export const ImageElement = styled.img<{
  css?: FlattenSimpleInterpolation | null;
}>`
  &.img__placeholder {
    transform: scale(0.6);
    opacity: 0.3;
    object-fit: unset;
    z-index: 0;
  }
  ${({ css }) => css}
`;
