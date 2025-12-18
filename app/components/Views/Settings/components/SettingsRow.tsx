import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../../../util/theme';
import Icon, { IconName, IconSize } from '../../../../component-library/components/Icons/Icon';
import CustomText from '../../../../component-library/components/Texts/Text';

interface Props {
  title: string;
  subtitle?: string;
  icon: IconName;
  onPress: () => void;
  rightText?: string;
}

const SettingsRow = ({ title, subtitle, icon, onPress, rightText }: Props) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.row, { borderColor: colors.border.muted }]}>
        
        <View style={[styles.iconWrapper, { backgroundColor: colors.primary.muted }]}>
          <Icon name={icon} size={IconSize.Sm} color={colors.primary.default} />
        </View>

        <View style={styles.textWrapper}>
          <CustomText style={styles.rowTitle}>{title}</CustomText>

          {subtitle ? (
            <CustomText style={styles.rowSubtitle}>{subtitle}</CustomText>
          ) : null}
        </View>

        {rightText ? (
          <CustomText style={styles.rightText}>{rightText}</CustomText>
        ) : null}

        <Icon name={IconName.ArrowRight} size={IconSize.Sm} color={colors.icon.muted} />
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
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  textWrapper: {
    flex: 1,
  },
  rowTitle: {
    fontSize: 14,
  },
  rowSubtitle: {
    fontSize: 12,
    marginTop: 2,
  },
  rightText: {
    fontSize: 12,
    marginRight: 6,
  },
});

export default SettingsRow;
