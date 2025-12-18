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

interface TermsModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const TermsModal = ({ isVisible, onClose }: TermsModalProps) => {
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
            {strings('opn_terms.title')}
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
            {strings('opn_terms.last_updated')}
          </Text>

          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((section) => (
            <View key={section} style={styles.section}>
              <Text
                style={[
                  styles.sectionTitle,
                  isDarkMode ? styles.darkTitle : styles.lightTitle,
                ]}
              >
                {strings(`opn_terms.section_${section}_title`)}
              </Text>
              <Text
                style={[
                  styles.sectionContent,
                  isDarkMode ? styles.darkText : styles.lightText,
                ]}
              >
                {strings(`opn_terms.section_${section}_content`)}
              </Text>
              {section === 3 &&
                [1, 2, 3, 4, 5].map((item) => (
                  <Text
                    key={item}
                    style={[
                      styles.listItem,
                      isDarkMode ? styles.darkText : styles.lightText,
                    ]}
                  >
                    • {strings(`opn_terms.section_3_item_${item}`)}
                  </Text>
                ))}
              {section === 5 &&
                [1, 2, 3, 4, 5].map((item) => (
                  <Text
                    key={item}
                    style={[
                      styles.listItem,
                      isDarkMode ? styles.darkText : styles.lightText,
                    ]}
                  >
                    • {strings(`opn_terms.section_5_item_${item}`)}
                  </Text>
                ))}
              {section === 6 &&
                [1, 2, 3, 4].map((item) => (
                  <Text
                    key={item}
                    style={[
                      styles.listItem,
                      isDarkMode ? styles.darkText : styles.lightText,
                    ]}
                  >
                    • {strings(`opn_terms.section_6_item_${item}`)}
                  </Text>
                ))}
            </View>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default TermsModal;
