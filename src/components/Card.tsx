// Forge eVisa — Card Component
// Matching web app .card class: border + radius + shadow

import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '../theme/colors';
import { Spacing } from '../theme/spacing';
import { Shadows } from '../theme/shadows';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'default' | 'flat';
}

export default function Card({ children, style, variant = 'default' }: CardProps) {
  return (
    <View
      style={[
        styles.card,
        variant === 'default' && Shadows.card,
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: Colors.line,
    borderRadius: Spacing.radius,
    backgroundColor: Colors.white,
    overflow: 'hidden',
  },
});
