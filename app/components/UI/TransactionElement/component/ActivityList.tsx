import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon, { IconName, IconSize } from '../../../../component-library/components/Icons/Icon';
import { useTheme } from '../../../../util/theme';


/* ============================
   Types
============================ */

type TransactionElement = {
  actionKey?: string;
  fiatValue?: string;
  renderFrom?: string;
  renderTo?: string;
  transactionType?: string;
  value?: string;
};

/* ============================
   Helpers
============================ */

const getTxMeta = (transactionType?: string, isDark?: boolean) => {
  switch (transactionType) {
    case 'transaction_sent':
      return {
        icon: IconName.Arrow2UpRight,
        color: isDark ? '#2280cd' : '#4105b6',
        fallbackLabel: 'Sent',
      };
    case 'transaction_received':
      return {
        icon: IconName.Received,
        color: isDark ? '#4105b6' :  '#2280cd',
        fallbackLabel: 'Received',
      };
    case 'transaction_swap':
      return {
        icon: 'swap-horizontal-outline',
        color: '#6305b6',
        fallbackLabel: 'Swap',
      };
    default:
      return {
        icon: 'arrow-up-outline',
        color: '#999',
        fallbackLabel: 'Transaction',
      };
  }
};

/* ============================
   Item Component
============================ */

export const TransactionHistoryItem = ({
  transactionElement,
  isDark,
  time
}: {
  transactionElement: TransactionElement;
  
}) => {
  const {colors, themeAppearance} = useTheme();
  isDark = themeAppearance == "dark";
  const meta = getTxMeta(transactionElement?.transactionType, isDark);
  
  
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={[
        styles.card,
        // isDark ? styles.cardDark : styles.cardLight,
        {
            backgroundColor: colors.background.default,
            borderColor: colors.border.muted
        },
        themeAppearance === "light" ? {  shadowColor: '#c9c7ceff',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    
} : { borderWidth: 1}
      ]}
    >
    
      {/* Timeline Dot */}
      <View
        style={[
          styles.dot,
          { backgroundColor: meta.color },
        ]}
      >
        <Icon
         name={meta.icon}
          size={IconSize.Lg}
          color="#f8fdf1"
        />
      </View>

      {/* Main Row */}
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text
            style={[
              styles.type,
              { color: colors.text.default },
            ]}
          >
            {transactionElement?.actionKey ?? meta.fallbackLabel}
          </Text>

          {!!transactionElement?.renderTo && (
            <Text
              style={[
                styles.time,
                { color: colors.text.muted },
              ]}
              numberOfLines={1}
            >
              {time()}
            </Text>
          )}
        </View>

        <View style={{ alignItems: 'flex-end' }}>
          {!!transactionElement?.value && (
            <Text
              style={[
                styles.amount,
                { color: meta.color },
              ]}
            >
              {transactionElement.value}
            </Text>
          )}

          {!!transactionElement?.fiatValue && (
            <Text
              style={[
                styles.value,
                { color: isDark ? 'rgba(176,239,255,0.6)' : '#777' },
              ]}
            >
              {transactionElement.fiatValue}
            </Text>
          )}
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View
          style={[
            styles.badge,
            {
              borderColor: meta.color,
              backgroundColor: `${meta.color}20`,
            },
          ]}
        >
          <View
            style={[
              styles.pulse,
              { backgroundColor: meta.color },
            ]}
          />
          <Text style={{ color: meta.color, fontSize: 12 }}>
            Confirmed
          </Text>
        </View>

        <Ionicons
          name="open-outline"
          size={14}
          color={meta.color}
          style={{ marginLeft: 'auto' }}
        />
      </View>
    </TouchableOpacity>
  );
};

/* ============================
   Main Component
============================ */

export function TransactionHistory({
  transactionElement = null,
  time = null
}: {
  transactionElement?: TransactionElement | null;
}) {
  // Replace with real theme when ready
  const isDark = false;
  const {colors, themeAppearance} = useTheme();

  if (!transactionElement) return null;

  return (
    <View style={styles.container}>
      
      <View style={styles.timelineWrapper}>
        {/* Timeline Line */}
        <View
          style={[
            styles.timeline,
            {
              backgroundColor: isDark
                ? 'rgba(65,5,182,0.4)'
                : 'rgba(65,5,182,0.25)',
            },
          ]}
        />

        <View style={{ paddingLeft: 40 }}>
          <TransactionHistoryItem
            transactionElement={transactionElement}
            isDark={isDark}
            time={time}
          />
        </View>
      </View>
    </View>
  );
}

/* ============================
   Styles
============================ */

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    padding: 16,
    paddingBottom: -30,
  },
  title: {
    fontSize: 18,
    marginBottom: 16,
    fontWeight: '600',
  },
  timelineWrapper: {
    position: 'relative',
  },
  timeline: {
    position: 'absolute',
    left: 19,
    top: 20,
    bottom: 0,
    width: 2,
  },
  card: {
    marginBottom: 12,
    paddingTop: 70,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderRadius: 16,
    // position: 'relative',
    marginLeft: 16,

    elevation: 10, // Android shadow
    borderWidth: 2,
  },

  dot: {
    position: 'absolute',
    left: -50,
    top: 0,
    transform: [{ translateY: -20}],
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  type: {
    textTransform: 'capitalize',
    fontSize: 14,
  },
  time: {
    fontSize: 12,
    marginTop: 2,
  },
  amount: {
    fontSize: 14,
    fontWeight: '500',
  },
  value: {
    fontSize: 12,
    marginTop: 2,
  },
  footer: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    // borderWidth: 1,
    gap: 6,
  },
  pulse: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
});
