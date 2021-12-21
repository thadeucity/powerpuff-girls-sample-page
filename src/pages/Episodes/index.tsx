import React from 'react';
import { EpisodeCard } from '../../components/EpisodeCard/EpisodeCard';
import { Constants } from '../../config/constants';
import { useShowEpisodes } from '../../services/tvShows/tvMazeService';
import { EpisodesContainer, EpisodesPageContainer } from './Episodes.styles';

export const Episodes: React.FC = () => {
  const { data, isFetching, isError } = useShowEpisodes(Constants.SHOW_ID);

  if (isError) {
    return <div>Something went wrong ...</div>;
  }

  if (isFetching) {
    return <div>Loading ...</div>;
  }

  return (
    <EpisodesPageContainer>
      <h1>Episodes</h1>
      <EpisodesContainer>
        {data?.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </EpisodesContainer>
    </EpisodesPageContainer>
  );
};
