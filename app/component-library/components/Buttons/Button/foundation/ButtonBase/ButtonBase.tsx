/* eslint-disable react/prop-types */

// Third party dependencies.
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

// External dependencies.
import Text from '../../../../Texts/Text';
import Icon from '../../../../Icons/Icon';
import { useStyles } from '../../../../../hooks';

// Internal dependencies.
import { ButtonBaseProps } from './ButtonBase.types';
import styleSheet from './ButtonBase.styles';
import {
  DEFAULT_BUTTONBASE_LABEL_COLOR,
  DEFAULT_BUTTONBASE_SIZE,
  DEFAULT_BUTTONBASE_WIDTH,
  DEFAULT_BUTTONBASE_ICON_SIZE,
  DEFAULT_BUTTONBASE_LABEL_TEXTVARIANT,
} from './ButtonBase.constants';
import { useTheme } from '../../../../../../util/theme';

const ButtonBase = ({
  label,
  labelColor = DEFAULT_BUTTONBASE_LABEL_COLOR,
  labelTextVariant = DEFAULT_BUTTONBASE_LABEL_TEXTVARIANT,
  startIconName,
  endIconName,
  size = DEFAULT_BUTTONBASE_SIZE,
  onPress,
  style,
  width = DEFAULT_BUTTONBASE_WIDTH,
  isDisabled,
  opnMaxWidth,
  ...props
}: ButtonBaseProps) => {
  const { styles } = useStyles(styleSheet, {
    style,
    size,
    width,
    isDisabled,
  });

  const { colors, themeAppearance } = useTheme();

  return (
    opnMaxWidth ?
    <TouchableOpacity
      disabled={isDisabled}
      activeOpacity={1}
      onPress={onPress}
      style={[styles.base, style, {
        borderWidth: opnMaxWidth && 2,
        backgroundColor: opnMaxWidth && (themeAppearance == 'dark' ? '#1a1d3a' : '#FFFFFF'),
        borderColor: opnMaxWidth&& (themeAppearance == 'dark' ? '#rgba(65,5,182,0.2)' : colors.border.muted),
      }]}
      accessibilityRole="button"
      accessible
      {...props}
    >
      {startIconName && (
        <Icon
          color={labelColor.toString()}
          name={startIconName}
          size={DEFAULT_BUTTONBASE_ICON_SIZE}
          style={styles.startIcon}
        />
      )}
      {typeof label === 'string' ? (
        <Text
          variant={labelTextVariant}
          style={styles.label}
          accessibilityRole="none"
        >
          {label}
        </Text>
      ) : (
        label
      )}
      {opnMaxWidth && <View style={{ flex: 1 }} />}
      {endIconName && (
        <Icon
          color={opnMaxWidth ? (themeAppearance == 'dark' ? '#b0efff' : '#6b7280' ): labelColor.toString()}
          name={endIconName}
          size={DEFAULT_BUTTONBASE_ICON_SIZE}
          style={styles.endIcon}
        />
      )}
    </TouchableOpacity>
    :
    <TouchableOpacity
      disabled={isDisabled}
      activeOpacity={1}
      onPress={onPress}
      style={[styles.base, style]}
      accessibilityRole="button"
      accessible
      {...props}
    >
      {startIconName && (
        <Icon
          color={labelColor.toString()}
          name={startIconName}
          size={DEFAULT_BUTTONBASE_ICON_SIZE}
          style={styles.startIcon}
        />
      )}
      {typeof label === 'string' ? (
        <Text
          variant={labelTextVariant}
          style={styles.label}
          accessibilityRole="none"
        >
          {label}
        </Text>
      ) : (
        label
      )}
      {endIconName && (
        <Icon
          color={labelColor.toString()}
          name={endIconName}
          size={DEFAULT_BUTTONBASE_ICON_SIZE}
          style={styles.endIcon}
        />
      )}
    </TouchableOpacity>
  );
};

export default ButtonBase;
