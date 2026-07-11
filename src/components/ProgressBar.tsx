// Forge eVisa — Progress Bar Component
// 5-step application progress indicator

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';

interface ProgressBarProps {
  currentStep: number;
  submitted: boolean;
  steps: { n: number; label: string }[];
}

export default function ProgressBar({ currentStep, submitted, steps }: ProgressBarProps) {
  return (
    <View style={styles.container}>
      {steps.map(({ n, label }, index) => {
        const isDone = n < currentStep || submitted;
        const isCurrent = n === currentStep && !submitted;

        return (
          <React.Fragment key={n}>
            {index > 0 && (
              <View style={[styles.line, isDone && styles.lineDone]} />
            )}
            <View style={styles.stepItem}>
              <View
                style={[
                  styles.dot,
                  isDone && styles.dotDone,
                  isCurrent && styles.dotCurrent,
                ]}
              >
                <Text
                  style={[
                    styles.dotText,
                    isDone && styles.dotTextDone,
                    isCurrent && styles.dotTextCurrent,
                  ]}
                >
                  {isDone ? '✓' : n}
                </Text>
              </View>
              <Text
                style={[
                  styles.label,
                  isDone && styles.labelDone,
                  isCurrent && styles.labelCurrent,
                ]}
                numberOfLines={1}
              >
                {label}
              </Text>
            </View>
          </React.Fragment>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 4,
  },
  stepItem: {
    alignItems: 'center',
    gap: 6,
  },
  dot: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: Colors.line,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotDone: {
    backgroundColor: Colors.forest2,
    borderColor: Colors.forest2,
  },
  dotCurrent: {
    borderColor: Colors.clay,
    backgroundColor: Colors.clay,
  },
  dotText: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.muted,
  },
  dotTextDone: {
    color: '#fff',
    fontSize: 12,
  },
  dotTextCurrent: {
    color: '#fff',
  },
  label: {
    fontSize: 9,
    fontWeight: '600',
    color: Colors.muted,
    letterSpacing: 0.3,
  },
  labelDone: {
    color: Colors.forest2,
  },
  labelCurrent: {
    color: Colors.clay,
    fontWeight: '800',
  },
  line: {
    flex: 1,
    height: 1.5,
    backgroundColor: Colors.line,
    marginBottom: 20,
  },
  lineDone: {
    backgroundColor: Colors.forest2,
  },
});
