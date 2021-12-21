import { EpisodeProps } from '../services/tvShows/tvMazeDTOs';

export const filterBySeasons = (
  episodes: EpisodeProps[],
  seasons: number[],
) => {
  if (!seasons.length) return episodes;
  return episodes.filter((episode) => seasons.includes(episode.season));
};
