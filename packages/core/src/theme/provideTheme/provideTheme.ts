import { createTheme } from '../createTheme/index';
import { Theme, ThemeOptions } from '../../types/index';
import { store, setTheme } from '../../store/index';

export function provideTheme(themeOptions: ThemeOptions = {}) {
  const theme: Theme = createTheme(themeOptions);
  store.dispatch(setTheme(theme));
}
