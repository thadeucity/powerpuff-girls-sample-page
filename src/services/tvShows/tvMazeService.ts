import { useQuery, QueryOptions } from 'react-query';

import { createIoInstance } from '../../providers/ioProvider';
import { EpisodeProps, ShowProps } from './tvMazeDTOs';

const tvMazeApi = createIoInstance('https://api.tvmaze.com/');

const getShow = async (id: number) => tvMazeApi.get<ShowProps>(`/shows/${id}`);

const getShowEpisodes = async (id: number) =>
  tvMazeApi.get<EpisodeProps[]>(`/shows/${id}/episodes`);

export function useShow(showId: number, options?: Partial<QueryOptions>) {
  return useQuery<ShowProps, Error, ShowProps>(
    ['showData', showId],
    async (): Promise<ShowProps> => {
      const [res, hasError] = await getShow(showId);

      if (hasError) return {} as ShowProps;

      return res as ShowProps;
    },
    // @ts-ignore
    {
      staleTime: 1000 * 60 * 60, // 1hour
      retry: 2,
      ...options,
    },
  );
}

export function useShowEpisodes(
  showId: number,
  options?: Partial<QueryOptions>,
) {
  return useQuery<EpisodeProps[], Error, EpisodeProps[]>(
    ['showEpisodes', showId],
    async (): Promise<EpisodeProps[]> => {
      const [res, hasError] = await getShowEpisodes(showId);

      if (hasError) return [];

      return res || [];
    },
    // @ts-ignore
    {
      staleTime: 1000 * 60 * 60, // 1hour
      retry: 2,
      ...options,
    },
  );
}
