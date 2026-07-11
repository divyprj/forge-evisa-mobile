// Forge eVisa — Typography System
// Ported from web app globals.css
// Georgia serif for editorial headlines, system sans for body/forms

import { Platform } from 'react-native';

const serifFamily = Platform.select({
  ios: 'Georgia',
  android: 'serif',
  default: 'Georgia',
});

const sansFamily = Platform.select({
  ios: '-apple-system',
  android: 'sans-serif',
  default: 'System',
});

const monoFamily = Platform.select({
  ios: 'Menlo',
  android: 'monospace',
  default: 'monospace',
});

export const Typography = {
  // Font families
  serif: serifFamily,
  sans: sansFamily,
  mono: monoFamily,

  // Hero / display
  heroTitle: {
    fontFamily: serifFamily,
    fontSize: 42,
    lineHeight: 38,
    fontWeight: '500' as const,
    letterSpacing: -2.2,
  },
  heroLead: {
    fontFamily: sansFamily,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400' as const,
  },

  // Section headings
  sectionTitle: {
    fontFamily: serifFamily,
    fontSize: 32,
    lineHeight: 30,
    fontWeight: '500' as const,
    letterSpacing: -1.7,
  },
  pageTitle: {
    fontFamily: serifFamily,
    fontSize: 36,
    lineHeight: 33,
    fontWeight: '500' as const,
    letterSpacing: -1.9,
  },

  // Card & content headings
  h2: {
    fontFamily: serifFamily,
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '500' as const,
    letterSpacing: -1.2,
  },
  h3: {
    fontFamily: sansFamily,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700' as const,
    letterSpacing: -0.3,
  },

  // Story heading
  storyTitle: {
    fontFamily: serifFamily,
    fontSize: 26,
    lineHeight: 28,
    fontWeight: '500' as const,
    letterSpacing: -1.3,
  },

  // Stats number
  statNumber: {
    fontFamily: serifFamily,
    fontSize: 52,
    lineHeight: 52,
    fontWeight: '500' as const,
    letterSpacing: -3.1,
  },

  // ETA card name
  etaName: {
    fontFamily: serifFamily,
    fontSize: 36,
    lineHeight: 38,
    fontWeight: '500' as const,
    letterSpacing: -1.9,
  },

  // Body text
  body: {
    fontFamily: sansFamily,
    fontSize: 15,
    lineHeight: 23,
    fontWeight: '400' as const,
  },
  bodySmall: {
    fontFamily: sansFamily,
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '400' as const,
  },

  // Eyebrow / label
  eyebrow: {
    fontFamily: sansFamily,
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '800' as const,
    letterSpacing: 1.6,
    textTransform: 'uppercase' as const,
  },

  // Buttons
  button: {
    fontFamily: sansFamily,
    fontSize: 13,
    lineHeight: 13,
    fontWeight: '750' as const,
  },
  buttonSm: {
    fontFamily: sansFamily,
    fontSize: 11,
    lineHeight: 11,
    fontWeight: '750' as const,
  },

  // Form labels
  label: {
    fontFamily: sansFamily,
    fontSize: 9,
    lineHeight: 12,
    fontWeight: '800' as const,
    letterSpacing: 0.9,
    textTransform: 'uppercase' as const,
  },

  // Form input
  input: {
    fontFamily: sansFamily,
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '400' as const,
  },

  // Helper / caption
  helper: {
    fontFamily: sansFamily,
    fontSize: 11,
    lineHeight: 16,
    fontWeight: '400' as const,
  },
  caption: {
    fontFamily: sansFamily,
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '400' as const,
  },

  // Reference code
  reference: {
    fontFamily: monoFamily,
    fontSize: 13,
    fontWeight: '800' as const,
    letterSpacing: 0.5,
  },

  // Navigation
  navLink: {
    fontFamily: sansFamily,
    fontSize: 13,
    fontWeight: '400' as const,
  },

  // Brand
  brandName: {
    fontFamily: sansFamily,
    fontSize: 16,
    fontWeight: '800' as const,
    letterSpacing: -0.56,
  },
  brandSubtitle: {
    fontFamily: sansFamily,
    fontSize: 8,
    fontWeight: '400' as const,
    letterSpacing: 1.04,
    textTransform: 'uppercase' as const,
  },

  // Proof strip
  proofStrong: {
    fontFamily: sansFamily,
    fontSize: 12,
    fontWeight: '700' as const,
  },
  proofCaption: {
    fontFamily: sansFamily,
    fontSize: 10,
    fontWeight: '400' as const,
  },
} as const;
