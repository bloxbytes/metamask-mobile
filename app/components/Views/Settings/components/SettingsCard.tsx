import React from 'react';
import { View, StyleSheet, Platform, Text } from 'react-native';
import { useTheme } from '../../../../util/theme';

const GLASS_BG_COLOR = '#1a1d3a';
const GLASS_BORDER_COLOR = 'rgba(65, 5, 182, 0.2)';

const SettingsCard = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const { colors, themeAppearance } = useTheme();
  const isDark = themeAppearance === 'dark';

  // Use theme colors for section title
  // Light: purple (#4105b6), Dark: bluish 70% (colors.text.muted)
  const sectionTitleColor = isDark ? colors.text.muted : colors.primary.default;

  // Card styling from theme
  // Dark: semi-transparent bg (rgba(26, 29, 58, 0.3)) - 30% opacity for better blending
  // Light: background.default
  const cardBgColor = isDark ? GLASS_BG_COLOR : colors.background.default;
  const cardBorderColor = isDark ? GLASS_BORDER_COLOR : colors.border.muted;
  const cardBorderWidth = isDark ? 1 : 2;

  return (
    <View style={styles.cardWrapper}>
      <Text style={[styles.sectionTitle, { color: sectionTitleColor }]}>
        {title}
      </Text>

      <View style={[
        styles.card,
        {
          backgroundColor: cardBgColor,
          borderColor: cardBorderColor,
          borderWidth: cardBorderWidth,
        },
        !isDark && styles.shadowLight,
        isDark && styles.shadowDark,
      ]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: '500',
  },
  card: {
    borderRadius: 12,
  },
  shadowLight: {
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
        shadowOpacity: 0.1,
        shadowRadius: 6,
      },
      android: {
        elevation: 8,
      },
    }),
  },
});

export default SettingsCard;
