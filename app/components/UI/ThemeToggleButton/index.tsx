import React, { useCallback } from 'react';
import { Pressable, StyleSheet, useColorScheme } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setAppTheme } from '../../../actions/user';
import Icon, {
  IconColor,
  IconName,
  IconSize,
} from '../../../component-library/components/Icons/Icon';
import { AppThemeKey } from '../../../util/theme/models';

/**
 * ThemeToggleButton - Floating button to toggle between light and dark themes
 * Displays moon icon in light mode, sun icon in dark mode
 * Inspired by extension design with styling matching extension colors
 */
export const ThemeToggleButton: React.FC = () => {
  const dispatch = useDispatch();

  // Get current theme from Redux
  const appTheme: AppThemeKey = useSelector(
    (state: any) => state.user.appTheme,
  );

  // Get device color scheme for system theme fallback
  const deviceColorScheme = useColorScheme();

  // Determine if we're in light mode
  const isLightMode =
    appTheme === AppThemeKey.light ||
    (appTheme === AppThemeKey.os && deviceColorScheme === 'light');

  const handlePress = useCallback(() => {
    // Toggle between light and dark modes
    const nextTheme = isLightMode ? AppThemeKey.dark : AppThemeKey.light;
    dispatch(setAppTheme(nextTheme));
  }, [isLightMode, dispatch]);

  const buttonStyle = {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    backgroundColor: isLightMode ? '#FFFFFF' : '#1d2449',
    borderWidth: 2,
    borderColor: isLightMode ? '#3d00b51c' : '#4105b6',
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [buttonStyle, pressed && styles.pressed]}
      accessible={true}
      accessibilityLabel={`Toggle ${isLightMode ? 'dark' : 'light'} mode`}
      accessibilityRole="button"
    >
      <Icon
        name={isLightMode ? IconName.Dark : IconName.Light}
        size={IconSize.Md}
        color={IconColor.Default}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});

export default ThemeToggleButton;
