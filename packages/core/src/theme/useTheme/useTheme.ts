import { Theme } from '../../types';
import { store } from '../../store';

export function useTheme(): Theme {
  return store.getState().theme;
}
