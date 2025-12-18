import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BadgeCustomIcon from '../../../../component-library/components/Icons/Icon/assets/badge-custom.svg';
import { useTheme } from '../../../../util/theme';
import { BadgesModal } from './Badge/BadgesModal';

export const RepScoreCard = () => {
  const { colors } = useTheme();
  const [showBadgesModal, setShowBadgesModal] = useState(false);

  return (
    <View style={[styles.card, {
      backgroundColor: colors.background.default, borderColor: colors.border.muted,
      borderWidth: 1,
    }]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <LinearGradient
          colors={['#2280cd', '#4105b6']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            height: 48,
            width: 48,
            justifyContent: 'center',
            alignItems: 'center',
            // padding: 8,
            borderRadius: 24,
            // marginRight: 12,
          }}
        >
          <BadgeCustomIcon name="badge-icon" color={'#FFF'} />
        </LinearGradient>
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={styles.level}>Level 12</Text>
          <Text style={[styles.score, { color: colors.text.default }]}>8,547</Text>
          <Text style={styles.sub}>REP Score</Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setShowBadgesModal(true)}
          style={styles.shadowWrapper}
        >
          {/* <LinearGradient
            colors={['#4105b6', '#6305b6']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.badgeButton}
          > */}
            <Text style={styles.badgeText}>View Badges</Text>
          {/* </LinearGradient> */}
        </TouchableOpacity>
      </View>

      <Text style={styles.growthText}>+247 this week</Text>

      <View style={styles.progressTrack}>
        {/* <View style={[styles.progressFill, { width: '60%' }]} /> */}
        <LinearGradient
          colors={['#2280cd', '#b0efff']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.progressFill, { width: '54.7%' }]}
        />
      </View>

      <Text style={styles.toNext}>453 REP to Level 13</Text>

      <BadgesModal
        visible={showBadgesModal}
        onClose={() => setShowBadgesModal(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 16,

    // shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  level: { fontSize: 16, color: '#555' },
  score: { fontSize: 28, color: '#111' },
  sub: { fontSize: 12, color: '#666' },
  shadowWrapper: {
    backgroundColor: '#4105b6',
    borderRadius: 12,
    padding: 12,

    // MATCHING shadow-[#4105b6]/30 shadow-lg
    shadowColor: '#4105b6',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 6,
  },
  badgeButton: {
    // paddingVertical: 6,
    // paddingHorizontal: 12,
    // borderRadius: 12,

    justifyContent: 'center',
    alignItems: 'center',

    // height: 40,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12, // text-xs
    fontWeight: '600',
  },
  growthText: {
    marginTop: 8,
    fontSize: 14,
    color: '#6A49F2',
    fontWeight: '600',
  },
  progressTrack: {
    height: 6,
    backgroundColor: '#e0e0ef',
    borderRadius: 6,
    marginTop: 12,
  },
  progressFill: {
    // height: 6,
    backgroundColor: '#6A49F2',
    // borderRadius: 6,

    height: '100%',
    borderRadius: 8,
    // shadowColor: '#2280cd',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.5,
    // shadowRadius: 8,
    // elevation: 4, // Android shadow
  },
  toNext: {
    marginTop: 8,
    color: '#888',
    fontSize: 12,
  },
});
