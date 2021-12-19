import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShowProps } from '../../services/tvShows/tvMazeDTOs';
import { getShow } from '../../services/tvShows/tvMazeService';

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
    <div>
      <h1>{showData?.name}</h1>
      <img src={showData?.image?.original} alt={`${showData?.name} Poster`} />
      <p dangerouslySetInnerHTML={{ __html: showData?.summary }} />
      <Link to="/episodes">
        <strong>Go to Episodes</strong>
      </Link>
    </div>
  );
};
