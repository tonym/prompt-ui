import { initialState } from '../../store/reducer';
import { Theme } from '../../types/types';

export function defaultTheme(): Theme {
  return initialState.theme;
}
