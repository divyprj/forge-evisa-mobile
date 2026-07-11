// Forge eVisa — Spacing & Layout System
// Adapted from web app globals.css for mobile

export const Spacing = {
  // Base units
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  section: 48,
  sectionLg: 64,

  // Container
  containerPadding: 24,

  // Border radius
  radius: 24,
  radiusSm: 14,
  radiusXs: 10,
  radiusPill: 999,

  // Component-specific
  cardPadding: 20,
  formFieldGap: 12,
  formGridGap: 15,
  buttonHeight: 46,
  buttonHeightSm: 38,
  inputHeight: 48,
  headerHeight: 60,
  announcementHeight: 32,
  tabBarHeight: 64,

  // Proof strip
  proofItemGap: 12,
  proofItemPadding: 16,

  // Timeline
  timelineDotSize: 12,
  timelineLineWidth: 2,

  // Progress
  progressDotSize: 28,

  // Upload
  uploadIconSize: 40,

  // ETA
  qrSize: 70,
} as const;

export const Layout = {
  maxWidth: 1200,
  containerWidth: '100%',
} as const;
