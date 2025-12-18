import React from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import CustomText from '../../../../../component-library/components/Texts/Text';
import { useAppTheme, useTheme } from '../../../../../util/theme';

interface BadgesModalProps {
  visible: boolean;
  onClose: () => void;
}

export const BadgesModal: React.FC<BadgesModalProps> = ({
  visible,
  onClose,
}) => {
  const { colors } = useTheme();
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View
        style={[styles.overlay, { backgroundColor: colors.background.default }]}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <CustomText style={styles.headerTitle}>
              Badges & Achievements
            </CustomText>
            <CustomText style={styles.headerSubtitle}>
              4 of 8 unlocked
            </CustomText>
          </View>

          <TouchableOpacity onPress={onClose}>
            <Svg width={22} height={22} stroke="#555" strokeWidth={2}>
              <Path d="M18 6 6 18" strokeLinecap="round" />
              <Path d="M6 6l12 12" strokeLinecap="round" />
            </Svg>
          </TouchableOpacity>
        </View>

        {/* BODY SCROLL */}
        <ScrollView
          style={styles.body}
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >
          {/* UNLOCKED TITLE */}
          <CustomText style={styles.sectionTitleUnlocked}>Unlocked</CustomText>

          {/* GRID */}
          <View style={styles.grid}>
            {UNLOCKED_BADGES.map((item, index) => (
              <BadgeCardUnlocked key={index} {...item} />
            ))}
          </View>

          {/* LOCKED SECTION */}
          <CustomText style={styles.sectionTitleLocked}>Locked</CustomText>

          <View style={styles.grid}>
            {LOCKED_BADGES.map((item, index) => (
              <BadgeCardLocked key={index} {...item} />
            ))}
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const BadgeCardUnlocked = ({
  title,
  desc,
  rep,
  iconBg,
  icon,
}: {
  title: string;
  desc: string;
  rep: string;
  iconBg: string;
  icon: React.ReactNode;
}) => {
  const { colors } = useAppTheme();
  return (
    <View style={[styles.card, { backgroundColor: colors.background.default }]}>
      <View style={[styles.iconCircle, { backgroundColor: iconBg }]}>
        {icon}
      </View>

      <CustomText style={styles.cardTitle}>{title}</CustomText>
      <CustomText style={styles.cardDesc}>{desc}</CustomText>

      <View style={styles.repRow}>
        <AwardIcon color="#4105b6" size={24} />
        <CustomText style={styles.repCustomText}>+{rep} REP</CustomText>
      </View>
    </View>
  );
};

const BadgeCardLocked = ({
  title,
  desc,
  rep,
}: {
  title: string;
  desc: string;
  rep: string;
}) => {
  const { colors } = useAppTheme();
  return (
    <View
      style={[
        styles.cardLocked,
        { backgroundColor: colors.background.default },
      ]}
    >
      <View style={styles.iconCircleLocked}>
        <LockIcon size={24} color="#999" />
      </View>

      <CustomText style={styles.cardTitleLocked}>{title}</CustomText>
      <CustomText style={styles.cardDescLocked}>{desc}</CustomText>

      <View style={styles.repRow}>
        <AwardIcon color="#999" size={24} />
        <CustomText style={styles.repCustomTextLocked}>+{rep} REP</CustomText>
      </View>
    </View>
  );
};

const AwardIcon = ({ color = '#4105b6', size = 20 }) => (
  <Svg width={size} height={size} stroke={color} fill="none" strokeWidth={2}>
    <Path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
    <Circle cx="12" cy="8" r="6" />
  </Svg>
);

const StarIcon = ({ color = '#0f112a', size = 28 }) => (
  <Svg width={size} height={size} stroke={color} fill="none" strokeWidth={2}>
    <Path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
  </Svg>
);

const LockIcon = ({ color = '#999', size = 26 }) => (
  <Svg width={size} height={size} stroke={color} fill="none" strokeWidth={2}>
    <Rect x="3" y="11" width="18" height="11" rx="2" />
    <Path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </Svg>
);

const ZapIcon = () => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <Path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
  </Svg>
);

const ShieldIcon = ({
  color = '#0f112a',
  size = 28,
}: {
  color?: string;
  size?: number;
}) => (
  <Svg width={size} height={size} stroke={color} fill="none" strokeWidth={2}>
    <Path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  </Svg>
);

const LOCKED_BADGES = [
  {
    title: 'Whale Status',
    desc: 'Hold over $50,000 in assets',
    rep: '2500',
  },
  {
    title: 'Diamond Hands',
    desc: 'Hold tokens for 1 year',
    rep: '2000',
  },
  {
    title: 'DeFi Pioneer',
    desc: 'Use 5 different DeFi protocols',
    rep: '1500',
  },
  {
    title: 'Community Leader',
    desc: 'Refer 10 new users',
    rep: '3000',
  },
];

const UNLOCKED_BADGES = [
  {
    title: 'Early Adopter',
    desc: 'Joined OPN in the first month',
    rep: '500',
    iconBg: 'rgb(176,239,255)',
    icon: <StarIcon size={24} />,
  },
  {
    title: 'Trading Master',
    desc: 'Completed 100 swap transactions',
    rep: '1000',
    iconBg: 'rgb(65,5,182)',
    icon: <ZapIcon />,
  },
  {
    title: 'NFT Collector',
    desc: 'Own 10 or more NFTs',
    rep: '750',
    iconBg: 'rgb(99,5,182)',
    icon: <AwardIcon color="#0f112a" size={24} />,
  },
  {
    title: 'Security Pro',
    desc: 'Enable all security features',
    rep: '300',
    iconBg: 'rgb(34,128,205)',
    icon: <ShieldIcon size={24} />,
  },
];

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.95)',
    backdropFilter: 'blur(6px)',
  },

  header: {
    padding: 16,
    borderBottomWidth: 2,
    borderColor: '#3d00b51c',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 80,
  },

  headerTitle: {
    // color: '#000',
    fontSize: 20,
    fontWeight: '600',
  },

  headerSubtitle: {
    fontSize: 13,
    // color: '#666',
  },

  body: {
    flex: 1,
    padding: 16,
  },

  sectionTitleUnlocked: {
    // color: '#4105b6',
    fontSize: 16,
    marginBottom: 12,
  },

  sectionTitleLocked: {
    // color: '#666',
    fontSize: 16,
    marginBottom: 12,
    marginTop: 24,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },

  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: '#3d00b51c',
  },

  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  cardTitle: {
    fontSize: 14,
    // color: '#000',
    marginBottom: 4,
  },

  cardDesc: {
    fontSize: 12,
    // color: '#666',
    marginBottom: 8,
  },

  repRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  repCustomText: {
    fontSize: 12,
    // color: '#4105b6',
  },

  // LOCKED
  cardLocked: {
    width: '48%',
    backgroundColor: '#f5f5f5',
    opacity: 0.6,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#3d00b51c',
  },

  iconCircleLocked: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#e5e7eb',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  cardTitleLocked: {
    fontSize: 14,
    // color: '#666',
    marginBottom: 4,
  },

  cardDescLocked: {
    fontSize: 12,
    // color: '#aaa',
    marginBottom: 8,
  },

  repCustomTextLocked: {
    fontSize: 12,
    // color: '#aaa',
  },
});
