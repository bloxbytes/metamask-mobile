import { StyleSheet, Dimensions, Platform } from 'react-native';
import { fontStyles } from '../../../styles/common';

const { height } = Dimensions.get('window');

// TODO: Replace "any" with type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
    },
    mainWrapper: {
      backgroundColor: colors.background.default,
      flex: 1,
    },
    wrapper: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      rowGap: 16,
    },
    selectedWord: {
      backgroundColor: colors.background.alternative,
      borderWidth: 0,
    },
    selectedWordText: {
      color: colors.text.default,
    },
    statusContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: 16,
      padding: 16,
      width: '100%',
    },
    missingWords: {
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    missingWord: {
      paddingVertical: 4,
      paddingHorizontal: 8,
      margin: 8,
      borderRadius: 8,
      backgroundColor: colors.background.default,
      borderWidth: 1,
      borderColor: colors.primary.default,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      color: colors.primary.default,
    },
    missingWordText: {
      color: colors.primary.default,
    },
    missingWordTextSelected: {
      color: colors.text.default,
    },
    gridItem: {
      paddingVertical: 4,
      paddingHorizontal: 8,
      borderRadius: 8,
      backgroundColor: colors.background.default,
      borderWidth: 1,
      borderColor: colors.border.muted,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: Platform.select({
        ios: 4,
        macos: 4,
        default: 3,
      }),
      height: 40,
      fontSize: 14,
      color: colors.text.default,
      ...fontStyles.normal,
      opacity: 0.5,
      margin: Platform.select({
        ios: 4,
        macos: 4,
        default: 3,
      }),
    },
    gridContainer: {
      flex: 1,
      flexDirection: 'column',
      gap: 4,
    },
    gridItemIndex: {
      color: colors.text.alternative,
      ...fontStyles.normal,
      fontSize: 14,
    },
    gridItemText: {
      width: '95%',
    },
    content: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      rowGap: 16,
      height: height - 290,
    },
    headerLeft: {
      marginLeft: 16,
    },
    statusButton: {
      width: '100%',
    },
    statusDescription: {
      textAlign: 'left',
      alignSelf: 'flex-start',
      width: '100%',
    },
    actionView: {
      flex: 1,
    },
    buttonContainer: {
      paddingHorizontal: 0,
      marginBottom: Platform.OS === 'android' ? 16 : 0,
    },
    logo: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
      marginTop: 8,
    },
    logoImage: {
      width: 60,
      height: 60,
      borderRadius: 30,
    },
    logoWithRing: {
      borderWidth: 2,
      borderColor: colors.background.default === '#000000' || colors.background.default === '#0f112a' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
    },
    headerContainer: {
      alignItems: 'center',
      marginBottom: 16,
    },
    centeredText: {
      textAlign: 'center',
    },
    confirmButton: {
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
    confirmButtonDisabled: {
      backgroundColor: colors.background.default === '#000000' || colors.background.default === '#0f112a' ? '#1d2449' : '#e0e0e0',
      borderColor: colors.background.default === '#000000' || colors.background.default === '#0f112a' ? '#1d2449' : '#e0e0e0',
    },
    confirmButtonLabel: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
    },
    emptySlot: {
      backgroundColor: colors.background.default,
      opacity: 1,
      borderColor: colors.background.default === '#000000' || colors.background.default === '#0f112a' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
      borderWidth: 2,
    },
    selectedSlotBox: {
      borderColor: '#2280cd',
      borderWidth: 2,
    },
    seedPhraseContainer: {
      backgroundColor: colors.background.default === '#000000' || colors.background.default === '#0f112a' ? colors.background.section : colors.background.muted,
      borderRadius: 10,
      height: 'auto',
      flexDirection: 'column',
      marginBottom: 16,
      padding: 16,
      gap: 4,
      borderWidth: colors.background.default === '#000000' || colors.background.default === '#0f112a' ? 1 : 0,
      borderColor: 'rgba(255, 255, 255, 0.05)',
    },
  });

export default createStyles;
