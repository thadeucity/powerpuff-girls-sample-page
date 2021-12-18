import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/show/1234">
        <strong>Go to Show Page</strong>
      </Link>
    </div>
  );
}
