import { createTheme } from './createTheme';
import { provideTokens } from '../provideTokens/provideTokens';
import { defaultTokens } from '../defaultTokens/defaultTokens';

describe('createTheme', () => {
  beforeAll(() => {
    provideTokens(defaultTokens());
  });

  it('should have ltr direction', () => {
    const theme = createTheme();
    expect(theme.direction).toBe('ltr');
  });

  it('should use the correct primary background color', () => {
    const theme = createTheme();
    expect(theme.color.primary.background).toBe(defaultTokens().color.primary.background);
  });

  it('should use the correct danger text color', () => {
    const theme = createTheme();
    expect(theme.color.danger.text).toBe(defaultTokens().color.danger.text);
  });

  it('should use the correct border default radius', () => {
    const theme = createTheme();
    expect(theme.border.radius.default).toBe(defaultTokens().border.radius.default);
  });

  it('should use the correct layout spacing', () => {
    const theme = createTheme();
    expect(theme.spacing.layout).toBe(defaultTokens().spacing.layout);
  });
});
