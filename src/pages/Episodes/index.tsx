import React, { useCallback, useMemo, useState } from 'react';
import { EpisodeCard } from '../../components/EpisodeCard/EpisodeCard';
import { Constants } from '../../config/constants';
import { useShowEpisodes } from '../../services/tvShows/tvMazeService';
import { filterBySeasons } from '../../utils/filterBySeasons';
import { getSeasons } from '../../utils/getSeasons';
import { EpisodesContainer, EpisodesPageContainer } from './Episodes.styles';

export const Episodes: React.FC = () => {
  const { data, isFetching, isError } = useShowEpisodes(Constants.SHOW_ID);

  const [selectedSeasons, setSelectedSeasons] = useState<number[]>([]);

  const seasons = getSeasons(data || []);

  const handleSelectSeason = useCallback(
    (seasonToSelect: number) => {
      if (seasons.includes(seasonToSelect)) {
        if (selectedSeasons.includes(seasonToSelect)) {
          setSelectedSeasons(
            selectedSeasons.filter((season) => season !== seasonToSelect),
          );
        } else {
          setSelectedSeasons([...selectedSeasons, seasonToSelect]);
        }
      }
    },
    [seasons, selectedSeasons],
  );

  const episodesToShow = useMemo(
    () => filterBySeasons(data || [], selectedSeasons),
    [data, selectedSeasons],
  );

  if (isError) {
    return <div>Something went wrong ...</div>;
  }

  if (isFetching) {
    return <div>Loading ...</div>;
  }

  return (
    <EpisodesPageContainer>
      <h1>Episodes: </h1>
      <ul>
        {seasons.map((season) => (
          <li>
            <button
              type="button"
              onClick={() => handleSelectSeason(season)}
              className={selectedSeasons.includes(season) ? 'selected' : ''}
            >
              Season {season}
            </button>
          </li>
        ))}
      </ul>
      <EpisodesContainer>
        {episodesToShow?.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </EpisodesContainer>
    </EpisodesPageContainer>
  );
};
