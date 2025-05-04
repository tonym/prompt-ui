import { ButtonProps } from './types';
import { Theme } from '../../types';

/**
 * Generates a framework-agnostic Button structure + token-key-mapped styles.
 */
export function generate(props: ButtonProps, theme: Theme) {
  const {
    appearance = 'solid',
    intent = 'primary',
    size = 'medium',
    type = 'button',
    disabled = false,
    fullWidth = false,
    ...rest
  } = props;

  const resolvedStyles: Record<string, any> = {
    backgroundColor: disabled
      ? `color.${intent}.disabledBackground`
      : appearance === 'outline' || appearance === 'ghost'
        ? 'transparent'
        : `color.${intent}.background`,

    color: `color.${intent}.text`,
    borderRadius: 'border.radius.medium',
    paddingVertical: 'spacing.md',
    paddingHorizontal: 'spacing.lg',
    border:
      appearance === 'outline'
        ? {
            width: 'border.width.thin',
            style: 'solid',
            color: `color.${intent}.border`
          }
        : 'none',
    width: fullWidth ? '100%' : 'auto'
  };

  return {
    element: 'button',
    attributes: {
      type,
      disabled: disabled ? true : undefined,
      ...rest
    },
    classes: ['button', `appearance-${appearance}`, `intent-${intent}`, `size-${size}`, fullWidth ? 'full-width' : undefined].filter(
      Boolean
    ),
    styles: resolvedStyles
  };
}
