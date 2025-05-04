import { setTheme, setTokens } from './actions';
import { Theme } from '../types';
import { defaultTokens } from '../theme';

describe('Store Actions', () => {
  it('should create a setTheme action', () => {
    const theme = {
      color: {
        primary: {
          background: '#000',
          text: '#fff'
        }
      },
      border: {
        radius: {
          default: 4
        }
      },
      spacing: {
        layout: 8,
        component: 8
      },
      direction: 'ltr'
    } as Theme;

    const action = setTheme(theme);
    expect(action).toEqual({ type: 'SET_THEME', theme });
  });

  it('should create a setTokens action', () => {
    const tokens = defaultTokens(); // or mock manually if you prefer
    const action = setTokens(tokens);
    expect(action).toEqual({ type: 'SET_TOKENS', tokens });
  });
});
