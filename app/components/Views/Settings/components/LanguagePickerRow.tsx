import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import Modal from 'react-native-modal';
import I18n, { getLanguages, setLocale, strings } from '../../../../../locales/i18n';
import SettingsRow from './SettingsRow';
import { IconName } from '../../../../component-library/components/Icons/Icon';
import { useTheme } from '../../../../util/theme';
import Device from '../../../../util/device';
import IconCheck from 'react-native-vector-icons/MaterialCommunityIcons';
import { fontStyles } from '../../../../styles/common';

const ROW_HEIGHT = 50;

const LanguagePickerRow = () => {
  const { colors } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(I18n.locale.substr(0, 2));
  const [languages, setLanguages] = useState<Record<string, string>>({});

  useEffect(() => {
    setLanguages(getLanguages());
  }, []);

  const languageOptions = Object.keys(languages).map((key) => ({
    value: key,
    label: languages[key],
    key,
  }));

  const onSelect = (lang: string) => {
    if (lang !== currentLanguage) {
      setLocale(lang);
      setCurrentLanguage(lang);
    }
    setIsVisible(false);
    // Reload logic might be needed if the app doesn't reactively update all strings
    // In GeneralSettings they do: setTimeout(() => this.props.navigation.navigate('Home'), 100);
    // We might just let redux/i18n handle it if configured, or user navigates.
  };

  const currentLabel = languages[currentLanguage] || currentLanguage;

  const styles = createStyles(colors);

  return (
    <>
      <SettingsRow
        title={strings('app_settings.language')}

        icon={IconName.Global}
        onPress={() => setIsVisible(true)}
        rightText={currentLabel}
      />

      <Modal
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
        onBackButtonPress={() => setIsVisible(false)}
        style={styles.modal}
        useNativeDriver
        backdropColor={colors.overlay.default}
        backdropOpacity={1}
      >
        <View style={styles.modalView}>
          <View style={styles.accesoryBar}>
             <Text style={styles.label}>{strings('app_settings.current_language')}</Text>
          </View>
          <ScrollView style={styles.list}>
            <View style={styles.listWrapper}>
              {languageOptions.map((option) => (
                <TouchableOpacity
                  onPress={() => onSelect(option.value)}
                  style={styles.optionButton}
                  key={option.key}
                >
                  <Text style={styles.optionLabel} numberOfLines={1}>
                    {option.label}
                  </Text>
                  {currentLanguage === option.value && (
                    <IconCheck
                      style={styles.icon}
                      name="check"
                      size={24}
                      color={colors.primary.default}
                    />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </Modal>
    </>
  );
};

const createStyles = (colors: any) =>
  StyleSheet.create({
    modal: {
      margin: 0,
            width: '100%',
      padding: 60,
    },
    modalView: {
      backgroundColor: colors.background.default,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      maxHeight: Device.getDeviceHeight() - 120,
      width: '100%',
    },
    accesoryBar: {
      width: '100%',
      paddingTop: 15,
      paddingBottom: 15,
      borderBottomColor: colors.border.muted,
      borderBottomWidth: 1,
      alignItems: 'center',
    },
    label: {
      fontSize: 17,
      ...fontStyles.bold,
      color: colors.text.default,
    },
    list: {
      width: '100%',
    },
    listWrapper: {
      paddingBottom: 10,
    },
    optionButton: {
      paddingHorizontal: 15,
      paddingVertical: 12,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: colors.border.muted,
    },
    optionLabel: {
      fontSize: 14,
      ...fontStyles.normal,
      color: colors.text.default,
      flex: 1,
    },
    icon: {
      marginLeft: 10,
    },
  });

export default LanguagePickerRow;
