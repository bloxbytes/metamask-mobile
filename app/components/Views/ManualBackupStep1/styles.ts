/* eslint-disable import/prefer-default-export */
import { Platform, StyleSheet } from 'react-native';
import { fontStyles } from '../../../styles/common';

// TODO: Replace "any" with type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createStyles = (colors: any, themeAppearance: 'light' | 'dark') =>
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
      gap: 16,
    },
    actionView: {
      flex: 1,
    },
    loader: {
      backgroundColor: colors.background.default,
      flex: 1,
      minHeight: 300,
      justifyContent: 'center',
      alignItems: 'center',
    },
    infoWrapper: {
      justifyContent: 'flex-start',
    },
    seedPhraseConcealerContainer: {
      flex: 1,
      borderRadius: 8,
    },
    seedPhraseConcealer: {
      alignItems: 'center',
      borderRadius: 8,
      paddingHorizontal: 24,
      paddingVertical: 45,
      flexDirection: 'column',
      rowGap: 16,
      height: '100%',
      flex: 1,
      justifyContent: 'center',
    },
    blurContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      height: '100%',
      borderRadius: 8,
      flex: 1,
    },
    blurView: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      height: '100%',
      borderRadius: 8,
      flex: 1,
      opacity: 0.5,
    },
    seedPhraseWrapper: {
      backgroundColor: colors.background.default,
      borderRadius: 8,
      flexDirection: 'row',
      borderColor: colors.border.default,
      borderWidth: 1,
      minHeight: 230,
    },
    seedPhraseContainer: {
      padding: 16,
      backgroundColor: colors.background.muted,
      borderRadius: 10,
      minHeight: 232,
    },
    word: {
      flex: 1,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 40,
      borderWidth: 1,
      borderColor: colors.border.muted,
      borderRadius: 8,
      paddingHorizontal: 8,
      paddingVertical: 4,
      backgroundColor: colors.background.default,
      flex: 1,
      margin: 4,
      columnGap: 6,
    },
    confirmPasswordWrapper: {
      flex: 1,
    },
    passwordRequiredContent: {
      marginBottom: 20,
    },
    content: {
      alignItems: 'flex-start',
    },
    text: {
      marginBottom: 8,
      justifyContent: 'center',
    },
    buttonWrapper: {
      flex: 1,
      marginTop: 0,
      justifyContent: 'flex-end',
    },
    warningMessageText: {
      color: colors.error.default,
      ...fontStyles.normal,
    },
    keyboardAvoidingView: {
      flex: 1,
      flexDirection: 'row',
      alignSelf: 'center',
      marginBottom: 30,
    },
    field: {
      position: 'relative',
      flexDirection: 'column',
      gap: 2,
      width: '100%',
    },
    headerLeft: {
      marginLeft: 16,
    },
    buttonContainer: {
      paddingHorizontal: 0,
      marginBottom: Platform.OS === 'android' ? 16 : 0,
      marginTop: 32,
      gap: 16,
    },
    actionViewContainer: {
      flex: 1,
      justifyContent: 'space-between',
    },
    // OPN Logo container
    logoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
      marginTop: 16,
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
    // Header centered
    headerContainer: {
      alignItems: 'center',
      marginBottom: 16,
    },
    // Security info card (red/pink)
    securityInfoCard: {
      borderRadius: 12,
      padding: 12,
      marginBottom: 24,
      borderWidth: 2,
      borderColor: themeAppearance === 'light' ? '#e9d5ff' : 'rgba(255, 255, 255, 0.1)',
      backgroundColor: themeAppearance === 'light' ? '#faf5ff' : colors.background.section,
    },
    securityInfoTitle: {
      marginBottom: 12,
      textAlign: 'center',
    },
    securityInfoItem: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 8,
      gap: 8,
    },
    securityInfoBullet: {
      marginTop: 2,
    },
    // Reveal card styling
    revealCard: {
      borderRadius: 12,
      padding: 24,
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 180,
      borderWidth: 2,
      borderColor: themeAppearance === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
      backgroundColor: themeAppearance === 'light' ? '#f8f9ff' : colors.background.section,
    },
    revealIcon: {
      marginBottom: 16,
    },
    // Button row
    buttonRow: {
      flexDirection: 'row',
      gap: 12,
      marginBottom: 16,
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
    continueButton: {
      flex: 1,
      borderRadius: 12,
      backgroundColor: '#4105b6',
      borderColor: '#4105b6',
      borderWidth: 1,
      height: 54,
      shadowColor: '#4105b2',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: themeAppearance === 'dark' ? 0.5 : 0.3,
      shadowRadius: 8,
      elevation: 6,
    },
    continueButtonDisabled: {
      backgroundColor: themeAppearance === 'light' ? '#f3f4f6' : '#1d2449',
      borderColor: themeAppearance === 'light' ? '#3d00b51c' : '#1d2449',
      borderWidth: 1,
    },
    continueButtonLabel: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
    },
    // Scrollable content
    scrollContent: {
      flexGrow: 1,
      paddingBottom: 48,
    },
    // 2-column word grid
    wordGridContainer: {
      borderRadius: 12,
      padding: 16,
      borderWidth: 2,
      borderColor: themeAppearance === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
      backgroundColor: themeAppearance === 'light' ? colors.background.muted : colors.background.section,
      marginBottom: 12,
    },
    wordGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    wordItem: {
      width: '48%',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.background.default,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.border.muted,
      paddingHorizontal: 12,
      paddingVertical: 10,
      marginBottom: 8,
    },
    wordNumber: {
      marginRight: 8,
    },
    // Action buttons row (Copy, Download, Hide)
    actionButtonsRow: {
      flexDirection: 'row',
      gap: 8,
      marginBottom: 16,
    },
    actionButton: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      paddingVertical: 12,
      borderRadius: 8,
      borderWidth: 2,
      borderColor: themeAppearance === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
      backgroundColor: themeAppearance === 'light' ? colors.background.default : colors.background.section,
    },
    actionButtonSmall: {
      flex: 0,
      paddingHorizontal: 16,
    },
    // Confirmation checkbox card
    confirmationCard: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 12,
      borderRadius: 12,
      padding: 16,
      borderWidth: 2,
      borderColor: themeAppearance === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
      backgroundColor: themeAppearance === 'light' ? colors.background.muted : colors.background.section,
      marginBottom: 16,
    },
    checkbox: {
      marginTop: 2,
    },
    confirmationTextContainer: {
      flex: 1,
    },
  });
