export const primitives = {
  colors: {
    // 기본 그레이 (중립)
    gray: {
      25: { value: '#FCFDFE' },
      50: { value: '#F8FAFC' },
      100: { value: '#F1F5F9' },
      200: { value: '#E2E8F0' },
      300: { value: '#CBD5E1' },
      400: { value: '#94A3B8' },
      500: { value: '#64748B' },
      600: { value: '#475569' },
      700: { value: '#334155' },
      800: { value: '#1F2937' },
      900: { value: '#0F172A' },
    },

    /**
     * PRIMARY: Purple 계열
     * - 500을 메인 색으로 사용
     * - 600/700은 Hover/Pressed 용도로 대비 강화
     * - 50/100은 Subtle 배경(Chip/Badge/Selected)용
     *
     * 팁) 필요하면 950(아주 진한 보라)도 추가 가능
     */
    purple: {
      25: { value: '#FAF7FF' },
      50: { value: '#F4EFFF' },
      100: { value: '#EBE1FF' },
      200: { value: '#D8C4FF' },
      300: { value: '#C4A6FF' },
      400: { value: '#A77DFF' },
      500: { value: '#8A52FF' }, // Primary Base (선명, 과하지 않음)
      600: { value: '#733FE6' }, // Hover
      700: { value: '#5C33BF' }, // Active
      800: { value: '#482A99' },
      900: { value: '#351F73' },
    },

    // 브랜드 Primary 별칭 (필요 시 다른 팔레트로 교체하기 쉽게 분리)
    primary: {
      25: { value: '{colors.purple.25}' },
      50: { value: '{colors.purple.50}' },
      100: { value: '{colors.purple.100}' },
      200: { value: '{colors.purple.200}' },
      300: { value: '{colors.purple.300}' },
      400: { value: '{colors.purple.400}' },
      500: { value: '{colors.purple.500}' },
      600: { value: '{colors.purple.600}' },
      700: { value: '{colors.purple.700}' },
      800: { value: '{colors.purple.800}' },
      900: { value: '{colors.purple.900}' },
    },

    // 상태 색 (원하면 나중에 브랜드 톤에 맞춰 조정)
    red: {
      50: { value: '#FEF2F2' },
      500: { value: '#EF4444' },
      600: { value: '#DC2626' },
    },
    green: {
      50: { value: '#F0FDF4' },
      500: { value: '#22C55E' },
      600: { value: '#16A34A' },
    },
    yellow: {
      50: { value: '#FFFBEB' },
      500: { value: '#F59E0B' },
      600: { value: '#D97706' },
    },
    white: { value: '#FFFFFF' },
    black: { value: '#000000' },
  },

  fonts: {
    sans: {
      value:
        'Inter, Pretendard, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    },
    mono: {
      value:
        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
  },

  // 스케일은 깔끔한 UI를 위해 적당히 촘촘하게
  spacing: {
    0: { value: '0' },
    1: { value: '4px' },
    2: { value: '8px' },
    3: { value: '12px' },
    4: { value: '16px' },
    5: { value: '20px' },
    6: { value: '24px' },
    8: { value: '32px' },
    10: { value: '40px' },
    12: { value: '48px' },
    16: { value: '64px' },
  },

  fontSizes: {
    xs: { value: '0.75rem' }, // 12
    sm: { value: '0.875rem' }, // 14
    md: { value: '1rem' }, // 16
    lg: { value: '1.125rem' }, // 18
    xl: { value: '1.25rem' }, // 20
    '2xl': { value: '1.5rem' }, // 24
    '3xl': { value: '1.875rem' }, // 30
  },

  lineHeights: {
    tight: { value: '1.25' },
    normal: { value: '1.5' },
    relaxed: { value: '1.7' },
  },

  radii: {
    none: { value: '0' },
    xs: { value: '4px' },
    sm: { value: '6px' },
    md: { value: '8px' },
    lg: { value: '12px' },
    xl: { value: '16px' },
    '2xl': { value: '20px' },
    full: { value: '9999px' },
  },

  shadows: {
    sm: { value: '0 1px 2px rgba(0,0,0,0.06)' },
    md: { value: '0 4px 10px rgba(0,0,0,0.10)' },
    lg: { value: '0 10px 24px rgba(0,0,0,0.14)' },
  },

  durations: {
    fast: { value: '100ms' },
    normal: { value: '200ms' },
    slow: { value: '300ms' },
  },

  easings: {
    standard: { value: 'cubic-bezier(0.2, 0, 0, 1)' },
    emphasized: { value: 'cubic-bezier(0.2, 0, 0, 1.2)' },
  },

  zIndex: {
    base: { value: '0' },
    header: { value: '10' },
    overlay: { value: '1000' },
    toast: { value: '1100' },
    modal: { value: '1200' },
  },
};
