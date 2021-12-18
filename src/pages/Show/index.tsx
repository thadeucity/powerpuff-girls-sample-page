import React from 'react';
import { Link } from 'react-router-dom';

export const Show: React.FC = () => {
  return (
    <div>
      <h1>Show</h1>
      <Link to="/">
        <strong>Go to Home</strong>
      </Link>
    </div>
  );
}
