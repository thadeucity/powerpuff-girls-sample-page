import React, { useEffect, useState } from 'react';
import { ShowProps } from '../../services/tvShows/tvMazeDTOs';
import { getShow } from '../../services/tvShows/tvMazeService';
import { AboutShowSection } from './Home.styles';

export const Home: React.FC = () => {
  const [showData, setShowData] = useState<ShowProps>({} as ShowProps);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getShow(6771)
      .then(([resData, resError]) => {
        if (resError) setHasError(true);
        setShowData(resData || ({} as ShowProps));
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (hasError) {
    return <div>Something went wrong ...</div>;
  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <AboutShowSection>
      <div>
        <h1>About the Show</h1>
        <p dangerouslySetInnerHTML={{ __html: showData?.summary }} />
      </div>
      <img
        src={showData?.image?.original}
        alt={`${showData?.name} Poster`}
        className="show__banner"
      />
    </AboutShowSection>
  );
};
