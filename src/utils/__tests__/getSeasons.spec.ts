import { EpisodeProps } from '../../services/tvShows/tvMazeDTOs';
import { getSeasons } from '../getSeasons';

describe('Get all seasons', () => {
  it('should be able to list all seasons from show', () => {
    const testingEpisodes = [
      { name: 'Episode 1 Season 1', season: 1 },
      { name: 'Episode 2 Season 1', season: 1 },
      { name: 'Episode 1 Season 2', season: 2 },
      { name: 'Episode 1 Season 3', season: 3 },
    ] as EpisodeProps[];

    const seasons = getSeasons(testingEpisodes);

    expect(seasons?.length || 0).toBe(3);
    expect(seasons?.includes(1)).toBeTruthy();
    expect(seasons?.includes(2)).toBeTruthy();
    expect(seasons?.includes(3)).toBeTruthy();
  });

  it('should return seasons list sorted', () => {
    const testingEpisodes = [
      { name: 'Episode 1 Season 1', season: 1 },
      { name: 'Episode 2 Season 1', season: 1 },
      { name: 'Episode 1 Season 3', season: 3 },
      { name: 'Episode 1 Season 2', season: 2 },
    ] as EpisodeProps[];

    const seasons = getSeasons(testingEpisodes);

    expect(seasons).toStrictEqual([1, 2, 3]);
  });

  it('should not return unlisted seasons', () => {
    const testingEpisodes = [
      { name: 'Episode 1 Season 1', season: 1 },
      { name: 'Episode 2 Season 1', season: 1 },
      { name: 'Episode 1 Season 2', season: 2 },
      { name: 'Episode 1 Season 4', season: 4 },
    ] as EpisodeProps[];

    const seasons = getSeasons(testingEpisodes);

    expect(seasons).toStrictEqual([1, 2, 4]);
  });
});
