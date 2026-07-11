# Forge eVisa — Mobile App

> A cinematic, human-first mobile application for India's normal e‑Business visa journey.

Built with **React Native (Expo)** for Android and iOS.

## 🏗️ Stack

- **Framework**: React Native with Expo SDK 57
- **Navigation**: Expo Router (file-based routing)
- **Language**: TypeScript
- **Design System**: Custom tokens ported from the [Forge eVisa web app](https://github.com/de2pressed/forge3-evisa)

## 📱 Screens

| Screen | Route | Description |
|--------|-------|-------------|
| Home | `/(tabs)/` | Cinematic landing with hero, route checker, stats, steps, features, FAQ |
| Eligibility | `/(tabs)/eligibility` | Passport, purpose, documents, timing, limits |
| Apply | `/apply` | 5-step application: Applicant → Business → Documents → Payment → Review |
| Track | `/(tabs)/track` | Reference lookup, timeline, document recovery |
| Help | `/(tabs)/help` | FAQs, fees, tracking, arrival, official support |
| ETA | `/eta` | Digital Electronic Travel Authorisation card |

## 🎨 Design System

The app faithfully ports the web app's visual language:
- **Colors**: Warm ivory paper, terracotta clay action, deep forest authority, sage success, gold advisory
- **Typography**: Georgia serif for editorial headlines, system sans for forms
- **Components**: Button, Card, Accordion, Toast, Timeline, ProgressBar, Pill, Eyebrow

## 🚀 Quick Start

```bash
npm install
npx expo start
```

Then:
- Press `a` for Android
- Press `i` for iOS
- Press `w` for web

## 📋 Content Contract

- **Visa type**: Normal e‑Business
- **Validity**: 365 days from ETA grant
- **Entries**: Multiple
- **Stay**: Up to 180 days per visit
- **Timing**: Apply 4–120 days before arrival
- **Documents**: Passport, photo, business card/invitation
- **Fees**: Country/territory-specific (never hardcoded)
- **No emergency or express fee**

## 🔗 Related

- Web app: [de2pressed/forge3-evisa](https://github.com/de2pressed/forge3-evisa)
- Mobile branch on web repo: [`mobile-app-main`](https://github.com/de2pressed/forge3-evisa/tree/mobile-app-main)

---

© 2026 Forge eVisa
