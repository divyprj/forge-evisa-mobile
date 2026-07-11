// Forge eVisa — Design System Colors
// Ported from web app globals.css @theme tokens

export const Colors = {
  // Core palette
  ink: '#151713',
  muted: '#676b63',
  paper: '#fbfaf5',
  white: '#fffefa',
  sand: '#eee9dc',
  line: '#dedbcf',

  // Action & brand
  clay: '#c75f3d',
  clayDark: '#97442d',

  // Authority
  forest: '#173f35',
  forest2: '#235547',

  // Status
  sage: '#8ca280',
  gold: '#d59c48',
  sky: '#dce9ee',

  // Contextual backgrounds
  appBg: '#f2f0e8',
  etaBg: '#eae8df',
  footerBg: '#101b17',
  announcementBg: '#173f35',
  announcementText: '#dce9e3',
  announcementDot: '#a8c298',

  // Hero overlay
  heroOverlay: 'rgba(8,24,19,0.9)',
  heroOverlayMid: 'rgba(8,24,19,0.66)',
  heroOverlayLight: 'rgba(8,24,19,0.18)',

  // Success
  successBg: '#e7eee5',
  successText: '#54704f',
  successBorder: '#ccd9c8',

  // Route result
  routeResultBg: '#eef3eb',
  routeResultBorder: '#ccd9c8',

  // Advisory
  advisoryBg: '#fff5e6',
  advisoryStrong: '#7e5722',
  advisoryText: '#8a704a',

  // Notice
  noticeBg: '#fff6e8',

  // Status pill
  statusPillBg: '#fff0d4',
  statusPillText: '#865f21',

  // Toast
  toastBg: '#f0f5ee',
  toastBorder: '#cad8c5',
  toastText: '#3d5a38',

  // Progress
  progressDone: '#235547',
  progressCurrent: '#c75f3d',

  // Pill
  pillBg: '#e7eee5',
  pillText: '#52714e',

  // Transparent
  transparent: 'transparent',

  // Trust icons
  trustGold: '#e9b772',
  heroCardBg: 'rgba(255,254,250,0.94)',

  // Card borders
  cardBorderLight: 'rgba(255,255,255,0.24)',

  // Feature card variants
  featureCard2Bg: '#f4ebe1',
  featureCard3Bg: '#e5eee9',

  // Dark section text
  darkSectionMuted: '#bac8c1',
  darkSectionSubtle: '#b7c5be',
  stepBorder: 'rgba(255,255,255,0.2)',
  stepNumBorder: '#e6b377',
  stepNumColor: '#e6b377',
} as const;

export type ColorKey = keyof typeof Colors;
