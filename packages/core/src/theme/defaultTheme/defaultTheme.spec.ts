import { defaultTheme } from './defaultTheme';
import { initialState } from '../../store';
import { createTheme } from '../createTheme';

describe('defaultTheme', () => {
  it('should equal initialState theme', () => {
    expect(defaultTheme()).toEqual(initialState.theme);
  });

  it('should create a theme object', () => {
    const expectedTheme = createTheme();
    expect(typeof expectedTheme).toBe('object');
  });

  it('should have colors property in created theme', () => {
    const expectedTheme = createTheme();
    expect(expectedTheme).toHaveProperty('color');
  });
});
