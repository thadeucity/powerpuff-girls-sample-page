import { Reducer } from 'redux';
import { IThemeState } from './themeDTO';
import { getTheme } from './themeValues';

export const theme: Reducer<IThemeState> = (state, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return {
        ...state,
        ...getTheme(action?.payload?.newTheme),
      };
    default:
      return state || getTheme();
  }
};
