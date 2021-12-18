import React from 'react';
import { Link } from 'react-router-dom';

export const Episodes: React.FC = () => {
  return (
    <div>
      <h1>Episodes</h1>
      <Link to="/">
        <strong>Go to Home</strong>
      </Link>
    </div>
  );
}
