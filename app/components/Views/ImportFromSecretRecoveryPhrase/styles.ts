import { StyleSheet, Platform } from 'react-native';
import { scale } from 'react-native-size-matters';
import { fontStyles, colors as importedColors } from '../../../styles/common';

// TODO: Replace "any" with type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createStyles = (colors: any, themeAppearance: 'light' | 'dark') =>
  StyleSheet.create({
    root: {
      backgroundColor: colors.background.default,
      flex: 1,
    },
    wrapper: {
      flexGrow: 1,
      paddingHorizontal: 16,
    },
    importSrpContainer: {
      marginTop: 6,
    },
    description: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    seedPhraseRoot: {
      flexDirection: 'column',
      gap: 4,
      marginBottom: 24,
    },
    seedPhraseContainer: {
      paddingTop: 16,
      backgroundColor: colors.background.section,
      borderRadius: 10,
      marginTop: 16,
      minHeight: 264,
      maxHeight: 'auto',
    },
    seedPhraseInnerContainer: {
      paddingHorizontal: Platform.select({
        ios: 16,
        macos: 16,
        default: 14,
      }),
    },
    seedPhraseDefaultInputPlaceholder: {
      fontSize: 14,
      ...fontStyles.normal,
    },
    seedPhraseContainerCta: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginTop: 'auto',
    },
    seedPhraseDefaultInput: {
      borderWidth: 0,
      paddingHorizontal: 0,
      display: 'flex',
      flex: 1,
      backgroundColor: importedColors.transparent,
    },
    textAreaInput: {
      display: 'flex',
      backgroundColor: importedColors.transparent,
      fontSize: 16,
      color: colors.text.alternative,
      ...fontStyles.normal,
      height: 66,
    },
    seedPhraseInputContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 40,
      borderWidth: 1,
      borderColor: themeAppearance === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
      borderRadius: 8,
      paddingHorizontal: 6,
      paddingVertical: 4,
      backgroundColor: colors.background.default,
      margin: 2,
      columnGap: 8,
    },
    inputNumber: {
      color: colors.text.muted,
      fontSize: 14,
      ...fontStyles.medium,
    },
    seedPhraseInput: {
      margin: 3,
    },
    clearButton: {
      width: '100%',
      borderWidth: 0,
      color: colors.text.muted,
      padding: 0,
      paddingVertical: 0,
      paddingHorizontal: 0,
    },
    pasteButton: {
      paddingHorizontal: 16,
      paddingVertical: 16,
      textAlign: 'center',
    },
    pasteText: {
      textAlign: 'right',
      paddingTop: 12,
      paddingBottom: 16,
      alignSelf: 'flex-end',
    },
    seedPhraseInputFocused: {
      borderColor: themeAppearance === 'light' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.3)',
      borderWidth: 1,
    },
    seedPhraseCtaContainer: {
      width: '100%',
      flexDirection: 'column',
      gap: 16,
    },
    field: {
      position: 'relative',
      flexDirection: 'column',
      gap: 8,
    },
    passwordStrengthLabel: {
      height: 20,
      fontSize: scale(10),
      color: colors.text.default,
      ...fontStyles.normal,
    },
    input: {
      paddingVertical: Platform.select({
        ios: 4,
        macos: 4,
        default: 0,
      }),
      borderRadius: 8,
      backgroundColor: colors.background.default,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: 40,
      fontSize: 16,
      color: colors.text.default,
      ...fontStyles.normal,
      textAlignVertical: 'center',
      paddingLeft: 8,
      overflow: 'hidden', // Ensure content doesn't overflow
    },
    seedPhraseInputItem: {
      width: '31.33%', // 100% / 3 = 33.33%, minus some space
      marginRight: '3%', // Space between columns
      marginBottom: 8,
      flex: 0, // Prevent flex growth
      minWidth: 0, // Allow flex shrinking below content size
    },
    seedPhraseInputItemLast: {
      marginRight: 0, // Remove right margin for last item in row
    },
    inputItem: {
      flex: 1,
      minWidth: 0, // Allow flex shrinking below content size
      maxWidth: '100%', // Ensure text doesn't overflow container
      paddingRight: 8, // Add some padding to prevent text from touching edges
    },
    passwordContainer: {
      flexDirection: 'column',
      rowGap: 16,
      flexGrow: 1,
    },
    passwordContainerTitle: {
      flexDirection: 'column',
      rowGap: 4,
      alignItems: 'center',
    },
    learnMoreContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      gap: 8,
      marginTop: 8,
      marginBottom: 16,
      backgroundColor: colors.background.section,
      borderRadius: 8,
      padding: 16,
      borderWidth: themeAppearance === 'dark' ? 1 : 0,
      borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    learnMoreTextContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      gap: 1,
      flexWrap: 'wrap',
      width: '90%',
      marginTop: -6,
    },
    headerLeft: {
      marginLeft: 16,
    },
    headerRight: {
      marginRight: 16,
    },
    inputIndex: {
      marginRight: -4,
    },
    label: {
      marginBottom: -4,
    },
    checkbox: {
      alignItems: 'flex-start',
    },
    inputPadding: {
      padding: Platform.OS === 'ios' ? 4 : 3,
      height: 40,
    },
    createPasswordCtaContainer: {
      width: '100%',
      flexDirection: 'column',
      rowGap: 18,
      marginTop: 'auto',
      marginBottom: Platform.select({
        ios: 16,
        android: 24,
        default: 16,
      }),
    },
    // OPN Logo and header styles
    logoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
      marginTop: 8,
    },
    logoImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
    },
    logoWithRing: {
      borderWidth: 2,
      borderColor: themeAppearance === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
    },
    headerContainer: {
      alignItems: 'center',
      marginBottom: 16,
    },
    // Decorative background gradients
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
      backgroundColor: importedColors.opnPrimaryGradientStart,
    },
    decorativeCircle2: {
      position: 'absolute',
      bottom: '15%',
      right: -100,
      width: 250,
      height: 250,
      borderRadius: 125,
      backgroundColor: importedColors.opnAccentBlue,
    },
    // Tip card
    tipCard: {
      borderRadius: 12,
      padding: 8,
      marginTop: 24,
      marginBottom: 24,
      borderWidth: 2,
      borderColor: themeAppearance === 'light' ? '#bfdbfe' : 'rgba(34, 128, 205, 0.3)',
      backgroundColor: themeAppearance === 'light' ? '#eff6ff' : colors.background.section,
    },
    tipText: {
      textAlign: 'center',
      color: themeAppearance === 'light' ? '#1d4ed8' : '#b0efff',
    },
    // Warning card
    warningCard: {
      borderRadius: 12,
      padding: 16,
      marginTop: 12,
      borderWidth: 2,
      borderColor: themeAppearance === 'light' ? '#e9d5ff' : 'rgba(255, 255, 255, 0.1)',
      backgroundColor: themeAppearance === 'light' ? '#faf5ff' : colors.background.section,
    },
    warningText: {
      textAlign: 'center',
      color: themeAppearance === 'light' ? '#7e22ce' : 'rgba(176, 239, 255, 0.8)',
    },
    // Import button with arrow
    importButtonLabel: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
    },
    importButton: {
      backgroundColor: '#4105b6',
      borderColor: '#4105b6',
      borderWidth: 1,
      height: 54,
      borderRadius: 12,
      shadowColor: '#4105b2',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: themeAppearance === 'dark' ? 0.5 : 0.3,
      shadowRadius: 8,
      elevation: 6,
    },
    importButtonDisabled: {
      backgroundColor: themeAppearance === 'dark' ? '#1d2449' : '#f3f4f6',
      borderColor: themeAppearance === 'dark' ? '#1d2449' : '#3d00b51c',
    },
    // Password requirements card
    requirementsContainer: {
      borderRadius: 12,
      padding: 16,
      marginTop: 8,
      borderWidth: 2,
      borderColor: themeAppearance === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
      backgroundColor: themeAppearance === 'light' ? 'transparent' : colors.background.section,
    },
    requirementsTitle: {
      marginBottom: 12,
    },
    requirementRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      marginBottom: 8,
    },
    requirementIcon: {
      width: 18,
      height: 18,
      borderRadius: 9,
      borderWidth: 1.5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    requirementIconMet: {
      backgroundColor: '#2280cd',
      borderColor: '#2280cd',
    },
    requirementIconUnmet: {
      backgroundColor: 'transparent',
      borderColor: themeAppearance === 'light' ? '#d0d0d0' : '#4f5262',
    },
    requirementTextMet: {
      color: '#2280cd',
    },
    requirementTextUnmet: {
      color: themeAppearance === 'light' ? importedColors.opnMutedGrey : 'rgba(176, 239, 255, 0.6)',
    },
    // Button row (Back + Continue)
    buttonRow: {
      flexDirection: 'row',
      gap: 12,
    },
    backButton: {
      flex: 1,
      backgroundColor: themeAppearance === 'light' ? 'transparent' : 'rgba(26, 29, 58, 0.6)',
      borderWidth: 2,
      borderColor: themeAppearance === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(65, 5, 178, 0.2)',
      borderRadius: 12,
      height: 54,
    },
    backButtonLabel: {
      color: themeAppearance === 'light' ? '#000000' : '#b0efff',
    },
  });

export default createStyles;
