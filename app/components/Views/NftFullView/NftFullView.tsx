import { Box } from '@metamask/design-system-react-native';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { strings } from '../../../../locales/i18n';
import BottomSheetHeader from '../../../component-library/components/BottomSheets/BottomSheetHeader';
import NftGrid from '../../UI/NftGrid/NftGrid';
import { View } from 'react-native';

interface NFTNavigationParamList {
  AddAsset: { assetType: string };
  [key: string]: undefined | object;
}

const NftFullView = () => {
  const navigation =
    useNavigation<StackNavigationProp<NFTNavigationParamList, 'AddAsset'>>();
  const tw = useTailwind();

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    // <SafeAreaView style={tw`flex-1 bg-default pb-4`}>
    <SafeAreaView style={tw`flex-1 pb-4`}>
      {/* <BottomSheetHeader onBack={handleBackPress}>
        {strings('wallet.collectibles')}
      </BottomSheetHeader> */}
      <Box twClassName="flex-1">
        <NftGrid isFullView />
      </Box>
    </SafeAreaView>
  );
};

export default NftFullView;
