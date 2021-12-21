export type PossibleThemes = 'Bubbles' | 'Blossom' | 'Buttercup' | 'MojoJojo';

export interface IThemeState {
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  name: PossibleThemes;
}

export interface IThemeAction {
  type: string;
  payload: {
    newTheme: PossibleThemes;
  };
}
