// Forge eVisa — Accordion Component
// Expandable FAQ/help sections with animated open/close

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation, Platform, UIManager } from 'react-native';
import { Colors } from '../theme/colors';
import { Typography } from '../theme/typography';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: number;
}

export default function Accordion({ items, defaultOpen = -1 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  const toggle = (index: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={styles.item}>
          <TouchableOpacity
            style={styles.header}
            onPress={() => toggle(index)}
            activeOpacity={0.7}
          >
            <Text style={styles.question}>{item.question}</Text>
            <View style={styles.iconContainer}>
              <View style={styles.iconH} />
              {openIndex !== index && <View style={styles.iconV} />}
            </View>
          </TouchableOpacity>
          {openIndex === index && (
            <View style={styles.body}>
              <Text style={styles.answer}>{item.answer}</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 0,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.line,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    gap: 16,
  },
  question: {
    flex: 1,
    ...Typography.h3,
    fontSize: 15,
    fontWeight: '600',
    color: Colors.ink,
  },
  iconContainer: {
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconH: {
    position: 'absolute',
    width: 12,
    height: 1.5,
    backgroundColor: Colors.muted,
    borderRadius: 1,
  },
  iconV: {
    position: 'absolute',
    width: 1.5,
    height: 12,
    backgroundColor: Colors.muted,
    borderRadius: 1,
  },
  body: {
    paddingBottom: 18,
  },
  answer: {
    ...Typography.body,
    color: Colors.muted,
    lineHeight: 22,
  },
});
