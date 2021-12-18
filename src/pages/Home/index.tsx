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
      <Link to="/episodes">
        <strong>Go to Episodes</strong>
      </Link>
    </div>
  );
}
