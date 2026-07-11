// Forge eVisa — Button Component
// All variants matching web app: primary, dark, outline, light, ghost

import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import { Colors } from '../theme/colors';
import { Typography } from '../theme/typography';
import { Spacing } from '../theme/spacing';
import { Shadows } from '../theme/shadows';

type ButtonVariant = 'primary' | 'dark' | 'outline' | 'light' | 'ghost';
type ButtonSize = 'default' | 'sm';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'default',
  disabled = false,
  loading = false,
  fullWidth = false,
  style,
  textStyle,
}: ButtonProps) {
  const containerStyles: ViewStyle[] = [
    styles.base,
    styles[variant],
    size === 'sm' && styles.sm,
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
    variant === 'primary' && Shadows.button,
    style as ViewStyle,
  ].filter(Boolean) as ViewStyle[];

  const textStyles: TextStyle[] = [
    size === 'sm' ? Typography.buttonSm : Typography.button,
    styles[`${variant}Text` as keyof typeof styles] as TextStyle,
    disabled && styles.disabledText,
    textStyle as TextStyle,
  ].filter(Boolean) as TextStyle[];

  return (
    <TouchableOpacity
      style={containerStyles}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'outline' || variant === 'light' ? Colors.clay : '#fff'}
        />
      ) : (
        <Text style={textStyles}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: Spacing.buttonHeight,
    paddingHorizontal: 19,
    paddingVertical: 12,
    borderRadius: Spacing.radiusPill,
    borderWidth: 1,
    borderColor: 'transparent',
    gap: 9,
  },
  sm: {
    minHeight: Spacing.buttonHeightSm,
    paddingHorizontal: 14,
    paddingVertical: 9,
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: 0.45,
  },
  disabledText: {
    opacity: 0.8,
  },

  // Variants
  primary: {
    backgroundColor: Colors.clay,
  },
  primaryText: {
    color: '#fff',
  },

  dark: {
    backgroundColor: Colors.forest,
  },
  darkText: {
    color: '#fff',
  },

  outline: {
    borderColor: Colors.line,
    backgroundColor: Colors.white,
  },
  outlineText: {
    color: Colors.ink,
  },

  light: {
    backgroundColor: '#fff',
  },
  lightText: {
    color: Colors.forest,
  },

  ghost: {
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
    borderColor: 'transparent',
  },
  ghostText: {
    color: Colors.clayDark,
  },
});
