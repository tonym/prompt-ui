import { initialState } from '../../store';
import { ThemeTokens } from '../../types';

export function defaultTokens(): ThemeTokens {
  return initialState.tokens;
}
