import React, {
  useMemo,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import { FlashList } from '@shopify/flash-list';
import { useSelector } from 'react-redux';
import { RefreshTestId } from './constants';
import { endTrace, trace, TraceName } from '../../../util/trace';
import { Nft } from '@metamask/assets-controllers';
import {
  isNftFetchingProgressSelector,
  multichainCollectiblesByEnabledNetworksSelector,
} from '../../../reducers/collectibles';
import NftGridRefreshControl from './NftGridRefreshControl';
import NftGridItem from './NftGridItem';
import ActionSheet from '@metamask/react-native-actionsheet';
import NftGridItemActionSheet from './NftGridItemActionSheet';
import NftGridHeader from './NftGridHeader';
import NftGridSkeleton from './NftGridSkeleton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MetaMetricsEvents, useMetrics } from '../../hooks/useMetrics';
import { CollectiblesEmptyState } from '../CollectiblesEmptyState';
import { WalletViewSelectorsIDs } from '../../../../e2e/selectors/wallet/WalletView.selectors';
import {
  Box,
  Button,
  ButtonVariant,
} from '@metamask/design-system-react-native';
import Routes from '../../../constants/navigation/Routes';
import { strings } from '../../../../locales/i18n';
import BaseControlBar from '../shared/BaseControlBar';
import ButtonIcon, {
  ButtonIconSizes,
} from '../../../component-library/components/Buttons/ButtonIcon';
import Icon, { IconName, IconSize } from '../../../component-library/components/Icons/Icon';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { selectHomepageRedesignV1Enabled } from '../../../selectors/featureFlagController/homepage';
import { Image, TouchableOpacity, View } from 'react-native';
import { createAccountSelectorNavDetails } from '../../Views/AccountSelector';
import AvatarAccount from '../../../component-library/components/Avatars/Avatar/variants/AvatarAccount';
import Avatar, { AvatarSize, AvatarVariant } from '../../../component-library/components/Avatars/Avatar';
import { formatAddress } from '../../../util/address';
import { useTheme } from '../../../util/theme';
import { createNetworkManagerNavDetails } from '../NetworkManager';
import { selectSelectedInternalAccountAddress } from '../../../selectors/accountsController';
import { selectAvatarAccountType } from '../../../selectors/settings';
import CustomText, {
  TextColor,
  TextVariant,
} from '../../../component-library/components/Texts/Text';
import { useAccountName } from '../../hooks/useAccountName';

interface NFTNavigationParamList {
  AddAsset: { assetType: string };
  [key: string]: undefined | object;
}

interface NftGridProps {
  isFullView?: boolean;
}

const NftRow = ({
  items,
  onLongPress,
  source,
}: {
  items: Nft[];
  onLongPress: (nft: Nft) => void;
  source?: 'mobile-nft-list' | 'mobile-nft-list-page';
}) => (
  <Box twClassName="flex-row gap-3 mb-3">
    {items.map((item, index) => {
      // Create a truly unique key combining multiple identifiers
      const uniqueKey = `${item.address}-${item.tokenId}-${item.chainId}-${index}`;
      return (
        <Box key={uniqueKey} twClassName="flex-1">
          <NftGridItem item={item} onLongPress={onLongPress} source={source} />
        </Box>
      );
    })}
    {/* Fill remaining slots if less than 3 items */}
    {items.length < 3 &&
      Array.from({ length: 3 - items.length }).map((_, index) => (
        <Box key={`empty-${index}`} twClassName="flex-1" />
      ))}
  </Box>
);

const NftGrid = ({ isFullView = false }: NftGridProps) => {
  const navigation =
    useNavigation<StackNavigationProp<NFTNavigationParamList, 'AddAsset'>>();
  const { trackEvent, createEventBuilder } = useMetrics();
  const [isAddNFTEnabled, setIsAddNFTEnabled] = useState(true);
  const [longPressedCollectible, setLongPressedCollectible] =
    useState<Nft | null>(null);
  const tw = useTailwind();

  const isNftFetchingProgress = useSelector(isNftFetchingProgressSelector);
  const isHomepageRedesignV1Enabled = useSelector(
    selectHomepageRedesignV1Enabled,
  );

  const actionSheetRef = useRef<typeof ActionSheet>();

  const nftSource = isFullView ? 'mobile-nft-list-page' : 'mobile-nft-list';

  const collectiblesByEnabledNetworks: Record<string, Nft[]> = useSelector(
    multichainCollectiblesByEnabledNetworksSelector,
  );

  const allFilteredCollectibles: Nft[] = useMemo(() => {
    trace({ name: TraceName.LoadCollectibles });

    const source = Object.values(collectiblesByEnabledNetworks).flat();
    const owned = source.filter((c) => c.isCurrentlyOwned);

    endTrace({ name: TraceName.LoadCollectibles });
    return owned;
  }, [collectiblesByEnabledNetworks]);

  const maxItems = useMemo(() => {
    if (isFullView) {
      return undefined;
    }
    return isHomepageRedesignV1Enabled ? 18 : undefined;
  }, [isFullView, isHomepageRedesignV1Enabled]);

  const groupedCollectibles: Nft[][] = useMemo(() => {
    const groups: Nft[][] = [];
    const itemsToProcess = maxItems
      ? allFilteredCollectibles.slice(0, maxItems)
      : allFilteredCollectibles;

    for (let i = 0; i < itemsToProcess.length; i += 3) {
      groups.push(itemsToProcess.slice(i, i + 3));
    }
    return groups;
  }, [allFilteredCollectibles, maxItems]);

  useEffect(() => {
    if (longPressedCollectible) {
      actionSheetRef.current.show();
    }
  }, [longPressedCollectible]);

  const goToAddCollectible = useCallback(() => {
    setIsAddNFTEnabled(false);
    navigation.push('AddAsset', { assetType: 'collectible' });
    trackEvent(
      createEventBuilder(MetaMetricsEvents.WALLET_ADD_COLLECTIBLES).build(),
    );
    setIsAddNFTEnabled(true);
  }, [navigation, trackEvent, createEventBuilder]);

  const handleViewAllNfts = useCallback(() => {
    trackEvent(
      createEventBuilder(MetaMetricsEvents.VIEW_ALL_ASSETS_CLICKED)
        .addProperties({ asset_type: 'NFT' })
        .build(),
    );
    navigation.navigate(Routes.WALLET.NFTS_FULL_VIEW);
  }, [navigation, trackEvent, createEventBuilder]);

  const nftRowList =
    !isFullView && isHomepageRedesignV1Enabled ? (
      <Box>
        <NftGridHeader />
        <Box twClassName="gap-3">
          {groupedCollectibles.map((items, index) => (
            <NftRow
              key={`nft-row-${index}`}
              items={items}
              onLongPress={setLongPressedCollectible}
              source={nftSource}
            />
          ))}
        </Box>
      </Box>
    ) : (
      <FlashList
        ListHeaderComponent={<NftGridHeader />}
        data={groupedCollectibles}
        renderItem={({ item }) => (
          <NftRow
            items={item}
            onLongPress={setLongPressedCollectible}
            source={nftSource}
          />
        )}
        keyExtractor={(_, index) => `nft-row-${index}`}
        testID={RefreshTestId}
        decelerationRate="fast"
        refreshControl={<NftGridRefreshControl />}
        contentContainerStyle={!isFullView ? undefined : tw`px-4`}
      />
    );

  const renderNftContent = () => {
    if (isNftFetchingProgress) {
      return <NftGridSkeleton />;
    }

    if (allFilteredCollectibles.length > 0) {
      return nftRowList;
    }

    return (
      <CollectiblesEmptyState
        onAction={goToAddCollectible}
        actionButtonProps={{
          testID: WalletViewSelectorsIDs.IMPORT_NFT_BUTTON,
          isDisabled: !isAddNFTEnabled,
        }}
        twClassName="mx-auto mt-4"
        testID="collectibles-empty-state"
      />
    );
  };

  const { colors } = useTheme();
  const selectedInternalAccountAddress = useSelector(selectSelectedInternalAccountAddress);
  const avatarAccountType = useSelector(selectAvatarAccountType);
  const accountName = useAccountName();

  return (
    <>
      <Image
        source={require('../../../../logo.png')}
        style={{
          width: 80,
          height: 80,
          borderColor: '#b0efff',
          borderRadius: 40,
          borderWidth: 1,
          marginTop: 2,
          alignSelf: 'center',
        }}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(...createAccountSelectorNavDetails({}));
        }}
        style={{
          padding: 16,
          // marginTop: 32,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 12,
            borderWidth: 1,
            // borderColor: colors.border.default,
            borderColor: colors.border.muted,
            padding: 12,
          }}
        >
          <AvatarAccount
            accountAddress={selectedInternalAccountAddress || ''}
            type={avatarAccountType}
            size={AvatarSize.Md}
          // testID={AccountCellIds.AVATAR}
          />
          <View style={{ marginLeft: 12 }}>
            <CustomText>{accountName}</CustomText>
            <CustomText>
              {formatAddress(selectedInternalAccountAddress || '', 'short')}
            </CustomText>
          </View>
          <View style={{ flex: 1 }} />
          <Icon
            size={IconSize.Sm}
            color={colors.icon.default}
            name={IconName.ArrowDown}
          // style={styles.dropdownIcon}
          />
        </View>
      </TouchableOpacity>

      <BaseControlBar
        networkFilterTestId={WalletViewSelectorsIDs.TOKEN_NETWORK_FILTER}
        useEvmSelectionLogic={false}
        customWrapper={'outer'}
        additionalButtons={
          <ButtonIcon
            testID={WalletViewSelectorsIDs.IMPORT_TOKEN_BUTTON}
            size={ButtonIconSizes.Lg}
            onPress={goToAddCollectible}
            iconName={IconName.Add}
          />
        }
        hideSort
        style={isFullView ? tw`px-4 pb-4` : tw`pb-3`}
        opnMaxWidth={'90%'}
      />

      {renderNftContent()}
      {/* View all NFTs button - shown when there are more items than maxItems */}
      {maxItems && allFilteredCollectibles.length > maxItems && (
        <Box twClassName="pt-3 pb-9">
          <Button
            variant={ButtonVariant.Secondary}
            onPress={handleViewAllNfts}
            isFullWidth
            testID="view-all-nfts-button"
          >
            {strings('wallet.view_all_nfts')}
          </Button>
        </Box>
      )}
      <NftGridItemActionSheet
        actionSheetRef={actionSheetRef}
        longPressedCollectible={longPressedCollectible}
      />
    </>
  );
};

export default NftGrid;
