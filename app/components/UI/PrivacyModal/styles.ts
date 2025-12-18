import { StyleSheet } from 'react-native';
import { fontStyles } from '../../../styles/common';

const styles = (colors: any) =>
  StyleSheet.create({
    modal: {
      margin: 0,
      justifyContent: 'center',
      padding: 20,
    },
    container: {
      borderRadius: 20,
      height: '80%',
      flexDirection: 'column',
      overflow: 'hidden',
    },
    lightContainer: {
      backgroundColor: '#ffffff',
      borderWidth: 2,
      borderColor: 'rgba(61, 0, 181, 0.11)',
    },
    darkContainer: {
      backgroundColor: '#1a1d3a',
      borderWidth: 1,
      borderColor: 'rgba(65, 5, 182, 0.4)',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 24,
      borderBottomWidth: 1,
    },
    lightHeader: {
      borderBottomColor: 'rgba(61, 0, 181, 0.11)',
    },
    darkHeader: {
      borderBottomColor: 'rgba(65, 5, 182, 0.3)',
    },
    title: {
      ...fontStyles.bold,
      fontSize: 24,
    },
    lightTitle: {
      color: '#4105b6',
    },
    darkTitle: {
      color: '#f8fdf1',
    },
    closeButton: {
      padding: 4,
    },
    content: {
      flex: 1,
    },
    scrollContent: {
      flexGrow: 1,
      padding: 24,
      paddingBottom: 40,
    },
    lastUpdated: {
      ...fontStyles.normal,
      fontSize: 14,
      marginBottom: 24,
    },
    lightText: {
      color: '#6a737d',
    },
    darkText: {
      color: 'rgba(248, 253, 241, 0.6)',
    },
    section: {
      marginBottom: 24,
    },
    sectionTitle: {
      ...fontStyles.bold,
      fontSize: 18,
      marginBottom: 8,
    },
    subSectionTitle: {
      ...fontStyles.bold,
      fontSize: 16,
      marginBottom: 8,
      marginTop: 16,
    },
    sectionContent: {
      ...fontStyles.normal,
      fontSize: 14,
      lineHeight: 20,
    },
    listItem: {
      ...fontStyles.normal,
      fontSize: 14,
      lineHeight: 20,
      marginLeft: 16,
      marginTop: 4,
    },
    securityCard: {
      borderRadius: 12,
      padding: 16,
      marginTop: 16,
      marginBottom: 32,
    },
    lightSecurityCard: {
      backgroundColor: '#f0f7ff',
      borderWidth: 2,
      borderColor: '#cce3ff',
    },
    darkSecurityCard: {
      backgroundColor: 'rgba(34, 128, 205, 0.2)',
      borderWidth: 1,
      borderColor: 'rgba(34, 128, 205, 0.3)',
    },
    footer: {
      padding: 24,
      borderTopWidth: 1,
    },
    lightFooter: {
      borderTopColor: 'rgba(61, 0, 181, 0.11)',
    },
    darkFooter: {
      borderTopColor: 'rgba(65, 5, 182, 0.3)',
    },
  });

export default styles;
