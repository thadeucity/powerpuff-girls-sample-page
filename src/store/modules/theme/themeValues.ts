import { IThemeState, PossibleThemes } from './themeDTO';

export const BUBBLES_THEME: IThemeState = {
  primaryColor: '#33ACE3',
  secondaryColor: '#98DAF1',
  textColor: '#333333',
  name: 'Bubbles',
};

export const BLOSSOM_THEME: IThemeState = {
  ...BUBBLES_THEME,
  primaryColor: '#EA6964',
  secondaryColor: '#E78C89',
  name: 'Blossom',
};

export const BUTTERCUP_THEME: IThemeState = {
  ...BUBBLES_THEME,
  primaryColor: '#4AB62C',
  secondaryColor: '#81CB71',
  name: 'Buttercup',
};

export const MOJO_JOJO_THEME: IThemeState = {
  primaryColor: '#4AB62C',
  secondaryColor: '#333333',
  textColor: '#ffffff',
  name: 'MojoJojo',
};

export const getTheme = (
  themeName: PossibleThemes = 'Bubbles',
): IThemeState => {
  switch (themeName) {
    case 'Bubbles':
      return BUBBLES_THEME;
    case 'Blossom':
      return BLOSSOM_THEME;
    case 'Buttercup':
      return BUTTERCUP_THEME;
    case 'MojoJojo':
      return MOJO_JOJO_THEME;
    default:
      return BUBBLES_THEME;
  }
};
