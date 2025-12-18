/* eslint-disable @metamask/design-tokens/color-no-hex*/

/**
 * Common styles and variables
 */

import { TextStyle, ViewStyle } from 'react-native';

/**
 * Map of color names to HEX values
 */
export const colors = {
  blackTransparent: 'rgba(0, 0, 0, 0.5)',
  whiteTransparent: 'rgba(255, 255, 255, 0.7)',
  white: '#FFFFFF',
  transparent: 'transparent',
  overlay: 'rgba(242, 244, 246, 0.33)',
  // Do not change the values of applePay tokens unless noted by
  // https://developer.apple.com/design/human-interface-guidelines/apple-pay
  applePayBlack: '#000000',
  applePayWhite: '#FFFFFF',
  btnBlack: '#1C1E21',
  btnBlackText: '#FFFFFF',
  btnBlackInverse: 'rgba(60, 77, 157, 0.1)',
  modalScrollButton: '#ECEEFF',
  gettingStartedPageBackgroundColor: '#4105b6',
  gettingStartedTextColor: '#FFFFFF',
  gettingStartedPageBackgroundColorLightMode: '#FFFFFF',
  // OPN Wallet Onboarding Theme Colors
  opnPrimaryGradientStart: '#4105b6',
  opnPrimaryGradientEnd: '#6305b6',
  opnAccentBlue: '#2280cd',
  opnTextLight: '#f8fdf1',
  opnTextSecondary: '#b0efff',
  opnBackgroundDark: '#000000',
  opnBorderLight: 'rgba(61, 0, 181, 0.11)',
  opnPrimaryPurple: '#4105b6',
  // Light mode specific colors
  opnTitleDark: '#000000',          // Black text for light mode title
  opnSecondaryBorderLight: '#E0E0E0', // Light gray border for light mode
  opnTermsTextLight: '#666666',     // Gray text for light mode terms
  opnMutedGrey: '#666666',          // Muted grey for light mode
};

export const onboardingCarouselColors: Record<
  string,
  { color: string; background: string }
> = {
  one: {
    color: '#FFFFFF',
    background: '#4105b6',
  },
  two: {
    color: '#FFFFFF',
    background: '#6305b6',
  },
  three: {
    color: '#FFFFFF',
    background: '#2280cd',
  },
};

/**
 * Map of reusable base styles
 */
export const baseStyles: Record<string, ViewStyle> = {
  flexGrow: {
    flex: 1,
  },
  flexStatic: {
    flex: 0,
  },
};

/**
 * Map of reusable fonts
 */
export const fontStyles: Record<string, TextStyle> = {
  normal: {
    fontFamily: 'Geist Regular',
  },
  light: {
    fontFamily: 'Geist Regular',
  },
  thin: {
    fontFamily: 'Geist Regular',
  },
  bold: {
    fontFamily: 'Geist Bold',
  },
  medium: {
    fontFamily: 'Geist Medium',
  },
};
