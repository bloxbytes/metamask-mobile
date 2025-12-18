/* eslint-disable import/no-commonjs */
/**
 * Tailwind CSS Configuration for MetaMask Mobile
 *
 * This configuration file serves two primary purposes:
 * 1. Enable Tailwind CSS IntelliSense in VSCode for better developer experience
 * 2. Power the Tailwind CSS ESLint plugin to enforce consistent styling practices
 *
 * IMPORTANT: This file is for tooling only. The actual Tailwind classes and design tokens
 * are defined in the @metamask/design-system-twrnc-preset package, which is consumed by
 * the React Native app at runtime.
 *
 * To add or modify design tokens and classes:
 * - Update the @metamask/design-system-twrnc-preset package
 * - Repository: https://github.com/MetaMask/metamask-design-system/tree/main/packages/design-system-twrnc-preset
 * - Or reach out to the Design System team for guidance
 *
 * @see https://github.com/MetaMask/metamask-design-system
 */

const {
  generateTailwindConfig,
  Theme,
} = require('@metamask/design-system-twrnc-preset/tailwind.config');

const baseConfig = generateTailwindConfig(Theme.Light);

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...baseConfig,
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './app/component-library/**/*.{js,jsx,ts,tsx}',
    './app/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme.extend,
      colors: {
        ...baseConfig.theme.extend?.colors,
        // Override base design tokens with "Deep Space" theme
        // We're hijacking specific semantic tokens if possible, or just adding our own
        background: {
          default: '#0F172A', // Slate 900
          alternative: '#1E293B', // Slate 800
        },
        text: {
          default: '#F1F5F9', // Slate 100
          alternative: '#CBD5E1', // Slate 300
          muted: '#94A3B8', // Slate 400
        },
        primary: {
          default: '#38BDF8', // Sky 400
          pressed: '#0EA5E9', // Sky 500
          muted: 'rgba(56, 189, 248, 0.1)',
        },
        icon: {
          default: '#F1F5F9', // Slate 100
          alternative: '#94A3B8', // Slate 400
        },
      },
    },
  },
};
