import React from 'react';

import { Routes as RouterSwitch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Episodes } from '../pages/Episodes';

export const Routes: React.FC = () => (
  <RouterSwitch>
    <Route path="/" element={<Home />} />
    <Route path="/episodes" element={<Episodes />} />
  </RouterSwitch>
);
