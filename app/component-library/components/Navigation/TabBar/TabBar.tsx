/* eslint-disable react/prop-types */

// Third party dependencies.
import React, { useCallback, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
// External dependencies.
import {
  Box,
  BoxAlignItems,
  BoxFlexDirection,
} from '@metamask/design-system-react-native';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import Routes from '../../../../constants/navigation/Routes';
import TabBarItem from '../TabBarItem';

import { strings } from '../../../../../locales/i18n';
import { useMetrics } from '../../../../components/hooks/useMetrics';
import { MetaMetricsEvents } from '../../../../core/Analytics';
import { getDecimalChainId } from '../../../../util/networks';

// Internal dependencies.
import { selectAssetsTrendingTokensEnabled } from '../../../../selectors/featureFlagController/assetsTrendingTokens';
import { selectChainId } from '../../../../selectors/networkController';
import {
  ICON_BY_TAB_BAR_ICON_KEY,
  LABEL_BY_TAB_BAR_ICON_KEY,
} from './TabBar.constants';
import { TabBarProps } from './TabBar.types';
import { useTheme } from '../../../../util/theme';
import LinearGradient from 'react-native-linear-gradient';

const TabBar = ({ state, descriptors, navigation }: TabBarProps) => {
  const { trackEvent, createEventBuilder } = useMetrics();
  const { bottom: bottomInset } = useSafeAreaInsets();
  const chainId = useSelector(selectChainId);
  const isAssetsTrendingTokensEnabled = useSelector(
    selectAssetsTrendingTokensEnabled,
  );
  const tabBarRef = useRef(null);
  const tw = useTailwind();

  const renderTabBarItem = useCallback(
    (route: { name: string; key: string }, index: number) => {
      const { options } = descriptors[route.key];
      const tabBarIconKey = options.tabBarIconKey;
      //TODO: use another option on add it to the prop interface
      const callback = options.callback;
      const rootScreenName = options.rootScreenName;
      const key = `tab-bar-item-${tabBarIconKey}`; // this key is also used to identify elements for e2e testing
      const isSelected = state.index === index;
      const icon = ICON_BY_TAB_BAR_ICON_KEY[tabBarIconKey];
      const labelKey = LABEL_BY_TAB_BAR_ICON_KEY[tabBarIconKey];
      const labelText = labelKey ? strings(labelKey) : '';
      const onPress = () => {
        callback?.();
        // prefer explicit rootScreenName set in descriptor; fall back to the route name
        const targetScreen = rootScreenName || route.name;
        switch (targetScreen) {
          case Routes.WALLET_VIEW:
            navigation.navigate(Routes.WALLET.HOME, {
              screen: Routes.WALLET.TAB_STACK_FLOW,
              params: {
                screen: Routes.WALLET_VIEW,
              },
            });
            break;
          // Navigate directly to the NFTs full view tab
          case Routes.WALLET.NFTS_FULL_VIEW:
            navigation.navigate(Routes.WALLET.NFTS_FULL_VIEW);
            break;
          case Routes.MODAL.WALLET_ACTIONS:
            navigation.navigate(Routes.MODAL.ROOT_MODAL_FLOW, {
              screen: Routes.MODAL.WALLET_ACTIONS,
            });
            trackEvent(
              createEventBuilder(MetaMetricsEvents.ACTIONS_BUTTON_CLICKED)
                .addProperties({
                  text: '',
                  chain_id: getDecimalChainId(chainId),
                })
                .build(),
            );
            break;
          case Routes.BROWSER.VIEW:
            navigation.navigate(Routes.BROWSER.HOME, {
              screen: Routes.BROWSER.VIEW,
            });
            break;
          // duplicate NFT case handled above; fallthrough
          case Routes.TRANSACTIONS_VIEW:
            navigation.navigate(Routes.TRANSACTIONS_VIEW);
            break;
          case Routes.REWARDS_VIEW:
            navigation.navigate(Routes.REWARDS_VIEW);
            break;
          case Routes.SETTINGS_VIEW:
            navigation.navigate(Routes.SETTINGS_VIEW, {
              screen: 'Settings',
            });
            break;
          case Routes.TRENDING_VIEW:
            if (isAssetsTrendingTokensEnabled) {
              navigation.navigate(Routes.TRENDING_VIEW);
            }
            break;
        }
      };

      const isWalletAction =
        rootScreenName === Routes.MODAL.TRADE_WALLET_ACTIONS;

      return (
        <View key={key} style={tw.style('flex-1 w-full')}>
          <TabBarItem
            label={labelText}
            iconName={icon}
            onPress={onPress}
            isActive={isSelected}
            isTradeButton={isWalletAction}
            testID={key}
          />
        </View>
      );
    },
    [
      state,
      descriptors,
      navigation,
      chainId,
      trackEvent,
      createEventBuilder,
      tw,
      isAssetsTrendingTokensEnabled,
    ],
  );

  const renderTabBarItems = useCallback(
    () => state.routes.map(renderTabBarItem),
    [state, renderTabBarItem],
  );

  const { themeAppearance } = useTheme()

  return (
    themeAppearance == 'dark' ?
    <View
      ref={tabBarRef}
      style={{
        position: 'relative',
        backgroundColor: '#0f112a', // fallback
      }}
    >
      {/* Background gradient (does NOT affect layout) */}
      <LinearGradient
        colors={['#0f112a', '#1d2449']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      {/* Top glowing divider (dark only) */}
      {themeAppearance === 'dark' && (
        <LinearGradient
          colors={[
            'rgba(176,239,255,0)',
            'rgba(176,239,255,0.3)',
            'rgba(176,239,255,0)',
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 1,
          }}
        />
      )}

      {/* REAL TAB BAR CONTENT (unchanged layout) */}
      <Box
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.End}
        twClassName="w-full pt-3 mb-1 px-2"
        style={[tw.style(`pb-[${bottomInset}px]`)]}
      >
        {renderTabBarItems()}
      </Box>
    </View>
    :
    <View ref={tabBarRef}>
      <Box
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.End}
        // twClassName="w-full pt-3 mb-1 px-2 bg-default border-t border-muted"
        twClassName="w-full pt-3 mb-1 px-2"
        style={[tw.style(`pb-[${bottomInset}px]`)]}
      >
        {renderTabBarItems()}
      </Box>
    </View>
  );
};

export default TabBar;
