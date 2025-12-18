// Third party dependencies.
import { StyleSheet } from 'react-native';

// External dependencies.
import { Theme } from '../../../util/theme/models';

/**
 * Style sheet function for FoxLoader component.
 *
 * @param params Style sheet params.
 * @returns StyleSheet object.
 */
const styleSheet = (params: { theme: Theme }) => {
  const { theme } = params;
  const { colors } = theme;

  return StyleSheet.create({
    container: {
      backgroundColor: colors.background.default,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 120,
      height: 120,
      borderRadius: 60,
      borderWidth: theme.themeAppearance === 'light' ? 2 : 0,
      borderColor: 'rgba(61, 0, 181, 0.11)',
    },
    spacer: {
      marginVertical: 16,
    },
  });
};

export default styleSheet;
