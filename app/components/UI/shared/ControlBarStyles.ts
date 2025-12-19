import { StyleSheet, Platform } from 'react-native';
import { Theme } from '../../../util/theme/models';

const GLASS_BG_COLOR = '#1a1d3a';
const GLASS_BORDER_COLOR = 'rgba(65, 5, 182, 0.2)';

/**
 * Shared styles for control bar components
 * @param params Style sheet params.
 * @param params.theme App theme from ThemeContext.
 * @returns StyleSheet object.
 */
const createControlBarStyles = (params: { theme: Theme }) => {
  const {
    theme: { colors },
  } = params;

  return StyleSheet.create({
    actionBarWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 8,
    },
    controlButtonOuterWrapper: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    controlButtonInnerWrapper: {
      flexDirection: 'row',
      gap: 12,
      alignItems: 'center',
    },
    controlButton: {
      backgroundColor: params.theme.themeAppearance === 'dark'
        ? GLASS_BG_COLOR 
        : colors.background.default,
      borderColor: params.theme.themeAppearance === 'dark'
        ? GLASS_BORDER_COLOR 
        : colors.border.muted,
      borderWidth: params.theme.themeAppearance === 'dark' ? 1 : 2,
      borderRadius: 12,
      maxWidth: '80%',
      paddingHorizontal: 12,
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: (params.theme.themeAppearance === 'dark') ? 0.1 : 0.08,
          shadowRadius: (params.theme.themeAppearance === 'dark') ? 6 : 4,
        },
        android: {
          elevation: (params.theme.themeAppearance === 'dark') ? 8 : 4,
        },
      }),
    },
    controlButtonDisabled: {
      backgroundColor: params.theme.themeAppearance === 'dark'
        ? GLASS_BG_COLOR 
        : colors.background.default,
      borderColor: params.theme.themeAppearance === 'dark'
        ? GLASS_BORDER_COLOR 
        : colors.border.muted,
      marginRight: 4,
      borderWidth: params.theme.themeAppearance === 'dark' ? 1 : 2,
      borderRadius: 12,
      maxWidth: '80%',
      paddingHorizontal: 12,
      opacity: 0.5,
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: (params.theme.themeAppearance === 'dark') ? 0.1 : 0.08,
          shadowRadius: (params.theme.themeAppearance === 'dark') ? 6 : 4,
        },
        android: {
          elevation: (params.theme.themeAppearance === 'dark') ? 8 : 4,
        },
      }),
    },
    controlButtonText: {
      color: colors.text.default,
    },
    controlIconButton: {
      backgroundColor: colors.background.default,
    },
    networkManagerWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
  });
};

export default createControlBarStyles;
