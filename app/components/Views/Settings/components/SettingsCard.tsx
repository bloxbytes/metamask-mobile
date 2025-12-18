import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../../../util/theme';
import CustomText from '../../../../component-library/components/Texts/Text';

const SettingsCard = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.cardWrapper}>
      <CustomText style={[styles.sectionTitle, { color: colors.primary.default }]}>
        {title}
      </CustomText>

      <View style={[styles.card, { borderColor: colors.border.muted, backgroundColor: colors.background.alternative }]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 14,
    marginBottom: 12,
  },
  card: {
    borderWidth: 1,
    borderRadius: 14,
    overflow: 'hidden',
  },
});

export default SettingsCard;
