import React from 'react';
import { View, Image, StyleSheet, Platform } from 'react-native';
import { useTheme } from '../../util/theme';
import LinearGradient from 'react-native-linear-gradient';

const OPNLogoGlow = () => {
    const { themeAppearance } = useTheme(); // 'light' | 'dark'
    const isDark = themeAppearance === 'dark';

    return (
        <View style={styles.wrapper}>
            {isDark && (
                <View style={styles.container}>
                    <LinearGradient
                        colors={['#4105b6', '#6305b6']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.glow}
                    />
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
        inset: 0, // RN doesn’t support inset directly; add absolute fill below
    },

    glow: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,   // = inset-0
        borderRadius: 999,                      // fully round (rounded-full)
        opacity: 0.3,                           // opacity-30

        /** Fake blur (shadow hack) */
        ...Platform.select({
            ios: {
                shadowColor: '#6305b6',
                shadowRadius: 40,     // acts like blur
                shadowOpacity: 0.7,
                shadowOffset: { width: 0, height: 0 },
            },
            android: {
                elevation: 20,        // Android doesn’t blur, but spreads glow
            },
        }),
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
