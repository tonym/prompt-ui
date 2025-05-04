import { Theme, ThemeOptions, ThemeTokens } from '../../types';
import { useTokens } from '../useTokens';
import { deepMerge } from '../deepMerge';

export function createTheme(themeOptions: ThemeOptions = {}): Theme {
  const tokens: ThemeTokens = useTokens();

  const composedTheme = {
    direction: 'ltr',
    color: {
      primary: {
        background: tokens.color.primary.background,
        text: tokens.color.primary.text,
        border: tokens.color.primary.border,
        hoverBackground: tokens.color.primary.hoverBackground,
        disabledBackground: tokens.color.primary.disabledBackground
      },
      secondary: {
        background: tokens.color.secondary.background,
        text: tokens.color.secondary.text,
        border: tokens.color.secondary.border,
        hoverBackground: tokens.color.secondary.hoverBackground,
        disabledBackground: tokens.color.secondary.disabledBackground
      },
      danger: {
        background: tokens.color.danger.background,
        text: tokens.color.danger.text,
        border: tokens.color.danger.border,
        hoverBackground: tokens.color.danger.hoverBackground,
        disabledBackground: tokens.color.danger.disabledBackground
      },
      success: {
        background: tokens.color.success.background,
        text: tokens.color.success.text,
        border: tokens.color.success.border,
        hoverBackground: tokens.color.success.hoverBackground,
        disabledBackground: tokens.color.success.disabledBackground
      },
      warning: {
        background: tokens.color.warning.background,
        text: tokens.color.warning.text,
        border: tokens.color.warning.border,
        hoverBackground: tokens.color.warning.hoverBackground,
        disabledBackground: tokens.color.warning.disabledBackground
      },
      info: {
        background: tokens.color.info.background,
        text: tokens.color.info.text,
        border: tokens.color.info.border,
        hoverBackground: tokens.color.info.hoverBackground,
        disabledBackground: tokens.color.info.disabledBackground
      },
      neutral: {
        background: tokens.color.neutral.background,
        text: tokens.color.neutral.text,
        border: tokens.color.neutral.border,
        hoverBackground: tokens.color.neutral.hoverBackground,
        disabledBackground: tokens.color.neutral.disabledBackground
      }
    },
    border: {
      radius: {
        default: tokens.border.radius.default,
        inner: tokens.border.radius.inner
      }
    },
    spacing: {
      layout: tokens.spacing.layout,
      component: tokens.spacing.component
    }
  };

  return deepMerge(composedTheme, themeOptions);
}
