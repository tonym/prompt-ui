import { provideTokens } from './provideTokens';
import { store } from '../../store';
import { defaultTokens } from '../defaultTokens';

describe('provideTokens', () => {
  it('should update the store with provided tokens', () => {
    const tokens = defaultTokens();
    provideTokens(tokens);
    const providedTokens = store.getState().tokens;
    expect(providedTokens).toEqual(tokens);
  });
});
