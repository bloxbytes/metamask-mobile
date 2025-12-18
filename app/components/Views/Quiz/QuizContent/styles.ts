import { StyleSheet } from 'react-native';
import { Theme } from '../../../../util/theme/models';

const styleSheet = (params: { theme: Theme }) => {
  const { theme } = params;
  const { colors } = theme;

  return StyleSheet.create({
    screen: { justifyContent: 'center' },
    modal: {
      borderRadius: 10,
      marginHorizontal: 16,
    },
    container: {
      padding: 15,
      alignItems: 'center',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    headerText: {
      textAlign: 'center',
      flex: 18,
      color: colors.text.muted,
    },
    icon: {
      flex: 1,
    },
    spacer: {
      flex: 1,
    },
    title: {
      textAlign: 'center',
      marginVertical: 12,
    },
    content: {
      textAlign: 'center',
      marginVertical: 12,
      width: '100%',
    },
    image: {
      width: 300,
      height: 250,
    },
    bottomContainer: {
      width: '100%',
      marginTop: 25,
      marginBottom: 10,
    },
    button: {
      marginTop: 10,
      marginBottom: 5,
      width: '100%',
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
    // OPN Decorative Background Elements
    decorativeBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.1,
      pointerEvents: 'none',
    },
    decorativeCircle1: {
      position: 'absolute',
      top: '5%',
      left: -50,
      width: 150,
      height: 150,
      borderRadius: 75,
      backgroundColor: '#4105b6', // opnPrimaryGradientStart
    },
    decorativeCircle2: {
      position: 'absolute',
      bottom: '5%',
      right: -50,
      width: 150,
      height: 150,
      borderRadius: 75,
      backgroundColor: '#2280cd', // opnAccentBlue
    },
  });
};

export default styleSheet;
