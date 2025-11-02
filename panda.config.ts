// panda.config.ts
import { defineConfig } from '@pandacss/dev';
import { primitives } from './src/tokens/primitives';
import { semantic } from './src/tokens/semantic';

export default defineConfig({
  preflight: true,
  jsxFramework: 'react',
  hash: true,
  include: ['./src/**/*.{ts,tsx,js,jsx}'],

  // 모드 전환: html 혹은 body에 data-theme="light|dark" 토글
  conditions: {
    light: '[data-theme=light] &',
    dark: '[data-theme=dark] &',
  },

  theme: {
    tokens: primitives,

    /**
     * 의미(semantic) 토큰: 컴포넌트는 가급적 여기만 의존
     * - light/dark에서 값만 바꿔 UI 전체 톤을 교체
     */
    semanticTokens: semantic,
  },

  outdir: 'styled-system',
});
