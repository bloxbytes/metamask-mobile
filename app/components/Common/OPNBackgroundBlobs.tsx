import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { 
    Circle, 
    Ellipse,
    Defs, 
    RadialGradient, 
    Stop, 
} from 'react-native-svg';
import { useTheme } from '../../util/theme';

const { width, height } = Dimensions.get('window');

const OPNBackgroundBlobs = () => {
    const { themeAppearance } = useTheme();
    const isDark = themeAppearance === 'dark';

    if (!isDark) return null;

    return (
        <View style={StyleSheet.absoluteFill} pointerEvents="none">
            {/* Horizontal Header Aura - Full width blending, tightly at top */}
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 120, alignItems: 'center' }}>
                <Svg height="120" width={width} viewBox={`0 0 ${width} 120`}>
                    <Defs>
                            <RadialGradient
                                id="headerAura"
                                cx={width / 2}
                                cy="20"
                                rx={width * 0.8}
                                ry="60"
                                fx={width / 2}
                                fy="20"
                                gradientUnits="userSpaceOnUse"
                            >
                            <Stop offset="0%" stopColor="#4105b6" stopOpacity="0.06" />
                            <Stop offset="50%" stopColor="#4105b6" stopOpacity="0.03" />
                            <Stop offset="100%" stopColor="#4105b6" stopOpacity="0" />
                        </RadialGradient>
                    </Defs>
                    <Ellipse 
                        cx={width / 2} 
                        cy="20" 
                        rx={width * 0.8} 
                        ry="60" 
                        fill="url(#headerAura)" 
                    />
                </Svg>
            </View>

            {/* Top-Right Purple Blob - Shifted further right to keep center darker */}
            <View style={[styles.blobContainer, { top: -height * 0.1, right: -width * 0.7 }]}>
                <Svg height="1000" width="1000" viewBox="0 0 1000 1000">
                    <Defs>
                        <RadialGradient
                            id="purpleGlowHighFid"
                            cx="500"
                            cy="500"
                            rx="500"
                            ry="500"
                            fx="500"
                            fy="500"
                            gradientUnits="userSpaceOnUse"
                        >
                            {/* Effective opacity start: ~0.06 (matching web's 0.2 opacity * 0.3 container opacity) */}
                            <Stop offset="0%" stopColor="#4105b6" stopOpacity="0.08" />
                            <Stop offset="30%" stopColor="#4105b6" stopOpacity="0.05" />
                            <Stop offset="60%" stopColor="#6305b6" stopOpacity="0.02" />
                            <Stop offset="100%" stopColor="#6305b6" stopOpacity="0" />
                        </RadialGradient>
                    </Defs>
                    <Circle 
                        cx="500" 
                        cy="500" 
                        r="500" 
                        fill="url(#purpleGlowHighFid)" 
                    />
                </Svg>
            </View>

            {/* Bottom-Left Blue Blob - Multi-stop Gradual Fade */}
            <View style={[styles.blobContainer, { bottom: -height * 0.2, left: -width * 0.5 }]}>
                <Svg height="1000" width="1000" viewBox="0 0 1000 1000">
                    <Defs>
                        <RadialGradient
                            id="blueGlowHighFid"
                            cx="500"
                            cy="500"
                            rx="500"
                            ry="500"
                            fx="500"
                            fy="500"
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop offset="0%" stopColor="#2280cd" stopOpacity="0.08" />
                            <Stop offset="40%" stopColor="#2280cd" stopOpacity="0.04" />
                            <Stop offset="70%" stopColor="#b0efff" stopOpacity="0.01" />
                            <Stop offset="100%" stopColor="#b0efff" stopOpacity="0" />
                        </RadialGradient>
                    </Defs>
                    <Circle 
                        cx="500" 
                        cy="500" 
                        r="500" 
                        fill="url(#blueGlowHighFid)" 
                    />
                </Svg>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    blobContainer: {
        position: 'absolute',
        width: 1000,
        height: 1000,
        zIndex: -1,
    },
});

export default OPNBackgroundBlobs;
