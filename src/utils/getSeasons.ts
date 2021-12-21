import { EpisodeProps } from '../services/tvShows/tvMazeDTOs';

export const getSeasons = (episodes: EpisodeProps[]): number[] => {
  const seasons = episodes.reduce((acc, episode) => {
    if (!episode.season || acc.includes(episode.season)) return acc;
    return [...acc, episode.season];
  }, [] as number[]);

  return seasons.sort((a, b) => a - b);
};
