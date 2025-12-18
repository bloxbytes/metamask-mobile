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

      <View style={[styles.card, { borderColor: colors.border.muted }]}>
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
    marginBottom: 8,
  },
  card: {
    borderWidth: 2,
    borderRadius: 14,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
});

export default SettingsCard;
