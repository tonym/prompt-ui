export type ButtonAppearance = 'solid' | 'outline' | 'ghost';

export type ButtonIntent = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';

export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  appearance?: ButtonAppearance;
  intent?: ButtonIntent;
  size?: ButtonSize;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
  [key: string]: unknown;
}
