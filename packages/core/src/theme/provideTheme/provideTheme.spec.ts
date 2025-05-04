import { provideTheme } from './provideTheme';
import { useTheme } from '../useTheme';
import { ThemeOptions } from '../../types';
import { createTheme } from '../createTheme';

describe('provideTheme', () => {
  it('should provide a theme', () => {
    provideTheme();
    const providedTheme = useTheme();
    const expectedTheme = createTheme();
    expect(providedTheme).toEqual(expectedTheme);
  });

  it('should provide a theme from theme options', () => {
    const themeOptions: ThemeOptions = {
      direction: 'rtl'
    };
    provideTheme(themeOptions);
    const providedTheme = useTheme();
    const expectedTheme = createTheme(themeOptions);
    expect(providedTheme).toEqual(expectedTheme);
  });
});
