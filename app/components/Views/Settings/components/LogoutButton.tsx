import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { useTheme } from '../../../../util/theme';
import Icon, { IconName, IconSize } from '../../../../component-library/components/Icons/Icon';
import CustomText from '../../../../component-library/components/Texts/Text';

const LogoutButton = ({ onPress }: { onPress: () => void }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, { borderColor: colors.error.muted }]}>
        <Icon name={IconName.Logout} size={IconSize.Md} color={colors.error.default} />

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
    marginTop: 20,
    paddingVertical: 14,
    borderWidth: 2,
    borderRadius: 14,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
  },
});

export default LogoutButton;
