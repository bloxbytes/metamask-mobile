/* eslint-disable react/prop-types */

// Third party dependencies.
import React from 'react';

// External dependencies.
import { ButtonAnimated } from '@metamask/design-system-react-native';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import Icon, { IconColor, IconSize } from '../../Icons/Icon';
import { IconName } from '../../Icons/Icon/Icon.types';
import { default as MMText, TextColor, TextVariant } from '../../Texts/Text';

// Internal dependencies
import LinearGradient from 'react-native-linear-gradient';
import TradeTabBarItem from '../TradeTabBarItem';
import { TabBarItemProps } from './TabBarItem.types';

// Internal component that uses the locked theme for trade button
const TabBarItem = ({
  iconName,
  isActive = false,
  isTradeButton = false,
  label,
  ...props
}: TabBarItemProps) => {
  const tw = useTailwind(); // Gets theme from ThemeProvider context

  // Match icon color with text color: Default when active, Alternative when inactive
  // const iconColor = isActive ? IconColor.Default : IconColor.Alternative;
  const iconColor = isActive ? '#FFFFFF' : IconColor.Alternative;

  const gradientColors = ['#4105b6', '#6305b6'];

  // RN shadow converted from Tailwind `shadow-lg shadow-[#4105b6]/50`
  const shadowStyle = {
    shadowColor: '#4105b6',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 10, // Android shadow
  };

  // return isTradeButton ? (
  //   <TradeTabBarItem
  //     testID={props.testID}
  //     label={label}
  //     accessibilityLabel={label}
  //     accessible
  //     accessibilityRole="button"
  //   />
  // ) : (
  //     <ButtonAnimated
  //       style={tw.style(
  //         'items-center justify-center bg-transparent w-full px-2 py-1',
  //       )}
  //       testID={props.testID}
  //       accessibilityLabel={label}
  //       accessible
  //       accessibilityRole="button"
  //       {...props}
  //     >
  //       <Icon
  //         name={iconName}
  //         size={IconSize.Lg}
  //         color={iconColor}
  //         suppressFill={iconName === IconName.Nfts}
  //       />
  //       {label && (
  //         <MMText
  //           variant={TextVariant.BodyXSMedium}
  //           color={isActive ? TextColor.Default : TextColor.Alternative}
  //           style={tw.style('mt-1 w-full flex-shrink-0 text-center min-w-0')}
  //           numberOfLines={1}
  //           ellipsizeMode="tail"
  //         >
  //           {label}
  //         </MMText>
  //       )}
  //     </ButtonAnimated>
  // );

  if (isTradeButton) {
    return (
      <TradeTabBarItem
        testID={props.testID}
        label={label}
        accessibilityLabel={label}
        accessible
        accessibilityRole="button"
      />
    );
  }

  return isActive ? (
    /** ACTIVE TAB → gradient + shadow */
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[
        tw.style('rounded-xl w-full'),
        shadowStyle, // <— Add shadow here
      ]}
    >
      <ButtonAnimated
        style={tw.style('items-center justify-center bg-transparent px-2 py-1')}
        accessibilityLabel={label}
        accessible
        accessibilityRole="button"
        {...props}
      >
        <Icon
          name={iconName}
          size={IconSize.Lg}
          color={iconColor}
          suppressFill={iconName === IconName.Nfts}
        />

        {label && (
          <MMText
            variant={TextVariant.BodyXSMedium}
            // color={TextColor.Default}
            color={'#FFFFFF'}
            style={tw.style('mt-1 text-center')}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {label}
          </MMText>
        )}
      </ButtonAnimated>
    </LinearGradient>
  ) : (
    /** INACTIVE TAB → no gradient, no shadow */
    <ButtonAnimated
      style={tw.style('items-center justify-center bg-transparent px-2 py-1')}
      accessibilityLabel={label}
      accessible
      accessibilityRole="button"
      {...props}
    >
      <Icon
        name={iconName}
        size={IconSize.Lg}
        color={iconColor}
        suppressFill={iconName === IconName.Nfts}
      />

      {label && (
        <MMText
          variant={TextVariant.BodyXSMedium}
          color={TextColor.Alternative}
          style={tw.style('mt-1 text-center')}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {label}
        </MMText>
      )}
    </ButtonAnimated>
  );
};

export default TabBarItem;
