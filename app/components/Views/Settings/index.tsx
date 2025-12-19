import React, { useCallback, useEffect } from 'react';
import { StyleSheet, ScrollView, Alert, View } from 'react-native';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { strings } from '../../../../locales/i18n';
import { MetaMetricsEvents } from '../../../core/Analytics';
import { useSelector } from 'react-redux';
import { useTheme } from '../../../util/theme';
import Routes from '../../../constants/navigation/Routes';
import { Authentication } from '../../../core/';
import { SettingsViewSelectorsIDs } from '../../../../e2e/selectors/Settings/SettingsView.selectors';
import CustomText from '../../../component-library/components/Texts/Text';
import { useMetrics } from '../../../components/hooks/useMetrics';
import { createAccountSelectorNavDetails } from '../AccountSelector';
import { IconName } from '../../../component-library/components/Icons/Icon';
import { selectAvatarAccountType } from '../../../selectors/settings';
import { selectSelectedInternalAccountAddress } from '../../../selectors/accountsController';
import { useAccountName } from '../../hooks/useAccountName';
import BaseControlBar from '../../UI/shared/BaseControlBar';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { WalletViewSelectorsIDs } from '../../../../e2e/selectors/wallet/WalletView.selectors';
import OPNLogoGlow from '../../Common/OPNLogoGlow';
// import OPNBackgroundBlobs from '../../Common/OPNBackgroundBlobs';
import LogoutButton from './components/LogoutButton';
import SettingsCard from './components/SettingsCard';
import SettingsRow from './components/SettingsRow';
import LanguagePickerRow from './components/LanguagePickerRow';
import LinearGradient from 'react-native-linear-gradient';

import AccountSelectorButton from '../Wallet/components/AccountSelectorButton';

const createStyles = () =>
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
      paddingTop: 16,
    },
  });

const Settings = () => {
  const { colors, themeAppearance } = useTheme();
  const isDark = themeAppearance === 'dark';
  const { trackEvent, createEventBuilder } = useMetrics();
  const styles = createStyles();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const updateNavBar = useCallback(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);

  useEffect(() => {
    updateNavBar();
  }, [updateNavBar]);

  const onPressNotifications = () => {
    trackEvent(
      createEventBuilder(MetaMetricsEvents.SETTINGS_NOTIFICATIONS).build(),
    );
    navigation.navigate(Routes.SETTINGS.NOTIFICATIONS);
  };

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

  const onPressInfo = () => {
    trackEvent(createEventBuilder(MetaMetricsEvents.SETTINGS_ABOUT).build());
    navigation.navigate('CompanySettings');
  };

  const goToBrowserUrl = (url: string, title: string) => {
    navigation.navigate('Webview', {
      screen: 'SimpleWebview',
      params: {
        url,
        title,
      },
    } as never);
  };

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
    <AccountSelectorButton
      onPress={() =>
        navigation.navigate(...(createAccountSelectorNavDetails({}) as [string, object]))
      }
      accountName={accountName}
      accountAddress={selectedInternalAccountAddress || ''}
      avatarAccountType={avatarAccountType}
      colors={colors}
      theme={themeAppearance}
    />
  );

  const insets = useSafeAreaInsets();

  const content = (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={{ paddingTop: insets.top }}
      testID={SettingsViewSelectorsIDs.SETTINGS_SCROLL_ID}
    >
      <OPNLogoGlow />
      <View style={styles.content}>
        {AccountSelectionCard}

        <View style={tw`h-1`} />

        <BaseControlBar
          networkFilterTestId={WalletViewSelectorsIDs.TOKEN_NETWORK_FILTER}
          useEvmSelectionLogic={false}
          customWrapper={'none'}
          hideSort
          style={tw`-mt-1 px-4 pb-0`}
          opnMaxWidth={'100%'}
        />

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
    <View style={styles.wrapper}>
      {isDark ? (
        <LinearGradient
          colors={['#0a0b22', '#0f132a']}
          style={styles.linearGradient}
        >
          {/* <OPNBackgroundBlobs /> */}
          {content}
        </LinearGradient>
      ) : (
        <View style={[styles.fill, { backgroundColor: colors.background.default, paddingTop: insets.top }]}>
          {content}
        </View>
      )}
    </View>
  );
};

export default Settings;
