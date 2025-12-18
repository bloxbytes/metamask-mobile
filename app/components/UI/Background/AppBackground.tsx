import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '../../../util/theme';

const AppBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { colors, themeAppearance } = useTheme(); // metamask hook

  const isDark = themeAppearance === 'dark';

  return isDark ? (
    <LinearGradient
      colors={['#0f112a', '#1d2449']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >
      {children}
    </LinearGradient>
  ) : (
    <View style={[styles.light, { backgroundColor: colors.background.default }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  light: {
    flex: 1,
  },
});

export default AppBackground;
