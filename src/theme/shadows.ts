// Forge eVisa — Shadow System
// Ported from web app globals.css custom properties

import { Platform } from 'react-native';

export const Shadows = {
  card: Platform.select({
    ios: {
      shadowColor: 'rgba(23,31,26,1)',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.08,
      shadowRadius: 32,
    },
    android: {
      elevation: 4,
    },
    default: {
      shadowColor: 'rgba(23,31,26,1)',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.08,
      shadowRadius: 32,
    },
  }),

  cardLg: Platform.select({
    ios: {
      shadowColor: 'rgba(23,31,26,1)',
      shadowOffset: { width: 0, height: 22 },
      shadowOpacity: 0.12,
      shadowRadius: 70,
    },
    android: {
      elevation: 8,
    },
    default: {
      shadowColor: 'rgba(23,31,26,1)',
      shadowOffset: { width: 0, height: 22 },
      shadowOpacity: 0.12,
      shadowRadius: 70,
    },
  }),

  button: Platform.select({
    ios: {
      shadowColor: 'rgba(199,95,61,1)',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.22,
      shadowRadius: 22,
    },
    android: {
      elevation: 6,
    },
    default: {
      shadowColor: 'rgba(199,95,61,1)',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.22,
      shadowRadius: 22,
    },
  }),

  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
} as const;
