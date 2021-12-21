import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IState } from '../../store';
import { changeTheme } from '../../store/modules/theme/actions';
import { PossibleThemes } from '../../store/modules/theme/themeDTO';
import { Modal } from '../Modal';
import { HeaderContainer, ThemeModalContent } from './Header.styles';

export const Header: React.FC = () => {
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);

  const dispatch = useDispatch();

  const themeName = useSelector<IState, PossibleThemes>(
    (state) => state?.theme?.name,
  );

  const handleChangeTheme = useCallback(
    (newTheme: PossibleThemes) => () => {
      dispatch(changeTheme(newTheme));
    },
    [dispatch],
  );

  return (
    <HeaderContainer>
      <Link to="/">
        <img src="./powerpuff_girls_logo.svg" alt="" className="show__logo" />
      </Link>
      <nav>
        <Link to="/episodes">
          <b className="hilight__button">Episodes</b>
        </Link>

        <button
          type="button"
          className="hilight__button"
          onClick={() => setIsThemeModalOpen(true)}
        >
          Themes
        </button>
      </nav>

      <Modal
        isOpen={isThemeModalOpen}
        onClose={() => setIsThemeModalOpen(false)}
      >
        <ThemeModalContent>
          <button
            type="button"
            className={themeName === 'Bubbles' ? 'selected' : ''}
            onClick={handleChangeTheme('Bubbles')}
          >
            <div>
              <img src="./images/bubbles.png" alt="Powerpuff Girls Bubbles" />
            </div>
            <span>Bubbles</span>
          </button>

          <button
            type="button"
            className={themeName === 'Blossom' ? 'selected' : ''}
            onClick={handleChangeTheme('Blossom')}
          >
            <div>
              <img src="./images/blossom.png" alt="Powerpuff Girls Blossom" />
            </div>
            <span>Blossom</span>
          </button>

          <button
            type="button"
            className={themeName === 'Buttercup' ? 'selected' : ''}
            onClick={handleChangeTheme('Buttercup')}
          >
            <div>
              <img
                src="./images/buttercup.png"
                alt="Powerpuff Girls Buttercup"
              />
            </div>
            <span>Buttercup</span>
          </button>

          <button
            type="button"
            className={themeName === 'MojoJojo' ? 'selected' : ''}
            onClick={handleChangeTheme('MojoJojo')}
          >
            <div>
              <img
                src="./images/mojojojo.png"
                alt="Powerpuff Girls Mojo Jojo"
              />
            </div>
            <span>Mojo Jojo</span>
          </button>
        </ThemeModalContent>
      </Modal>
    </HeaderContainer>
  );
};
