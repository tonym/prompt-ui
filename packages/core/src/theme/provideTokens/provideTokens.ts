import { store, setTokens } from '../../store';
import { ThemeTokens } from '../../types';

export function provideTokens(tokens: ThemeTokens): void {
  store.dispatch(setTokens(tokens));
}
