export const semantic = {
  colors: {
    // 텍스트
    'fg.default': {
      value: { base: '{colors.gray.800}', _dark: '{colors.gray.100}' },
    },
    'fg.muted': {
      value: { base: '{colors.gray.600}', _dark: '{colors.gray.300}' },
    },
    'fg.onAccent': {
      value: { base: '{colors.white}', _dark: '{colors.white}' },
    },

    // 배경
    'bg.primary': {
      value: { base: '{colors.purple.500}', _dark: '{colors.purple.400}' },
    },
    'bg.secondary': {
      value: { base: '{colors.purple.600}', _dark: '{colors.purple.500}' },
    },
    'bg.tertiary': {
      value: { base: '{colors.purple.700}', _dark: '{colors.purple.600}' },
    },
    'bg.transparent': {
      value: { base: 'transparent', _dark: 'transparent' },
    },
    'bg.white': {
      value: { base: '{colors.white}', _dark: '{colors.white}' },
    },
    'bg.black': {
      value: { base: '{colors.black}', _dark: '{colors.black}' },
    },

    // 엑센트(Primary = Purple)
    'accent.solid': {
      value: { base: '{colors.primary.600}', _dark: '{colors.primary.500}' },
    },
    'accent.hover': {
      value: { base: '{colors.primary.700}', _dark: '{colors.primary.600}' },
    },
    'accent.active': {
      value: { base: '{colors.primary.800}', _dark: '{colors.primary.700}' },
    },
    'accent.subtle': {
      value: {
        base: 'rgba(138, 82, 255, 0.10)',
        _dark: 'rgba(167, 125, 255, 0.16)',
      },
    },
    'accent.fg': {
      value: { base: '{colors.primary.600}', _dark: '{colors.primary.500}' },
    },
    'accent.outline': {
      value: { base: '{colors.primary.600}', _dark: '{colors.primary.500}' },
    },

    // 보더/포커스
    'border.default': {
      value: { base: '{colors.gray.200}', _dark: '{colors.gray.700}' },
    },
    'border.muted': {
      value: { base: '{colors.gray.100}', _dark: '{colors.gray.600}' },
    },
    'focus.ring': {
      value: { base: '{colors.purple.500}', _dark: '{colors.purple.400}' },
    },

    // 비활성화 상태
    'disabled.bg': {
      value: { base: '{colors.gray.100}', _dark: '{colors.gray.800}' },
    },
    'disabled.fg': {
      value: { base: '{colors.gray.400}', _dark: '{colors.gray.500}' },
    },
    'disabled.border': {
      value: { base: '{colors.gray.200}', _dark: '{colors.gray.700}' },
    },

    // 상태
    'danger.solid': {
      value: { base: '{colors.red.600}', _dark: '{colors.red.500}' },
    },
    'success.solid': {
      value: { base: '{colors.green.600}', _dark: '{colors.green.500}' },
    },
    'warning.solid': {
      value: { base: '{colors.yellow.600}', _dark: '{colors.yellow.600}' },
    },
  },

  radii: {
    control: { value: '{radii.md}' },
    card: { value: '{radii.lg}' },
    pill: { value: '{radii.full}' },
  },

  shadows: {
    elevation: { value: '{shadows.md}' },
  },
};
