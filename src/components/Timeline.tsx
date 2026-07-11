// Forge eVisa — Timeline Component
// Vertical timeline for tracking events

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import { Typography } from '../theme/typography';

export interface TimelineEvent {
  title: string;
  description: string;
  time: string;
  status: 'done' | 'current' | 'pending';
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <View style={styles.container}>
      {events.map((event, index) => (
        <View key={index} style={styles.event}>
          <View style={styles.dotColumn}>
            <View
              style={[
                styles.dot,
                event.status === 'done' && styles.dotDone,
                event.status === 'current' && styles.dotCurrent,
                event.status === 'pending' && styles.dotPending,
              ]}
            />
            {index < events.length - 1 && (
              <View
                style={[
                  styles.line,
                  event.status === 'done' && styles.lineDone,
                ]}
              />
            )}
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.description}>{event.description}</Text>
          </View>
          <Text style={[styles.time, event.status === 'current' && styles.timeCurrent]}>
            {event.time}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  event: {
    flexDirection: 'row',
    gap: 14,
    minHeight: 72,
  },
  dotColumn: {
    alignItems: 'center',
    width: 12,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: Colors.line,
    backgroundColor: Colors.white,
    marginTop: 4,
  },
  dotDone: {
    backgroundColor: Colors.sage,
    borderColor: Colors.sage,
  },
  dotCurrent: {
    backgroundColor: Colors.gold,
    borderColor: Colors.gold,
  },
  dotPending: {
    backgroundColor: Colors.white,
    borderColor: Colors.line,
  },
  line: {
    flex: 1,
    width: 2,
    backgroundColor: Colors.line,
    marginVertical: 4,
  },
  lineDone: {
    backgroundColor: Colors.sage,
  },
  content: {
    flex: 1,
    paddingBottom: 16,
  },
  title: {
    ...Typography.bodySmall,
    fontWeight: '700',
    color: Colors.ink,
  },
  description: {
    ...Typography.caption,
    color: Colors.muted,
    marginTop: 2,
  },
  time: {
    ...Typography.caption,
    color: Colors.muted,
    marginTop: 4,
  },
  timeCurrent: {
    color: Colors.gold,
    fontWeight: '700',
  },
});
