import { defaultTokens } from './defaultTokens';
import { initialState } from '../../store';

describe('defaultTokens', () => {
  it('should equal initialState theme', () => {
    expect(defaultTokens()).toEqual(initialState.tokens);
  });
});
