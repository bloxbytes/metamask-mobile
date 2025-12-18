import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';

// Animated SVG components (typed)
const AnimatedLine = Animated.createAnimatedComponent(Line);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const AnimatedGraph: React.FC = () => {
  // Animated opacity values
  const op1 = useRef(new Animated.Value(0.3)).current;
  const op2 = useRef(new Animated.Value(0.3)).current;
  const op3 = useRef(new Animated.Value(0.3)).current;
  const op4 = useRef(new Animated.Value(0.3)).current;

  // Animated radii
  const r1 = useRef(new Animated.Value(3)).current;
  const r2 = useRef(new Animated.Value(3)).current;
  const r3 = useRef(new Animated.Value(3)).current;
  const r4 = useRef(new Animated.Value(3)).current;
  const r5 = useRef(new Animated.Value(3)).current;

  // Helper animation loops
  const pulse = (value: Animated.Value, delay: number = 0) => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(value, {
          toValue: 0.8,
          duration: 800,
          delay,
          useNativeDriver: false,
        }),
        Animated.timing(value, {
          toValue: 0.3,
          duration: 800,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  };

  const pulseRadius = (value: Animated.Value, delay: number = 0) => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(value, {
          toValue: 5,
          duration: 800,
          delay,
          useNativeDriver: false,
        }),
        Animated.timing(value, {
          toValue: 3,
          duration: 800,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  };

  useEffect(() => {
    pulse(op1, 0);
    pulse(op2, 500);
    pulse(op3, 1000);
    pulse(op4, 1500);

    pulseRadius(r1, 0);
    pulseRadius(r2, 500);
    pulseRadius(r3, 1000);
    pulseRadius(r4, 1500);
    pulseRadius(r5, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Svg width="100%" height="100%">
        {/* Animated Lines */}
        <AnimatedLine
          x1="10%"
          y1="50%"
          x2="30%"
          y2="50%"
          stroke="#4105b6"
          strokeWidth={2}
          opacity={op1}
        />

        <AnimatedLine
          x1="30%"
          y1="50%"
          x2="50%"
          y2="30%"
          stroke="#2280cd"
          strokeWidth={2}
          opacity={op2}
        />

        <AnimatedLine
          x1="50%"
          y1="30%"
          x2="70%"
          y2="50%"
          stroke="#2280cd"
          strokeWidth={2}
          opacity={op3}
        />

        <AnimatedLine
          x1="70%"
          y1="50%"
          x2="90%"
          y2="50%"
          stroke="#4105b6"
          strokeWidth={2}
          opacity={op4}
        />

        {/* Animated Circles */}
        <AnimatedCircle cx="10%" cy="50%" fill="#4105b6" r={r1} />
        <AnimatedCircle cx="30%" cy="50%" fill="#2280cd" r={r2} />
        <AnimatedCircle cx="50%" cy="30%" fill="#2280cd" r={r3} />
        <AnimatedCircle cx="70%" cy="50%" fill="#2280cd" r={r4} />
        <AnimatedCircle cx="90%" cy="50%" fill="#4105b6" r={r5} />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 64,
    // marginBottom: 12,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f3f4f6',
    borderWidth: 1,
    borderColor: '#3d00b51c',
  },
});
