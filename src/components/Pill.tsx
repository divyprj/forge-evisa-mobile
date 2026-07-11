// Forge eVisa — Pill Component
// Status badge with green dot + label

import React from 'react';
import { View, Text, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Colors } from '../theme/colors';

interface PillProps {
  label: string;
  variant?: 'success' | 'warning' | 'info';
  style?: ViewStyle;
}

export default function Pill({ label, variant = 'success', style }: PillProps) {
  const variantStyles = {
    success: { bg: Colors.pillBg, text: Colors.pillText, dot: Colors.pillText },
    warning: { bg: Colors.statusPillBg, text: Colors.statusPillText, dot: Colors.gold },
    info: { bg: Colors.sky, text: Colors.forest, dot: Colors.forest },
  };

  const v = variantStyles[variant];

  return (
    <View style={[styles.pill, { backgroundColor: v.bg }, style]}>
      <View style={[styles.dot, { backgroundColor: v.dot }]} />
      <Text style={[styles.text, { color: v.text }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 999,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  text: {
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
});
