import { createIoInstance } from '../../providers/ioProvider';

const tvMazeApi = createIoInstance('https://api.tvmaze.com/');

interface ShowProps {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended?: string;
  officialSite: string;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number;
  };
  weight: number;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
  };
  externals: {
    tvrage?: number;
    thetvdb?: number;
    imdb?: string;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  updated: number;
}

export const getShow = async (id: number) => {
  return tvMazeApi.get<ShowProps>(`/shows/${id}`); 
}