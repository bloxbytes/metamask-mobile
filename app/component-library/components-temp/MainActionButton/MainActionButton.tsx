/* eslint-disable react/prop-types */

// Third party dependencies.
import React, { useRef } from 'react';
import {
  Animated,
  Easing,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

// External dependencies.
import Icon, {
  IconColor,
  IconName,
  IconSize,
} from '../../components/Icons/Icon';
import Text, { TextColor, TextVariant } from '../../components/Texts/Text';
import { useStyles } from '../../hooks';

// Internal dependencies.
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '../../../util/theme';
import styleSheet from './MainActionButton.styles';
import { MainActionButtonProps } from './MainActionButton.types';

const MainActionButton = ({
  iconName,
  label,
  onPress,
  onPressIn,
  onPressOut,
  style,
  isDisabled = false,
  opnWallet = false,
  ...props
}: MainActionButtonProps) => {
  const { styles } = useStyles(styleSheet, {
    style,
    isDisabled,
  });

  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = (pressEvent: GestureResponderEvent) => {
    Animated.timing(scaleAnim, {
      toValue: 0.98,
      duration: 150,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
    onPressIn?.(pressEvent);
  };

  const handlePressOut = (pressEvent: GestureResponderEvent) => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 150,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
    onPressOut?.(pressEvent);
  };

  const { colors, themeAppearance } = useTheme();

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <Pressable
        style={({ pressed }) => [
          styles.base,
          pressed && styles.pressed,
          {
            // backgroundColor: '#fafbff',
            // backgroundColor: colors.background.default,
            backgroundColor: themeAppearance == 'dark' ? '#1a1d3a' : colors.background.default,
            borderWidth: 2,
            // borderColor: '#3d00b51c',
            borderColor: themeAppearance == 'dark' ? '#rgba(65,5,182,0.2)' : colors.border.muted,


            // ✅ Subtle bottom shadow ONLY
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 }, // ⬇️ very small
            shadowOpacity: 0.1,
            shadowRadius: 2,

            // ✅ Android: keep LOW
            elevation: 2,

            margin: 4,
          },
        ]}
        onPress={!isDisabled ? onPress : undefined}
        onPressIn={!isDisabled ? handlePressIn : undefined}
        onPressOut={!isDisabled ? handlePressOut : undefined}
        accessible
        disabled={isDisabled}
        {...props}
      >
        {(opnWallet && themeAppearance == 'dark') && (
          <LinearGradient
            colors={[
              'rgba(26,29,58,0.6)',
              'rgba(26,29,58,0.4)',
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={StyleSheet.absoluteFill}
          />
        )}
        <View style={styles.container}>
          {opnWallet ? (
            <LinearGradient
              colors={
                iconName == IconName.Received
                  ? ['rgb(34, 128, 205)', 'rgba(34, 128, 205, 0.867)']
                  : ['rgb(65, 5, 182)', 'rgba(65, 5, 182, 0.867)']
              }
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                alignItems: 'center',
                justifyContent: 'center',

                // Shadow equivalent of your CSS
                shadowColor: 'rgba(65, 5, 182, 0.2)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 8,
                elevation: 6,
              }}
            >
              <Icon
                name={iconName}
                size={IconSize.Lg}
                color={'white'} // recommended for this gradient
              />
            </LinearGradient>
          ) : (
            <Icon
              name={iconName}
              size={IconSize.Lg}
              color={IconColor.Alternative}
            />
          )}
          <Text
            variant={TextVariant.BodySMMedium}
            color={TextColor.Default}
            style={styles.label}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {label}
          </Text>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default MainActionButton;
