import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getShow } from '../../services/tvShows/tvMazeService';

export const Home: React.FC = () => {

  useEffect(() => {
    getShow(6771).then(console.log);
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <Link to="/show/1234">
        <strong>Go to Show Page</strong>
      </Link>
    </div>
  );
}
