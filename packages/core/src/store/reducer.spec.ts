import { reducer, initialState } from './reducer';
import { setTheme, setTokens } from './actions';
import { Theme } from '../types';
import { defaultTokens } from '../theme';

describe('Reducer', () => {
  it('should handle SET_THEME', () => {
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
    const newState = reducer(initialState, action);
    expect(newState.theme).toEqual(theme);
  });

  it('should handle SET_TOKENS', () => {
    const tokens = defaultTokens();
    const action = setTokens(tokens);
    const newState = reducer(initialState, action);
    expect(newState.tokens).toEqual(tokens);
  });
});
