import React, { useCallback, useState } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';
import { ImageElement } from './Image.styles';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  css?: FlattenSimpleInterpolation;
}

export const Image: React.FC<ImageProps> = ({
  css = null,
  src,
  onError,
  onLoad,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = useCallback(
    (e) => {
      setHasError(true);
      if (onError) {
        onError(e);
      }
    },
    [onError],
  );

  const handleLoad = useCallback(
    (e) => {
      setHasError(false);
      setIsLoading(false);
      if (onLoad) {
        onLoad(e);
      }
    },
    [onLoad],
  );

  if (hasError || !src) {
    return (
      <ImageElement
        {...rest}
        css={css}
        src="./powerpuff_girls_logo.svg"
        alt="Placeholder Logo"
        className="img__placeholder"
      />
    );
  }

  if (isLoading) {
    <b>Loading</b>;
  }

  return (
    <ImageElement
      src={src}
      css={css}
      onError={handleError}
      onLoad={handleLoad}
      {...rest}
    />
  );
};
