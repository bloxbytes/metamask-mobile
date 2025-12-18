import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { useTheme } from '../../../../util/theme';
import Icon, { IconName, IconSize } from '../../../../component-library/components/Icons/Icon';
import CustomText from '../../../../component-library/components/Texts/Text';

const LogoutButton = ({ onPress }: { onPress: () => void }) => {
  const { colors, themeAppearance } = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.button,
          {
            borderColor: colors.error.inverse,
            backgroundColor: colors.error.muted,
            borderWidth: themeAppearance === 'dark' ? 1 : 2,
          },
        ]}
      >
        <Icon
          name={IconName.Logout}
          size={IconSize.Md}
          color={colors.error.default}
        />

        <CustomText style={[styles.text, { color: colors.error.default }]}>
          Lock Wallet
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 16,
    marginTop: 24,
    paddingVertical: 14,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    // Shadow for "shadow-lg" effect
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
  },
});

export default LogoutButton;
