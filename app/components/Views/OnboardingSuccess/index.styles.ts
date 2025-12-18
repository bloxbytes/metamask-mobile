import { StyleSheet, Platform } from 'react-native';
import { ThemeColors } from '@metamask/design-tokens';

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: colors.background.default,
    },
    container: {
      flex: 1,
      paddingHorizontal: 16,
    },
    animationSection: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonSection: {
      paddingBottom: 4,
      alignItems: 'center',
      rowGap: 12,
    },
    textTitle: {
      marginTop: 25,
      marginBottom: 16,
      marginHorizontal: 16,
      textAlign: 'center',
      fontFamily:
        Platform.OS === 'android' ? 'MM Sans Regular' : 'MMSans-Regular',
    },
    footerLink: {
      paddingVertical: 8,
      alignItems: 'center',
    },
    // OPN Decorative Background Elements
    decorativeBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.15,
      pointerEvents: 'none',
    },
    decorativeCircle1: {
      position: 'absolute',
      top: '15%',
      left: -100,
      width: 250,
      height: 250,
      borderRadius: 125,
      backgroundColor: '#4105b6', // opnPrimaryGradientStart
    },
    decorativeCircle2: {
      position: 'absolute',
      bottom: '15%',
      right: -100,
      width: 250,
      height: 250,
      borderRadius: 125,
      backgroundColor: '#2280cd', // opnAccentBlue
    },
    logoContainer: {
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    logoWithRing: {
      borderWidth: 5,
      borderColor: colors.background.default === '#000000' || colors.background.default === '#0f112a' ? '#1a1d3a' : '#f2f4f6',
      borderRadius: 60,
    },
    doneButton: {
      backgroundColor: '#4105b6',
      borderColor: '#4105b6',
      borderWidth: 1,
      height: 54,
      borderRadius: 12,
      shadowColor: '#4105b2',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: colors.background.default === '#000000' || colors.background.default === '#0f112a' ? 0.5 : 0.3,
      shadowRadius: 8,
      elevation: 6,
    },
    doneButtonLabel: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
    },
  });

export default createStyles;
