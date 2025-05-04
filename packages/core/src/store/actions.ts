import { ActionTypes, SET_THEME, SET_TOKENS, Theme, ThemeTokens } from '../types/index';

export function setTheme(theme: Theme): ActionTypes {
  return { type: SET_THEME, theme };
}

export function setTokens(tokens: ThemeTokens): ActionTypes {
  return { type: SET_TOKENS, tokens };
}
