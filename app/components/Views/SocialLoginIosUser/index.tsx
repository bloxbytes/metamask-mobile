import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  useNavigation,
  useRoute,
  ParamListBase,
} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import LottieView, { AnimationObject } from 'lottie-react-native';
import Text, {
  TextVariant,
  TextColor,
} from '../../../component-library/components/Texts/Text';
import Button, {
  ButtonSize,
  ButtonVariants,
  ButtonWidthTypes,
} from '../../../component-library/components/Buttons/Button';
import { strings } from '../../../../locales/i18n';
import Routes from '../../../constants/navigation/Routes';
import { PREVIOUS_SCREEN, ONBOARDING } from '../../../constants/navigation';
import CelebratingFox from '../../../animations/Celebrating_Fox.json';
import { useTheme } from '../../../util/theme';
import createStyles from './index.styles';

interface SocialLoginIosUserProps {
  type: 'new' | 'existing';
}

const SocialLoginIosUser: React.FC<SocialLoginIosUserProps> = ({ type }) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const route = useRoute();

  const { accountName, oauthLoginSuccess, onboardingTraceCtx, provider } =
    (route.params as {
      accountName?: string;
      oauthLoginSuccess?: boolean;
      onboardingTraceCtx?: unknown;
      provider?: string;
    }) || {};

  const handleSetMetaMaskPin = () => {
    navigation.replace(Routes.ONBOARDING.CHOOSE_PASSWORD, {
      [PREVIOUS_SCREEN]: ONBOARDING,
      oauthLoginSuccess,
      onboardingTraceCtx,
      accountName,
      provider,
    });
  };

  const handleSecureWallet = () => {
    navigation.replace('Rehydrate', {
      [PREVIOUS_SCREEN]: ONBOARDING,
      oauthLoginSuccess: true,
      onboardingTraceCtx,
    });
  };

  const isUserTypeNew = type === 'new';

  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.wrapper}>
      <View style={styles.decorativeBackground}>
        <View style={styles.decorativeCircle1} />
        <View style={styles.decorativeCircle2} />
      </View>
      <View style={styles.root}>
        <View style={styles.animationContainer}>
          <View style={styles.largeFoxWrapper}>
            <LottieView
              style={styles.foxAnimation}
              autoPlay
              loop
              source={CelebratingFox as AnimationObject}
              resizeMode="contain"
            />
          </View>

          <Text
            variant={TextVariant.DisplayMD}
            color={TextColor.Default}
            style={{ textAlign: 'center' }}
            testID={
              isUserTypeNew
                ? OnboardingSelectorIDs.SOCIAL_LOGIN_IOS_NEW_USER_TITLE
                : OnboardingSelectorIDs.SOCIAL_LOGIN_IOS_EXISTING_USER_TITLE
            }
          >
            {strings(
              isUserTypeNew
                ? 'social_login_ios_user.new_user_title'
                : 'social_login_ios_user.existing_user_title',
            )}
          </Text>
        </View>

        <View style={styles.ctaContainer}>
          <Button
            variant={ButtonVariants.Primary}
            testID={
              isUserTypeNew
                ? OnboardingSelectorIDs.SOCIAL_LOGIN_IOS_NEW_USER_BUTTON
                : OnboardingSelectorIDs.SOCIAL_LOGIN_IOS_EXISTING_USER_BUTTON
            }
            width={ButtonWidthTypes.Full}
            size={Device.isMediumDevice() ? ButtonSize.Md : ButtonSize.Lg}
            style={styles.primaryButton}
            label={
              <View style={styles.primaryButtonLabel}>
                <Text
                  variant={TextVariant.BodyMDMedium}
                  style={{ color: '#FFFFFF' }}
                >
                  {strings(
                    isUserTypeNew
                      ? 'social_login_ios_user.new_user_button'
                      : 'social_login_ios_user.existing_user_button',
                  )}
                </Text>
              </View>
            }
            onPress={isUserTypeNew ? handleSetMetaMaskPin : handleSecureWallet}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SocialLoginIosUser;
