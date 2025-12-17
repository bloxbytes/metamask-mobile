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
      //   default: '#FF6A00',
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
  },
};

const darkTheme: Theme = {
  ...baseDark,
  colors: {
    ...baseDark.colors,
    primary: {
      ...baseDark.colors.primary,
      default: '#FF6A00',
      inverse: baseDark.colors.primary.inverse,
    },
    background: {
      ...baseDark.colors.background,
      default: '#1d2449',
    },
  },
};

export { baseBrand as brandColor, darkTheme, lightTheme };
