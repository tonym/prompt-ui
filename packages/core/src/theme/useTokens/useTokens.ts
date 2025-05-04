import { store } from '../../store';
import { ThemeTokens } from '../../types';

export function useTokens(): ThemeTokens {
  return store.getState().tokens;
}
