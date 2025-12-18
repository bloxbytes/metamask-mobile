/* eslint-disable metamask/design-tokens/color-no-hex */

import {
  brandColor as baseBrand,
  darkTheme as baseDark,
  lightTheme as baseLight,
  type Theme,
} from '@metamask/design-tokens';

const lightTheme: Theme = {
  ...baseLight,
  colors: {
    ...baseLight.colors,
    primary: {
      ...baseLight.colors.primary,
      default: '#4105b6',
      inverse: baseLight.colors.primary.inverse,
    },
    background: {
      ...baseLight.colors.background,
      //   default: '#0f112a',
      //   default: '#1d2449',
      default: '#FFFFFF',
    },
    text: {
      ...baseLight.colors.text,
      default: baseLight.colors.text.default,
    },
    error: {
      ...baseLight.colors.error,
      default: '#dc2626', // red-600
      muted: '#fef2f2', // red-50
      inverse: '#fca5a5', // red-300
    },
  },
};

const darkTheme: Theme = {
  ...baseDark,
  colors: {
    ...baseDark.colors,
    primary: {
      ...baseDark.colors.primary,
      default: '#4105b6',
      inverse: baseDark.colors.primary.inverse,
    },
    background: {
      ...baseDark.colors.background,
      default: '#0f112a',
      // default: 'transparent',
      section: '#1a1d3a',
    },
    text: {
      ...baseDark.colors.text,
      default: '#f8fdf1',
      alternative: '#b0efff',
      muted: '#4f5262',
    },
    error: {
      ...baseDark.colors.error,
      default: '#f87171', // red-400
      muted: 'rgba(239, 68, 68, 0.2)', // red-500/20
      inverse: 'rgba(248, 113, 113, 0.3)', // red-400/30 (using inverse for border in this specific case context)
    },
  },
};

export { baseBrand as brandColor, darkTheme, lightTheme };
