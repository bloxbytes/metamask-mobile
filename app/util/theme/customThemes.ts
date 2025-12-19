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
      default: '#FFFFFF',
    },
    text: {
      ...baseLight.colors.text,
      default: '#000000', // Black for light mode
      alternative: '#6b7280', // Grey for wallet address, version, etc.
      muted: '#9ca3af', // Lighter grey
    },
    border: {
      ...baseLight.colors.border,
      muted: '#e0e0e0', // Grey border for cards
    },
    icon: {
      ...baseLight.colors.icon,
      default: '#4105b6', // OPN Purple for icons in light mode
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
      section: '#1a1d3a',
    },
    text: {
      ...baseDark.colors.text,
      default: '#f8fdf1', // White for dark mode
      alternative: 'rgba(176, 239, 255, 0.6)', // Bluish 60% for wallet address
      muted: 'rgba(176, 239, 255, 0.7)', // Bluish 70% for section titles, subtitles
    },
    border: {
      ...baseDark.colors.border,
      muted: 'rgba(65, 5, 182, 0.3)', // Purplish border for cards
    },
    icon: {
      ...baseDark.colors.icon,
      default: '#b0efff', // Bluish for icons
      alternative: 'rgba(176, 239, 255, 0.7)', // Bluish 70% for chevrons
    },
    error: {
      ...baseDark.colors.error,
      default: '#f87171', // red-400
      muted: 'rgba(239, 68, 68, 0.2)', // red-500/20
      inverse: 'rgba(248, 113, 113, 0.3)', // red-400/30
    },
  },
};

export { baseBrand as brandColor, darkTheme, lightTheme };
