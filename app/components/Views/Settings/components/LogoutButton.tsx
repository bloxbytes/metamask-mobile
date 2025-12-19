import React from 'react';
import { TouchableOpacity, View, StyleSheet, Platform, Text } from 'react-native';
import { useTheme } from '../../../../util/theme';
import Icon, { IconName, IconSize } from '../../../../component-library/components/Icons/Icon';

const LogoutButton = ({ onPress }: { onPress: () => void }) => {
  const { colors, themeAppearance } = useTheme();
  const isDark = themeAppearance === 'dark';

  // From React web HTML:
  // Light mode: bg-red-50 (#fef2f2), text-red-600 (#dc2626), border-2 border-red-300 (#fca5a5)
  // Using global theme error colors from customThemes.ts
  const bgColor = colors.error.muted;
  const textColor = colors.error.default;
  const borderColor = colors.error.inverse;
  const borderWidth = isDark ? 1 : 2;

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.button,
          {
            borderColor,
            backgroundColor: bgColor,
            borderWidth,
          },
          !isDark && styles.shadowLight,
          isDark && styles.shadowDark,
        ]}
      >
        <Icon
          name={IconName.Logout}
          size={IconSize.Md}
          color={textColor}
        />

        {/* Using native Text for reliable color */}
        <Text style={[styles.text, { color: textColor }]}>
          Lock Wallet
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 24,
    paddingVertical: 12, // py-3 = 12px
    borderRadius: 12, // rounded-xl
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  shadowLight: {
    // shadow-lg - bottom only
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  shadowDark: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  text: {
    fontSize: 16, // Match web
    fontWeight: '500',
  },
});

export default LogoutButton;
