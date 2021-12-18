import React from 'react';

import { Routes as RouterSwitch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Show } from '../pages/Show';

export const Routes: React.FC = () => (
  <RouterSwitch>
    <Route path="/" element={<Home />} />
    <Route path="/show/:id" element={<Show />} />
  </RouterSwitch>
)