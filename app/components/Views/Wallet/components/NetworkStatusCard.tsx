import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Path } from 'react-native-svg';
import Icon, {
  IconName,
} from '../../../../component-library/components/Icons/Icon';
import { useTheme } from '../../../../util/theme';
import { AnimatedGraph } from './AnimatedGraph';

const ZapIcon = () => (
  <Svg
    width={12}
    height={12}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#2280cd"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <Path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
  </Svg>
);

export const NetworkStatusCard = () => {
  const { colors, themeAppearance } = useTheme();
  
    const isDark = themeAppearance === 'dark';

  return (
    <View style={[styles.card, { backgroundColor: colors.background.default, borderColor: colors.border.muted,
          borderWidth: 1, }]}>
      {/* HEADER */}
      <View style={styles.headerRow}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {/* <View style={styles.iconCircle}>
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>⧫</Text>
          </View> */}
          <LinearGradient
            colors={['#2280cd', '#b0efff']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.iconCircle}
          >
            <Icon name={IconName.Activity} color="#FFF" />
          </LinearGradient>
          <View style={{ marginLeft: 8 }}>
            <Text style={[styles.title, { color: colors.text.default }]}>OPN Chain</Text>
            <Text style={[styles.sub, { color: colors.text.alternative }]}>Live Network Status</Text>
          </View>
        </View>

        <View style={styles.statusPill}>
          <Text style={styles.statusText}>Active</Text>
        </View>
      </View>

      <AnimatedGraph />

      <View style={styles.grid}>
        {/* TPS BOX */}
        <View style={[styles.box, { backgroundColor: isDark ? 'rgba(15, 17, 42, 0.5)': '#f3f4f6',
          borderColor: isDark ? colors.border.muted : '#3d00b51c'
        }]}>
          <View style={styles.row}>
            <ZapIcon />
            <Text style={[styles.tpsLabel, { color: colors.text.alternative }]}>TPS</Text>
          </View>

          <Text style={[styles.value, { color: colors.text.default }]}>15,847</Text>
        </View>

        {/* VALIDATORS BOX */}
        <View style={[styles.box, { backgroundColor: isDark ? 'rgba(15, 17, 42, 0.1)': '#f3f4f6',
          borderColor: isDark ? colors.border.muted : '#3d00b51c'
        }]}>
          <Text style={[styles.validatorsLabel, { color: colors.text.alternative }]}>Validators</Text>
          <Text style={[styles.value, { color: colors.text.default }]}>1,247</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 16,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    // backgroundColor: '#6A49F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { fontSize: 16, fontWeight: '600', color: '#111' },
  sub: { fontSize: 12, color: '#666' },
  statusPill: {
    borderRadius: 9999, // rounded-full

    backgroundColor: 'rgba(34,128,205,0.10)', // bg-[#2280cd]/10
    borderWidth: 1,
    borderColor: '#2280cd10',

    paddingVertical: 4,
    paddingHorizontal: 14,
  },
  statusText: {
    color: '#2280cd',
    fontSize: 12,
    fontWeight: '600',
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8, // grid-gap-2
    marginTop: 16,
  },

  box: {
    flex: 1,
    backgroundColor: '#f9fafb', // bg-gray-50
    borderRadius: 12, // rounded-lg
    padding: 8, // p-2
    borderWidth: 1,
    borderColor: '#3d00b51c',

    // To mimic "backdrop-blur-sm" feel in RN
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 4,
  },

  tpsLabel: {
    fontSize: 12, // text-xs
    color: '#6b7280', // text-gray-500
  },

  validatorsLabel: {
    fontSize: 12,
    marginBottom: 4,
    color: '#6b7280',
  },

  value: {
    fontSize: 20,
    color: '#000',
    fontWeight: '300', // font-light
  },
});
