import { IThemeAction, PossibleThemes } from './themeDTO';

export const changeTheme = (newTheme: PossibleThemes): IThemeAction => ({
  type: 'CHANGE_THEME',
  payload: {
    newTheme,
  },
});
