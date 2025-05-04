import { generate } from './generate';
import { defaultTheme } from '../../theme';

const theme = defaultTheme();

describe('generateButton', () => {
  it('should generate a button with default props', () => {
    const button = generate({}, theme);
    expect(button.classes).toContain('appearance-solid');
  });

  it('should apply fullWidth correctly', () => {
    const button = generate({ fullWidth: true }, theme);
    expect(button.styles.width).toBe('100%');
  });

  it('should apply outline appearance with structured border', () => {
    const button = generate({ appearance: 'outline' }, theme);
    expect(typeof button.styles.border).toBe('object');
  });

  it('should apply disabled background if disabled', () => {
    const button = generate({ disabled: true }, theme);
    expect(button.styles.backgroundColor).toBe('color.primary.disabledBackground');
  });

  it('should apply correct intent color references', () => {
    const button = generate({ intent: 'primary' }, theme);
    expect(button.styles.color).toBe('color.primary.text');
  });
});
