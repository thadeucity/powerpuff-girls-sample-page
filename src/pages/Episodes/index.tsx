import React, { useEffect, useState } from 'react';
import { EpisodeCard } from '../../components/EpisodeCard/EpisodeCard';
import { EpisodeProps } from '../../services/tvShows/tvMazeDTOs';
import { getShowEpisodes } from '../../services/tvShows/tvMazeService';
import { EpisodesContainer, EpisodesPageContainer } from './Episodes.styles';

export const Episodes: React.FC = () => {
  const [episodesList, setEpisodesList] = useState<EpisodeProps[]>([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getShowEpisodes(6771)
      .then(([resData, resError]) => {
        if (resError) setHasError(true);
        setEpisodesList(resData || []);
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
    <EpisodesPageContainer>
      <h1>Episodes</h1>
      <EpisodesContainer>
        {episodesList.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </EpisodesContainer>
    </EpisodesPageContainer>
  );
};
