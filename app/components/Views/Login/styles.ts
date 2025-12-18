import { Theme } from '../../../util/theme/models';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import Device from '../../../util/device';
import { fontStyles } from '../../../styles/common';
const deviceHeight = Device.getDeviceHeight();
const breakPoint = deviceHeight < 700;

const styleSheet = (params: { theme: Theme }) => {
  const { theme } = params;
  const { colors, themeAppearance } = theme;

  return StyleSheet.create({
    mainWrapper: {
      paddingTop: Platform.select({
        android: StatusBar.currentHeight ?? 0,
        default: 0,
      }),
      flex: 1,
    },
    wrapper: {
      flex: 1,
    },
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100%',
      paddingHorizontal: 24,
      paddingTop: 80,
    },
    scrollContentContainer: {
      flex: 1,
    },
    foxAnimationWrapper: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 200,
    },
    foxWrapper: {
      justifyContent: 'center',
      alignSelf: 'center',
      width: Device.isIos() ? 175 : 150,
      height: Device.isIos() ? 175 : 150,
      marginTop: 48,
    },
    image: {
      alignSelf: 'center',
      width: Device.isIos() ? 175 : 150,
      height: Device.isIos() ? 175 : 150,
    },
    title: {
      textAlign: 'center',
      marginVertical: 24,
    },
    field: {
      flexDirection: 'column',
      width: '100%',
      rowGap: 8,
      marginTop: 24,
      justifyContent: 'flex-start',
      marginBottom: 8,
    },
    ctaWrapper: {
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
    },

    footer: {
      marginTop: 32,
      alignItems: 'center',
    },
    unlockButton: {
      marginTop: 16,
      backgroundColor: '#4105b6',
      borderColor: '#4105b6',
      borderWidth: 1,
      height: 54,
      borderRadius: 12,
      shadowColor: '#4105b2',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: theme.themeAppearance === 'dark' ? 0.5 : 0.3,
      shadowRadius: 8,
      elevation: 6,
    },
    unlockButtonDisabled: {
      backgroundColor: themeAppearance === 'dark' ? '#1d2449' : '#e0e0e0',
      borderColor: themeAppearance === 'dark' ? '#1d2449' : '#e0e0e0',
    },
    unlockButtonLabel: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
    },
    // OPN Logo styles
    logoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 24,
    },
    logo: {
      width: 120,
      height: 120,
      borderRadius: 60,
    },
    logoWithRing: {
      borderWidth: 2,
      borderColor: 'rgba(61, 0, 181, 0.11)',
    },
    // Header with title/subtitle
    headerContainer: {
      alignItems: 'center',
      marginBottom: 24,
    },
    goBack: {
      marginVertical: 16,
      alignSelf: 'center',
      color: themeAppearance === 'dark' ? '#b0efff' : '#4105b6',
    },
    biometrics: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 30,
    },
    biometryLabel: {
      flex: 1,
      fontSize: 16,
      color: colors.text.default,
      ...fontStyles.normal,
    },
    biometrySwitch: {
      flex: 0,
    },
    cant: {
      width: 280,
      alignSelf: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    areYouSure: {
      width: '100%',
      padding: breakPoint ? 16 : 24,
      justifyContent: 'center',
      alignSelf: 'center',
    },
    heading: {
      marginHorizontal: 6,
      color: colors.text.default,
      ...fontStyles.bold,
      fontSize: 20,
      textAlign: 'center',
      lineHeight: breakPoint ? 24 : 26,
    },
    red: {
      marginHorizontal: 24,
      color: colors.error.default,
    },
    warningText: {
      ...fontStyles.normal,
      textAlign: 'center',
      fontSize: 14,
      lineHeight: breakPoint ? 18 : 22,
      color: colors.text.default,
      marginTop: 20,
    },
    warningIcon: {
      alignSelf: 'center',
      color: colors.error.default,
      marginVertical: 10,
    },
    bold: {
      ...fontStyles.bold,
    },
    delete: {
      marginBottom: 20,
    },
    deleteWarningMsg: {
      ...fontStyles.normal,
      fontSize: 16,
      lineHeight: 20,
      marginTop: 10,
      color: colors.error.default,
    },
    oauthContentWrapper: {
      width: '100%',
      alignItems: 'center',
      marginTop: Platform.select({
        ios: -200,
        android: -180,
      }),
    },
    input: {
      width: '100%',
    },
    labelContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    hintText: {
      textAlign: 'left',
    },
    helperTextContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      rowGap: 2,
      alignSelf: 'flex-start',
    },
  });
};

export default styleSheet;
