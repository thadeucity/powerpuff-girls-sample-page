import React from 'react';
import { Constants } from '../../config/constants';
import { useShow } from '../../services/tvShows/tvMazeService';
import { AboutShowSection } from './Home.styles';

export const Home: React.FC = () => {
  const { data, isFetching, isError } = useShow(Constants.SHOW_ID);

  if (isError) {
    return <div>Something went wrong ...</div>;
  }

  if (isFetching) {
    return <div>Loading ...</div>;
  }

  return (
    <AboutShowSection>
      <div>
        <h1>About the Show</h1>
        <p dangerouslySetInnerHTML={{ __html: data?.summary || '' }} />

        <p>
          <b>Average Runtime:</b> {data?.averageRuntime} minutes
        </p>

        <p>
          <b>Network:</b> {data?.network?.name}
        </p>
      </div>
      <img
        src={data?.image?.original}
        alt={`${data?.name} Poster`}
        className="show__banner"
      />
    </AboutShowSection>
  );
};
