import { createStore } from 'redux';
import { rootReducer } from './modules/rootReducer';

import { IThemeState } from './modules/theme/themeDTO';

export interface IState {
  theme: IThemeState;
}

export const store = createStore(rootReducer);
