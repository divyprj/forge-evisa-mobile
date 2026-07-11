// Forge eVisa — Toast Notification Component
// Global slide-up notification system

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { Colors } from '../theme/colors';
import { Spacing } from '../theme/spacing';

const TOAST_DURATION = 2800;

// Global toast function — can be called from anywhere
let showToastFn: ((message: string) => void) | null = null;

export function showToast(message: string) {
  showToastFn?.(message);
}

export default function Toast() {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const translateY = useRef(new Animated.Value(20)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = useCallback((msg: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setMessage(msg);
    setVisible(true);

    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();

    timeoutRef.current = setTimeout(() => {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 20,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setVisible(false);
      });
    }, TOAST_DURATION);
  }, [translateY, opacity]);

  useEffect(() => {
    showToastFn = show;
    return () => {
      showToastFn = null;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [show]);

  if (!visible) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY }],
          opacity,
        },
      ]}
    >
      <Text style={styles.tick}>✓</Text>
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 100,
    left: Spacing.containerPadding,
    right: Spacing.containerPadding,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 11,
    backgroundColor: Colors.toastBg,
    borderWidth: 1,
    borderColor: Colors.toastBorder,
  },
  tick: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.toastText,
  },
  message: {
    flex: 1,
    fontSize: 13,
    fontWeight: '600',
    color: Colors.toastText,
  },
});
