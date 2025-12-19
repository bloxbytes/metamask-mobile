import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useTheme } from '../../util/theme';
import Svg, { 
    Circle, 
    Ellipse,
    Defs, 
    RadialGradient, 
    Stop, 
} from 'react-native-svg';

const OPNLogoGlow = () => {
    const { themeAppearance } = useTheme(); // 'light' | 'dark'
    const isDark = themeAppearance === 'dark';

    return (
        <View style={styles.wrapper}>
            {isDark && (
                <View style={[styles.container, { top: -75 }]}>
                    <Svg height="200" width="400" viewBox="0 0 400 200">
                        <Defs>
                            <RadialGradient
                                id="logoGlowEllipse"
                                cx="200"
                                cy="90"
                                rx="220"
                                ry="90"
                                fx="200"
                                fy="40"
                                gradientUnits="userSpaceOnUse"
                            >
                                <Stop offset="0%" stopColor="#4105b6" stopOpacity="0.2" />
                                <Stop offset="60%" stopColor="#6305b6" stopOpacity="0.15" />
                                <Stop offset="100%" stopColor="#4105b6" stopOpacity="0" />
                            </RadialGradient>
                        </Defs>
                        <Ellipse 
                            cx="200" 
                            cy="90" 
                            rx="220" 
                            ry="90" 
                            fill="url(#logoGlowEllipse)" 
                        />
                    </Svg>
                </View>
            )}

            <Image
                source={require('../../../logo.png')}
                style={[styles.logo, isDark ? styles.logoDark : styles.logoLight]}
                resizeMode="cover"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 20,
    },

    container: {
        position: 'absolute',
        width: 400,
        height: 240,
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        width: 80,
        height: 80,
        borderRadius: 40,
        zIndex: 10,
    },

    logoDark: {
        borderWidth: 2,
        borderColor: '#b0efff',
    },

    logoLight: {},
});

export default OPNLogoGlow;
