import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../../../util/theme';
import ThemeToggleButton from '../ThemeToggleButton';

/**
 * FloatingThemeToggle - Wrapper component that renders ThemeToggleButton
 * as a floating overlay in the top-right corner
 * Visible on all tab bar screens
 */
export const FloatingThemeToggle: React.FC = () => {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  const containerStyle = {
    position: 'absolute' as const,
    // Add safe area inset + small margin for better spacing
    top: Platform.OS === 'ios' ? Math.max(insets.top, 20) : 16,
    right: 16,
    zIndex: 999,
    borderRadius: 12,
    backgroundColor: colors.background.alternative || '#F2F2F7',
    padding: 2,
    elevation: 10,
    shadowColor: colors.shadow?.default || '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  };

  return (
    <View style={containerStyle}>
      <ThemeToggleButton />
    </View>
  );
};

const styles = StyleSheet.create({});

export default FloatingThemeToggle;
