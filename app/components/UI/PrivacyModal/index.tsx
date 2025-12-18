import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import { strings } from '../../../../locales/i18n';
import { useTheme } from '../../../util/theme';
import Button from '../../../component-library/components/Buttons/Button';
import { ButtonVariants, ButtonSize, ButtonWidthTypes } from '../../../component-library/components/Buttons/Button/Button.types';
import createStyles from './styles';

interface PrivacyModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const PrivacyModal = ({ isVisible, onClose }: PrivacyModalProps) => {
  const { colors, themeAppearance } = useTheme();
  const styles = createStyles(colors);
  const isDarkMode = themeAppearance === 'dark';

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      style={styles.modal}
      backdropOpacity={0.5}
      animationIn="zoomIn"
      animationOut="zoomOut"
      useNativeDriver
      propagateSwipe
    >
      <View
        style={[
          styles.container,
          isDarkMode ? styles.darkContainer : styles.lightContainer,
        ]}
      >
        {/* Header */}
        <View
          style={[
            styles.header,
            isDarkMode ? styles.darkHeader : styles.lightHeader,
          ]}
        >
          <Text
            style={[
              styles.title,
              isDarkMode ? styles.darkTitle : styles.lightTitle,
            ]}
          >
            {strings('opn_privacy.title')}
          </Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Icon
              name="close"
              size={24}
              color={isDarkMode ? '#b0efff' : '#9fa3a7'}
            />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={true}
          indicatorStyle={isDarkMode ? 'white' : 'black'}
          scrollEventThrottle={16}
          bounces={true}
          nestedScrollEnabled={true}
        >
          <Text
            style={[
              styles.lastUpdated,
              isDarkMode ? styles.darkText : styles.lightText,
            ]}
          >
            {strings('opn_privacy.last_updated')}
          </Text>

          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((section) => (
            <View key={section} style={styles.section}>
              <Text
                style={[
                  styles.sectionTitle,
                  isDarkMode ? styles.darkTitle : styles.lightTitle,
                ]}
              >
                {strings(`opn_privacy.section_${section}_title`)}
              </Text>
              {section === 2 ? (
                <>
                  <Text
                    style={[
                      styles.subSectionTitle,
                      isDarkMode ? styles.darkTitle : styles.lightTitle,
                    ]}
                  >
                    {strings('opn_privacy.section_2_1_title')}
                  </Text>
                  {[1, 2, 3, 4].map((item) => (
                    <Text
                      key={item}
                      style={[
                        styles.listItem,
                        isDarkMode ? styles.darkText : styles.lightText,
                      ]}
                    >
                      • {strings(`opn_privacy.section_2_1_item_${item}`)}
                    </Text>
                  ))}
                  <Text
                    style={[
                      styles.subSectionTitle,
                      isDarkMode ? styles.darkTitle : styles.lightTitle,
                    ]}
                  >
                    {strings('opn_privacy.section_2_2_title')}
                  </Text>
                  {[1, 2, 3].map((item) => (
                    <Text
                      key={item}
                      style={[
                        styles.listItem,
                        isDarkMode ? styles.darkText : styles.lightText,
                      ]}
                    >
                      • {strings(`opn_privacy.section_2_2_item_${item}`)}
                    </Text>
                  ))}
                  <Text
                    style={[
                      styles.subSectionTitle,
                      isDarkMode ? styles.darkTitle : styles.lightTitle,
                    ]}
                  >
                    {strings('opn_privacy.section_2_3_title')}
                  </Text>
                  {[1, 2, 3, 4].map((item) => (
                    <Text
                      key={item}
                      style={[
                        styles.listItem,
                        isDarkMode ? styles.darkText : styles.lightText,
                      ]}
                    >
                      • {strings(`opn_privacy.section_2_3_item_${item}`)}
                    </Text>
                  ))}
                </>
              ) : (
                <Text
                  style={[
                    styles.sectionContent,
                    isDarkMode ? styles.darkText : styles.lightText,
                  ]}
                >
                  {strings(`opn_privacy.section_${section}_content`)}
                </Text>
              )}

              {section === 3 &&
                [1, 2, 3, 4, 5, 6].map((item) => (
                  <Text
                    key={item}
                    style={[
                      styles.listItem,
                      isDarkMode ? styles.darkText : styles.lightText,
                    ]}
                  >
                    • {strings(`opn_privacy.section_3_item_${item}`)}
                  </Text>
                ))}
              {section === 4 &&
                [1, 2, 3, 4, 5].map((item) => (
                  <Text
                    key={item}
                    style={[
                      styles.listItem,
                      isDarkMode ? styles.darkText : styles.lightText,
                    ]}
                  >
                    • {strings(`opn_privacy.section_4_item_${item}`)}
                  </Text>
                ))}
              {section === 5 && (
                <>
                  {[1, 2, 3, 4].map((item) => (
                    <Text
                      key={item}
                      style={[
                        styles.listItem,
                        isDarkMode ? styles.darkText : styles.lightText,
                      ]}
                    >
                      • {strings(`opn_privacy.section_5_item_${item}`)}
                    </Text>
                  ))}
                  <Text
                    style={[
                      styles.sectionContent,
                      isDarkMode ? styles.darkText : styles.lightText,
                      { marginTop: 8 },
                    ]}
                  >
                    {strings('opn_privacy.section_5_footer')}
                  </Text>
                </>
              )}
              {section === 7 &&
                [1, 2, 3, 4].map((item) => (
                  <Text
                    key={item}
                    style={[
                      styles.listItem,
                      isDarkMode ? styles.darkText : styles.lightText,
                    ]}
                  >
                    • {strings(`opn_privacy.section_7_item_${item}`)}
                  </Text>
                ))}
              {section === 8 &&
                [1, 2, 3, 4, 5].map((item) => (
                  <Text
                    key={item}
                    style={[
                      styles.listItem,
                      isDarkMode ? styles.darkText : styles.lightText,
                    ]}
                  >
                    • {strings(`opn_privacy.section_8_item_${item}`)}
                  </Text>
                ))}
              {section === 12 && (
                <Text
                  style={[
                    styles.sectionContent,
                    isDarkMode ? styles.darkText : styles.lightText,
                    { marginTop: 8 },
                  ]}
                >
                  {strings('opn_privacy.section_12_support')}
                </Text>
              )}
            </View>
          ))}

          {/* Security Card */}
          <View
            style={[
              styles.securityCard,
              isDarkMode ? styles.darkSecurityCard : styles.lightSecurityCard,
            ]}
          >
            <Text
              style={[
                styles.sectionTitle,
                isDarkMode ? styles.darkTitle : styles.lightTitle,
              ]}
            >
              {strings('opn_privacy.security_priority_title')}
            </Text>
            <Text
              style={[
                styles.sectionContent,
                isDarkMode ? styles.darkText : styles.lightText,
              ]}
            >
              {strings('opn_privacy.security_priority_content')}
            </Text>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default PrivacyModal;
