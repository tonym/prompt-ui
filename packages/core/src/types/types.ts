// Theme core pieces

export type Direction = 'ltr' | 'rtl';
export type Color = string;
export type SizeUnit = number;
export type Opacity = number;

export interface ColorRole {
  background: Color;
  text: Color;
  border: Color;
  hoverBackground: Color;
  disabledBackground: Color;
}

export interface ColorRoleOptions {
  background?: Color;
  text?: Color;
  border?: Color;
  hoverBackground?: Color;
  disabledBackground?: Color;
}

export interface ColorPalette {
  primary: ColorRole;
  secondary: ColorRole;
  danger: ColorRole;
  success: ColorRole;
  warning: ColorRole;
  info: ColorRole;
  neutral: ColorRole;
}

export interface ColorPaletteOptions {
  primary?: ColorRole;
  secondary?: ColorRole;
  danger?: ColorRole;
  success?: ColorRole;
  warning?: ColorRole;
  info?: ColorRole;
  neutral?: ColorRole;
}

export interface BorderRadius {
  default: SizeUnit;
  inner: SizeUnit;
}

export interface BorderRadiusOptions {
  default?: SizeUnit;
  inner?: SizeUnit;
}

export interface Border {
  radius: BorderRadius;
}

export interface BorderOptions {
  radius?: BorderRadiusOptions;
}

export interface Spacing {
  layout: SizeUnit;
  component: SizeUnit;
}

export interface SpacingOptions {
  layout?: SizeUnit;
  component?: SizeUnit;
}

export interface Theme {
  direction: Direction;
  color: ColorPalette;
  border: Border;
  spacing: Spacing;
}

export interface ThemeOptions {
  direction?: Direction;
  color?: ColorPaletteOptions;
  border?: BorderOptions;
  spacing?: SpacingOptions;
}

// Token-related types

export interface ThemeTokens {
  color: {
    primary: ColorRole;
    secondary: ColorRole;
    danger: ColorRole;
    success: ColorRole;
    warning: ColorRole;
    info: ColorRole;
    neutral: ColorRole;
  };
  border: {
    radius: BorderRadius;
  };
  spacing: {
    layout: SizeUnit;
    component: SizeUnit;
  };
}

// Store-related types

export const SET_THEME = 'SET_THEME';
export const SET_TOKENS = 'SET_TOKENS';

interface SetThemeAction {
  type: typeof SET_THEME;
  theme: Theme;
  [key: string]: any;
}

interface SetTokensAction {
  type: typeof SET_TOKENS;
  tokens: ThemeTokens;
  [key: string]: any;
}

export type ActionTypes = SetThemeAction | SetTokensAction;

export interface State {
  theme: Theme;
  tokens: ThemeTokens;
}
