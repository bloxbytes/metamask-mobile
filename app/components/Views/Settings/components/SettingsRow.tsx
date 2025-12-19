import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useTheme } from '../../../../util/theme';
import Icon, { IconName, IconSize } from '../../../../component-library/components/Icons/Icon';

interface Props {
  title: string;
  subtitle?: string;
  icon: IconName;
  onPress: () => void;
  rightText?: string;
  large?: boolean;
}

const SettingsRow = ({ title, subtitle, icon, onPress, rightText, large }: Props) => {
  const { colors, themeAppearance } = useTheme();
  const isDark = themeAppearance === 'dark';

  // Using theme colors for consistency
  // Icon: Light purple bg with purple icon (light), more vibrant purple with bluish icon (dark)
  const iconBgColor = isDark ? 'rgba(65, 5, 182, 0.4)' : 'rgba(65, 5, 182, 0.1)';
  const iconColor = colors.icon.default;
  // Chevron and subtitle: Use muted text color
  const chevronColor = isDark ? colors.icon.alternative : '#9ca3af';
  const dividerColor = colors.border.muted;
  // Main text: Use default text color
  const textColor = colors.text.default;
  // Subtitle/rightText: Use muted text for dark, alternative for light
  const subtitleColor = isDark ? colors.text.muted : colors.text.alternative;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.row, { borderColor: dividerColor }]}>
        
        <View style={[
          styles.iconWrapper, 
          { backgroundColor: iconBgColor },
          large && styles.iconWrapperLarge
        ]}>
          <Icon name={icon} size={large ? IconSize.Lg : IconSize.Md} color={iconColor} />
        </View>

        <View style={styles.textWrapper}>
          <Text style={[styles.rowTitle, { color: textColor }]}>{title}</Text>

          {subtitle ? (
            <Text style={[styles.rowSubtitle, { color: subtitleColor }]}>{subtitle}</Text>
          ) : null}
        </View>

        {rightText ? (
          <Text style={[styles.rightText, { color: subtitleColor }]}>{rightText}</Text>
        ) : null}

        <Icon name={IconName.ArrowRight} size={IconSize.Sm} color={chevronColor} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
  },
  iconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconWrapperLarge: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  textWrapper: {
    flex: 1,
  },
  rowTitle: {
    fontSize: 16,
    fontWeight: '400',
  },
  rowSubtitle: {
    fontSize: 14,
    marginTop: 2,
  },
  rightText: {
    fontSize: 14,
    marginRight: 8,
  },
});

export default SettingsRow;
