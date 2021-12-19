import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { EpisodeProps } from '../../services/tvShows/tvMazeDTOs';
import { getShowEpisodes } from '../../services/tvShows/tvMazeService';

export const Episodes: React.FC = () => {
  const [episodesList, setEpisodesList] = useState<EpisodeProps[]>([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getShowEpisodes(6771).then(([resData, resError]) => {
      if (resError) setHasError(true);
      setEpisodesList(resData || []);   
    }).finally(() => setIsLoading(false));
  }, []);

  if (hasError) {
    return <div>Something went wrong ...</div>; 
  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <h1>Episodes</h1>
      <Link to="/">
        <strong>Go to Home</strong>
      </Link>
      {episodesList.map((episode) => (
        <div key={episode.id}>
          <h2>{episode.name}</h2>
          <p>{episode.summary}</p>
        </div>
      ))}
    </div>
  );
}
