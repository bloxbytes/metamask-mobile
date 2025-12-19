import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import CustomText, { TextVariant } from '../../../../component-library/components/Texts/Text';
import AvatarAccount from '../../../../component-library/components/Avatars/Avatar/variants/AvatarAccount';
import Icon, {
    IconName,
    IconSize,
} from '../../../../component-library/components/Icons/Icon';
import { formatAddress } from '../../../../util/address';
import { AvatarSize } from '../../../../component-library/components/Avatars/Avatar';
import { ThemeColors } from '@metamask/design-tokens';

type Props = {
    onPress: () => void;
    accountName: string;
    accountAddress: string;
    avatarAccountType: any;
    colors: ThemeColors;
    theme: 'light' | 'dark';
};

const AccountSelectorButton = ({
    onPress,
    accountName,
    accountAddress,
    avatarAccountType,
    colors,
    theme,
}: Props) => {
    const isDark = theme === 'dark';

    return (
        <View style={styles.horizontalPadding}>
            <TouchableOpacity activeOpacity={0.85} onPress={onPress}>
                <View
                    style={[
                        styles.container,
                        isDark ? styles.darkBorder : styles.lightBorder,
                        { borderColor: isDark ? '#rgba(65,5,182,0.2)' : colors.border.muted },
                    ]}
                >
                    {/* Dark gradient background */}
                    {isDark && (
                        <LinearGradient
                            colors={[
                                'rgba(26,29,58,0.6)',
                                'rgba(26,29,58,0.4)',
                            ]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={StyleSheet.absoluteFill}
                        />
                    )}

                    {/* CONTENT */}
                    <View style={styles.content}>
                        {/* LEFT */}
                        <View style={styles.left}>
                            <AvatarAccount
                                accountAddress={accountAddress}
                                type={avatarAccountType}
                                size={AvatarSize.Sm}
                            />

                            <View style={styles.textContainer}>
                                <CustomText
                                    style={[
                                        styles.accountName,
                                        { color: isDark ? '#f8fdf1' : '#000000' },
                                    ]}
                                >
                                    {accountName}
                                </CustomText>

                                <CustomText
                                    style={[
                                        styles.address,
                                        {
                                            color:
                                                theme === 'dark'
                                                    ? 'rgba(176,239,255,0.6)'
                                                    : '#6b7280',
                                        },
                                    ]}
                                    color={theme === 'dark'
                                        ? 'rgba(176,239,255,0.6)'
                                        : '#6b7280'}
                                        variant={TextVariant.BodyXS}
                                >
                                    {formatAddress(accountAddress, 'short')}
                                </CustomText>
                            </View>
                        </View>

                        <View style={{ flex: 1 }} />

                        {/* ARROW DOWN */}
                        <Icon
                            name={IconName.ArrowDown}
                            size={IconSize.Sm}
                            color={isDark ? '#b0efff' : '#6b7280'}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    /* px-4 */
    horizontalPadding: {
        paddingHorizontal: 16,
        marginBottom: 8, // mb-2
    },

    lightBorder: {
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#3d00b51c',
    },

    darkBorder: {
        borderWidth: 1,
        borderColor: 'rgba(65,5,182,0.3)',
        backgroundColor: '#1a1d3a', // fallback
    },

    left: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },

    avatar: {
        width: 32,
        height: 32,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
    },

    /* Avatar light */
    avatarLight: {
        borderWidth: 1,
        borderColor: '#3d00b51c',
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
    },

    /* Avatar dark (ring + glow) */
    avatarDark: {
        borderWidth: 2,
        borderColor: 'rgba(176,239,255,0.3)',
        shadowColor: '#4105b6',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
    },


    textContainer: {
        marginLeft: 8,
    },

    accountName: {
        fontSize: 14,
    },

    address: {
        fontSize: 12,
        fontFamily: 'monospace',
    },

    container: {
        borderRadius: 12,
        overflow: 'hidden', // IMPORTANT
    },

    content: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12, // EXACT p-3
        minHeight: 56, // forces parity with light
    },
});


export default AccountSelectorButton;
