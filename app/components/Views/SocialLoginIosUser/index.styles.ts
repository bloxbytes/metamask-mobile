import { StyleSheet } from 'react-native';
import Device from '../../../util/device';
import { ThemeColors } from '@metamask/design-tokens';

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: colors.background.default,
    },
    root: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      paddingHorizontal: 20,
      rowGap: Device.isMediumDevice() ? 16 : 24,
    },
    ctaContainer: {
      flexDirection: 'column',
      rowGap: Device.isMediumDevice() ? 12 : 16,
      marginBottom: 32,
      width: '100%',
    },
    foxAnimation: {
      alignSelf: 'center',
      width: Device.isMediumDevice() ? 180 : 240,
      height: Device.isMediumDevice() ? 180 : 240,
    },
    largeFoxWrapper: {
      width: Device.isMediumDevice() ? 180 : 240,
      height: Device.isMediumDevice() ? 180 : 240,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 'auto',
      padding: Device.isMediumDevice() ? 30 : 40,
      marginTop: 16,
    },
    animationContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      flex: 1,
      rowGap: Device.isMediumDevice() ? 24 : 32,
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
    primaryButton: {
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
    primaryButtonLabel: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
    },
  });

export default createStyles;
