import React, { useCallback, useEffect } from 'react';
import { StyleSheet, ScrollView, Alert, TouchableOpacity, View, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import SettingsDrawer from '../../UI/SettingsDrawer';
// import { getSettingsNavigationOptions } from '../../UI/Navbar';
import { strings } from '../../../../locales/i18n';
import { MetaMetricsEvents } from '../../../core/Analytics';
import { useSelector } from 'react-redux';
import { useTheme } from '../../../util/theme';
import Routes from '../../../constants/navigation/Routes';
import { Authentication } from '../../../core/';
import { Colors } from '../../../util/theme/models';
import { SettingsViewSelectorsIDs } from '../../../../e2e/selectors/Settings/SettingsView.selectors';
///: BEGIN:ONLY_INCLUDE_IF(external-snaps)
import { createSnapsSettingsListNavDetails } from '../Snaps/SnapsSettingsList/SnapsSettingsList';
///: END:ONLY_INCLUDE_IF
import CustomText from '../../../component-library/components/Texts/Text';
import { useMetrics } from '../../../components/hooks/useMetrics';
// import { isNotificationsFeatureEnabled } from '../../../util/notifications';
// import { isTest } from '../../../util/test/utils';
// import { isPermissionsSettingsV1Enabled } from '../../../util/networks';
// import { selectIsEvmNetworkSelected } from '../../../selectors/multichainNetworkController';
// import { selectSeedlessOnboardingLoginFlow } from '../../../selectors/seedlessOnboardingController';
import { createAccountSelectorNavDetails } from '../AccountSelector';
import AvatarAccount from '../../../component-library/components/Avatars/Avatar/variants/AvatarAccount';
import { AvatarSize } from '../../../component-library/components/Avatars/Avatar';
import Icon, { IconName, IconSize } from '../../../component-library/components/Icons/Icon';
import { selectAvatarAccountType } from '../../../selectors/settings';
import { selectSelectedInternalAccountAddress } from '../../../selectors/accountsController';
import { formatAddress } from '../../../util/address';
import { useAccountName } from '../../hooks/useAccountName';
import BaseControlBar from '../../UI/shared/BaseControlBar';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { WalletViewSelectorsIDs } from '../../../../e2e/selectors/wallet/WalletView.selectors';
import OPNLogoGlow from '../../Common/OPNLogoGlow';
import OPNBackgroundBlobs from '../../Common/OPNBackgroundBlobs';
import LogoutButton from './components/LogoutButton';
import SettingsCard from './components/SettingsCard';
import SettingsRow from './components/SettingsRow';
import LanguagePickerRow from './components/LanguagePickerRow';
import LinearGradient from 'react-native-linear-gradient';

const GLASS_BG_COLOR = 'rgba(26, 29, 58, 0.3)';
const GLASS_BORDER_COLOR = 'rgba(65, 5, 182, 0.3)';

const createStyles = (colors: Colors, isDark: boolean) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    linearGradient: {
      flex: 1,
    },
    scrollContainer: {
      flex: 1,
    },

    logo: {
      width: 80,
      height: 80,
      borderColor: colors.border.muted,   // or create your custom color
      borderRadius: 40,
      borderWidth: 1,
      marginTop: 40,
    },

    accountCardWrapper: {
      padding: 16,
      marginTop: 16,
    },

    accountCard: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 12,
      borderWidth: isDark ? 1 : 2,
      borderColor: isDark ? GLASS_BORDER_COLOR : colors.border.muted,
      padding: 12,
      backgroundColor: isDark ? GLASS_BG_COLOR : colors.background.default,
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: isDark ? 0.1 : 0.08,
          shadowRadius: isDark ? 6 : 4,
        },
        android: {
          elevation: isDark ? 8 : 4,
        },
      }),
    },
    accountInfo: {
      marginLeft: 12,
    },
    accountName: {
      fontSize: 14, // text-sm
      fontWeight: '400',
      color: colors.text.default,
    },
    accountAddress: {
      fontSize: 12, // text-xs
      fontWeight: '400',
      color: isDark ? colors.text.muted : colors.text.alternative,
    },

    fill: {
      flex: 1,
    },
    settingsHeaderWrapper: {
      paddingHorizontal: 16,
      marginTop: 16,
      marginBottom: 16,
    },
    settingsHeaderText: {
      fontSize: 18,
      fontWeight: '600',
    },
    content: {
      paddingBottom: 40,
    },
  });

const Settings = () => {
  const { colors, themeAppearance } = useTheme();
  const isDark = themeAppearance === 'dark';
  const { trackEvent, createEventBuilder } = useMetrics();
  const styles = createStyles(colors, isDark);
  // TODO: Replace "any" with type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigation = useNavigation<any>();

  // const seedphraseBackedUp = useSelector(
  //   // TODO: Replace "any" with type
  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   (state: any) => state.user.seedphraseBackedUp,
  // );

  // const isEvmSelected = useSelector(selectIsEvmNetworkSelected);

  // const updateNavBar = useCallback(() => {
  //   navigation.setOptions(
  //     getSettingsNavigationOptions(
  //       strings('app_settings.title'),
  //       colors,
  //       navigation,
  //     ),
  //   );
  // }, [navigation, colors]);

  const updateNavBar = useCallback(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);

  useEffect(() => {
    updateNavBar();
  }, [updateNavBar]);



  // const onPressAdvanced = () => {
  //   trackEvent(createEventBuilder(MetaMetricsEvents.SETTINGS_ADVANCED).build());
  //   navigation.navigate('AdvancedSettings');
  // };

  const onPressNotifications = () => {
    trackEvent(
      createEventBuilder(MetaMetricsEvents.SETTINGS_NOTIFICATIONS).build(),
    );
    navigation.navigate(Routes.SETTINGS.NOTIFICATIONS);
  };

  // const onPressBackupAndSync = () => {
  //   trackEvent(
  //     createEventBuilder(MetaMetricsEvents.SETTINGS_BACKUP_AND_SYNC).build(),
  //   );
  //   navigation.navigate(Routes.SETTINGS.BACKUP_AND_SYNC);
  // };

  const onRevealSeed = () => {
    trackEvent(
      createEventBuilder(
        MetaMetricsEvents.SETTINGS_SECURITY_AND_PRIVACY,
      ).build(),
    );
     navigation.navigate(Routes.MODAL.ROOT_MODAL_FLOW, {
      screen: Routes.MODAL.SRP_REVEAL_QUIZ,
    });
  };

  // const onPressOnRamp = () => {
  //   trackEvent(
  //     createEventBuilder(MetaMetricsEvents.ONRAMP_SETTINGS_CLICKED).build(),
  //   );
  //   navigation.navigate(Routes.RAMP.SETTINGS);
  // };

  // const onPressExperimental = () => {
  //   trackEvent(
  //     createEventBuilder(MetaMetricsEvents.SETTINGS_EXPERIMENTAL).build(),
  //   );
  //   navigation.navigate('ExperimentalSettings');
  // };

  // const onPressAesCryptoTestForm = () => {
  //   navigation.navigate('AesCryptoTestForm');
  // };

  const onPressInfo = () => {
    trackEvent(createEventBuilder(MetaMetricsEvents.SETTINGS_ABOUT).build());
    navigation.navigate('CompanySettings');
  };

  // const onPressContacts = () => {
  //   navigation.navigate('ContactsSettings');
  // };

  // const onPressDeveloperOptions = () => {
  //   navigation.navigate('DeveloperOptions');
  // };
  // const onPressFeatureFlagOverride = () => {
  //   navigation.navigate(Routes.FEATURE_FLAG_OVERRIDE);
  // };

  // const goToManagePermissions = () => {
  //   navigation.navigate('PermissionsManager');
  // };

  const goToBrowserUrl = (url: string, title: string) => {
    navigation.navigate('Webview', {
      screen: 'SimpleWebview',
      params: {
        url,
        title,
      },
    });
  };

  // ///: BEGIN:ONLY_INCLUDE_IF(external-snaps)
  // const onPressSnaps = () => {
  //   navigation.navigate(...createSnapsSettingsListNavDetails());
  // };
  // ///: END:ONLY_INCLUDE_IF

  // const submitFeedback = () => {
  // trackEvent(
  //   createEventBuilder(
  //     MetaMetricsEvents.NAVIGATION_TAPS_SEND_FEEDBACK,
  //   ).build(),
  // );
  // goToBrowserUrl(
  //   'https://community.metamask.io/c/feature-requests-ideas/',
  //   strings('app_settings.request_feature'),
  // );
  // };

  const showHelp = () => {
    let supportUrl = 'https://iopn.io/contact';

    ///: BEGIN:ONLY_INCLUDE_IF(beta)
    supportUrl = 'https://intercom.help/internal-beta-testing/en/';
    ///: END:ONLY_INCLUDE_IF

    goToBrowserUrl(supportUrl, strings('app_settings.contact_support'));
    trackEvent(
      createEventBuilder(MetaMetricsEvents.NAVIGATION_TAPS_GET_HELP).build(),
    );
  };

  const onPressLock = async () => {
    await Authentication.lockApp({ reset: false, locked: false });
  };

  const lock = () => {
    Alert.alert(
      strings('drawer.lock_title'),
      '',
      [
        {
          text: strings('drawer.lock_cancel'),
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: strings('drawer.lock_ok'),
          onPress: onPressLock,
        },
      ],
      { cancelable: false },
    );
    trackEvent(
      createEventBuilder(MetaMetricsEvents.NAVIGATION_TAPS_LOGOUT).build(),
    );
  };

  const avatarAccountType = useSelector(selectAvatarAccountType);
  const selectedInternalAccountAddress = useSelector(selectSelectedInternalAccountAddress);
  const accountName = useAccountName();
  const tw = useTailwind();

  const resetPassword = (): void => {
    navigation.navigate(Routes.SETTINGS.CHANGE_PASSWORD);
  };

  const AccountSelectionCard = (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(...createAccountSelectorNavDetails({}));
      }}
      style={styles.accountCardWrapper}
    >
      <View style={styles.accountCard}>
        <AvatarAccount
          accountAddress={selectedInternalAccountAddress || ''}
          type={avatarAccountType}
          size={AvatarSize.Md}
        />
        <View style={styles.accountInfo}>
          <CustomText style={styles.accountName}>{accountName}</CustomText>
          <CustomText style={styles.accountAddress}>
            {formatAddress(selectedInternalAccountAddress || '', 'short')}
          </CustomText>
        </View>

        <View style={styles.fill} />

        <Icon
          size={IconSize.Sm}
          color={colors.icon.default}
          name={IconName.ArrowDown}
        />
      </View>
    </TouchableOpacity>
  );


  // const oauthFlow = useSelector(selectSeedlessOnboardingLoginFlow);
  const content = (
    <ScrollView
      style={styles.scrollContainer}
      testID={SettingsViewSelectorsIDs.SETTINGS_SCROLL_ID}
    >
      <OPNLogoGlow />
      <View style={styles.content}>
        {AccountSelectionCard}

        <BaseControlBar
          networkFilterTestId={WalletViewSelectorsIDs.TOKEN_NETWORK_FILTER}
          useEvmSelectionLogic={false}
          customWrapper={'none'}
          hideSort
          style={tw`-mt-1 px-4 pb-0`}
          opnMaxWidth={'100%'}
        />

        {/* Settings Header - matching React: text-lg mb-4 text-black */}
        <View style={styles.settingsHeaderWrapper}>
          <CustomText
            style={[styles.settingsHeaderText, { color: colors.text.default }]}
          >
            Settings
          </CustomText>
        </View>

        <SettingsCard title="App Info">
          <SettingsRow
            title="OPN Wallet"
            subtitle={'Version ' + strings('app_settings.version_number')}
            icon={IconName.Global}
            onPress={onPressInfo}
            large
          />
        </SettingsCard>

        <SettingsCard title="Security & Privacy">
          <SettingsRow
            title="Change Password"
            icon={IconName.Lock}
            onPress={resetPassword}
          />
          <SettingsRow
            title="Reveal Secret Phrase"
            icon={IconName.Eye}
            onPress={onRevealSeed}
          />
        </SettingsCard>

        <SettingsCard title="Preferences">
          <LanguagePickerRow />
          <SettingsRow
            title="Notifications"
            icon={IconName.Notification}
            onPress={onPressNotifications}
          />
        </SettingsCard>

        <SettingsCard title="About">
          <SettingsRow
            title="Help & Support"
            icon={IconName.Question}
            onPress={showHelp}
          />
          <SettingsRow
            title="Terms & Privacy"
            icon={IconName.PrivacyTip}
            onPress={onPressInfo}
          />
        </SettingsCard>

        <LogoutButton onPress={lock} />
      </View>
    </ScrollView>
  );

  return (
    <SafeAreaView edges={{ top: 'additive' }} style={styles.wrapper}>
      {isDark ? (
        <LinearGradient
          colors={isDark ? ['#0a0b22', '#0f132a'] : [colors.background.default, colors.background.default]}
          style={styles.linearGradient}
        >
          <OPNBackgroundBlobs />
          {content}
        </LinearGradient>
      ) : (
        content
      )}
    </SafeAreaView>
  );
};

export default Settings;

