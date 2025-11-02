import { cva } from '../../styled-system/css';

export const buttonRecipe = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2',
    px: '4',
    py: '2',
    borderRadius: 'control',
    borderWidth: '1px',
    borderStyle: 'solid',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    _focusVisible: {
      outlineWidth: '2px',
      outlineStyle: 'solid',
      outlineColor: 'focus.ring',
      outlineOffset: '2px',
    },
    _disabled: {
      cursor: 'not-allowed',
      bg: 'disabled.bg',
      color: 'disabled.fg',
      borderColor: 'disabled.border',
    },
  },
  variants: {
    variant: {
      solid: {
        bg: 'bg.primary',
        color: 'fg.onAccent',
        borderColor: 'bg.primary',
        _hover: { bg: 'bg.secondary' },
        _active: { bg: 'bg.tertiary' },
      },
      outline: {
        bg: 'bg.transparent',
        color: 'accent.fg',
        borderColor: 'accent.outline',
        _hover: { bg: 'accent.subtle' },
      },
      ghost: {
        bg: 'bg.transparent',
        color: 'accent.fg',
        borderColor: 'bg.transparent',
        _hover: { bg: 'accent.subtle' },
      },
    },
    size: {
      small: {
        px: '3',
        py: '1',
      },
      medium: {
        px: '4',
        py: '2',
      },
      large: {
        px: '5',
        py: '3',
      },
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'medium',
  },
});
