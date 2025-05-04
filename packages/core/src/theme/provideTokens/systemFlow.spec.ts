import { provideTokens } from './provideTokens';
import { provideTheme } from '../provideTheme';
import { createTheme } from '../createTheme';
import { useTokens } from '../useTokens';
import { store } from '../../store';
import { defaultTokens } from '../defaultTokens';

describe('Full system smoke test', () => {
  it('should provide tokens, create theme, and update store correctly', () => {
    // Step 1: Provide tokens
    const tokens = defaultTokens();
    provideTokens(tokens);
    const providedTokens = store.getState().tokens;
    expect(providedTokens).toEqual(tokens);

    // Step 2: Read tokens
    const tokensFromStore = useTokens();
    expect(tokensFromStore).toEqual(tokens);

    // Step 3: Create theme
    const theme = createTheme();
    expect(theme.color.primary.background).toBe(tokens.color.primary.background);

    // Step 4: Provide theme to store
    provideTheme(); // No overrides for this test
    const providedTheme = store.getState().theme;
    expect(providedTheme.color.primary.background).toBe(theme.color.primary.background);

    // Step 5: Everything matches
    expect(store.getState()).toEqual({
      tokens,
      theme: providedTheme
    });
  });
});
