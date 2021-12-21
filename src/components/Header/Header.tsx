import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './Header.styles';

export const Header: React.FC = () => (
  <HeaderContainer>
    <Link to="/">
      <img src="./powerpuff_girls_logo.svg" alt="" className="show__logo" />
    </Link>
    <nav>
      <Link to="/episodes">
        <b className="hilight__button">Episodes</b>
      </Link>
    </nav>
  </HeaderContainer>
);
