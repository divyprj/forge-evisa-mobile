// Forge eVisa — Eyebrow Component
// Uppercase label with clay-dark color

import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import { Colors } from '../theme/colors';
import { Typography } from '../theme/typography';

interface EyebrowProps {
  children: string;
  light?: boolean;
  style?: TextStyle;
}

export default function Eyebrow({ children, light = false, style }: EyebrowProps) {
  return (
    <Text style={[styles.eyebrow, light && styles.light, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  eyebrow: {
    ...Typography.eyebrow,
    color: Colors.clayDark,
  },
  light: {
    color: '#e8ba87',
  },
});
