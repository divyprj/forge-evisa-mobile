// Forge eVisa — Home Screen
// Faithful mobile adaptation of the web landing page

import React, { useState, useRef } from 'react';
import {
  View, Text, ScrollView, StyleSheet, Image, TouchableOpacity,
  Dimensions, Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/src/theme/colors';
import { Typography } from '@/src/theme/typography';
import { Spacing } from '@/src/theme/spacing';
import { Shadows } from '@/src/theme/shadows';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import Eyebrow from '@/src/components/Eyebrow';
import Pill from '@/src/components/Pill';
import Accordion from '@/src/components/Accordion';
import { showToast } from '@/src/components/Toast';

const { width: SCREEN_W } = Dimensions.get('window');

const faqItems = [
  { question: 'How long is the normal e\u2011Business visa valid?', answer: 'It is valid for 365 days from the date the Electronic Travel Authorisation is granted, with multiple entries. Continuous stay during each visit should not exceed 180 days.' },
  { question: 'What counts as a business card?', answer: 'A card provided by the company you work for. An invitation letter from the Indian company, including its information, address and phone number, can also support the application.' },
  { question: 'Can I pay for faster processing?', answer: 'No. There is no emergency or express eVisa fee. Be cautious of any service claiming otherwise.' },
  { question: 'Do I need to print the ETA?', answer: 'The ETA is sent by email. Keep an accessible copy for travel and present it with the same passport used in your application at immigration.' },
];

export default function HomeScreen() {
  const router = useRouter();
  const [showRoute, setShowRoute] = useState(false);

  return (
    <View style={s.root}>
      <ScrollView style={s.scroll} showsVerticalScrollIndicator={false}>
        {/* ── Hero ── */}
        <LinearGradient
          colors={['#0c1f1b', '#173f35', '#0c1f1b']}
          style={s.hero}
        >
          <View style={s.heroOverlay}>
            <SafeAreaView edges={['top']} style={s.heroPad}>
              {/* Announcement */}
              <View style={s.announcement}>
                <View style={s.annDot} />
                <Text style={s.annText}>No emergency or express eVisa fee is charged.</Text>
              </View>

              {/* Brand (Official Government Headers) */}
              <View style={s.officialHeaderRow}>
                <Image
                  source={require('../../assets/images/boi_2logo.png')}
                  style={{ width: 45, height: 45 }}
                  resizeMode="contain"
                />
                <View style={{ alignItems: 'center' }}>
                  <Image
                    source={require('../../assets/images/emblem.png')}
                    style={{ width: 28, height: 42 }}
                    resizeMode="contain"
                  />
                </View>
                <Image
                  source={require('../../assets/images/e-visa-logo.png')}
                  style={{ width: 60, height: 45 }}
                  resizeMode="contain"
                />
              </View>


              <View style={{ height: 32 }} />
              <Eyebrow light>Indian e‑Business Visa</Eyebrow>
              <Text style={s.heroTitle}>
                Business takes you places.{'\n'}India should be easy.
              </Text>
              <Text style={s.heroLead}>
                A human-first application that explains every document, every fee and every next step before you begin.
              </Text>

              <View style={s.heroActions}>
                <Button title="Start business application ↗" onPress={() => router.push('/apply')} />
                <Button title="Track an application" variant="light" onPress={() => router.push('/(tabs)/track')} />
              </View>

              {/* Trust */}
              <View style={s.trustRow}>
                <View style={s.trustItem}><Text style={s.trustIcon}>◈</Text><Text style={s.trustText}>Secure application</Text></View>
                <View style={s.trustItem}><Text style={s.trustIcon}>◷</Text><Text style={s.trustText}>Apply at least 4 days ahead</Text></View>
                <View style={s.trustItem}><Text style={s.trustIcon}>▤</Text><Text style={s.trustText}>Country-specific fee shown</Text></View>
              </View>
            </SafeAreaView>
          </View>
        </LinearGradient>

        {/* ── Hero Card ── */}
        <View style={s.heroCardWrap}>
          <Card style={s.heroCard}>
            <View style={s.heroCardPad}>
              <View style={s.heroCardTop}>
                <View style={{ flex: 1 }}>
                  <Eyebrow>Your route</Eyebrow>
                  <Text style={s.heroCardTitle}>Normal e‑Business Visa</Text>
                </View>
                <Pill label="Available" />
              </View>
              <View style={s.factList}>
                {[['Validity', '365 days'], ['Entries', 'Multiple'], ['Stay per visit', 'Up to 180 days'], ['Application window', '4–120 days ahead']].map(([k, v]) => (
                  <View key={k} style={s.factRow}>
                    <Text style={s.factLabel}>{k}</Text>
                    <Text style={s.factValue}>{v}</Text>
                  </View>
                ))}
              </View>
              <View style={s.heroDocs}>
                <Text style={s.heroDocsTitle}>Prepare these first</Text>
                {['Passport bio page', 'Recent white-background photo', 'Business card or invitation'].map(d => (
                  <View key={d} style={s.docItem}>
                    <View style={s.tick}><Text style={s.tickText}>✓</Text></View>
                    <Text style={s.docText}>{d}</Text>
                  </View>
                ))}
              </View>
              <Button title="Begin in about 10 minutes →" variant="dark" fullWidth onPress={() => router.push('/apply')} />
            </View>
          </Card>
        </View>

        {/* ── Proof Strip ── */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={s.proofStrip} contentContainerStyle={s.proofContent}>
          {[
            { icon: '365', title: 'One-year validity', sub: 'From the date ETA is granted' },
            { icon: '↔', title: 'Multiple entry', sub: 'For eligible business travel' },
            { icon: '180', title: 'Up to 180 days', sub: 'Continuous stay per visit' },
            { icon: '₹', title: 'Transparent payment', sub: 'Fee varies by nationality' },
          ].map(p => (
            <View key={p.title} style={s.proofItem}>
              <View style={s.proofIcon}><Text style={s.proofIconText}>{p.icon}</Text></View>
              <View>
                <Text style={s.proofTitle}>{p.title}</Text>
                <Text style={s.proofSub}>{p.sub}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* ── Quick Start ── */}
        <View style={s.section}>
          <Card style={s.quickCard}>
            <View style={s.quickPad}>
              <Eyebrow>Check your route</Eyebrow>
              <Text style={[s.sectionTitle, { marginTop: 10, marginBottom: 8 }]}>Three answers.{'\n'}One clear next step.</Text>
              <Text style={s.bodyMuted}>We{"\u2019"}ll use your passport, travel purpose and arrival date to point you to the right application path.</Text>
              <View style={{ height: 18 }} />
              <Button title="See my route →" onPress={() => { setShowRoute(true); showToast('Your recommended route is ready'); }} fullWidth />
              {showRoute && (
                <View style={s.routeResult}>
                  <View style={s.routeTop}>
                    <View style={{ flex: 1 }}>
                      <Eyebrow>Recommended</Eyebrow>
                      <Text style={[s.factValue, { fontSize: 16, marginTop: 4 }]}>Normal e‑Business Visa</Text>
                      <Text style={s.bodyMuted}>365 days · Multiple entry · Up to 180 days each visit</Text>
                    </View>
                    <Pill label="Matched" />
                  </View>
                  <Button title="Start application" variant="dark" size="sm" onPress={() => router.push('/apply')} style={{ marginTop: 14 }} />
                </View>
              )}
            </View>
          </Card>
        </View>

        {/* ── Stats ── */}
        <View style={[s.section, s.sectionSand]}>
          <Eyebrow>The normal business route</Eyebrow>
          <Text style={[s.sectionTitle, { marginTop: 10, marginBottom: 6 }]}>Built around the trip you{"\u2019"}re actually making.</Text>
          <Text style={[s.bodyMuted, { marginBottom: 24 }]}>For business meetings, supplier visits, trade, recruitment, board meetings and other eligible commercial activity.</Text>
          <View style={s.statsRow}>
            {[['365', 'days of validity from the grant of ETA'], ['∞', 'multiple entries during the validity period'], ['180', 'maximum continuous stay on each visit']].map(([n, d]) => (
              <View key={n} style={s.stat}>
                <Text style={s.statNum}>{n}</Text>
                <Text style={s.statDesc}>{d}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* ── Steps ── */}
        <LinearGradient colors={['#173f35', '#122e29']} style={[s.section, { paddingBottom: 48 }]}>
          <Eyebrow light>One calm journey</Eyebrow>
          <Text style={[s.sectionTitle, { color: '#fff', marginTop: 10, marginBottom: 6 }]}>From passport to permission.</Text>
          <Text style={[s.bodyMuted, { color: '#bac8c1', marginBottom: 28 }]}>Save your progress at every step, return when you need, and always know what happens next.</Text>
          {[
            { n: '01', t: 'Apply', d: "Tell us about yourself, your trip and the Indian organisation you'll visit." },
            { n: '02', t: 'Upload', d: 'Add your passport, photograph and business evidence with clear visual guidance.' },
            { n: '03', t: 'Pay', d: 'Review the nationality-specific visa fee and transaction charge before paying.' },
            { n: '04', t: 'Receive', d: 'Track the decision, respond to document requests and receive ETA by email.' },
          ].map(step => (
            <View key={step.n} style={s.stepCard}>
              <View style={s.stepNum}><Text style={s.stepNumText}>{step.n}</Text></View>
              <View style={{ flex: 1 }}>
                <Text style={s.stepTitle}>{step.t}</Text>
                <Text style={s.stepDesc}>{step.d}</Text>
              </View>
            </View>
          ))}
        </LinearGradient>

        {/* ── Feature Cards ── */}
        <View style={s.section}>
          <View style={s.featureCards}>
            {[
              { eyebrow: 'Before you begin', title: 'Know your eligibility', desc: 'Your passport must normally remain valid for at least six months when you apply and have two blank pages.', link: 'Review the checklist →', route: '/(tabs)/eligibility' },
              { eyebrow: 'No surprises', title: 'Fees depend on nationality', desc: 'The applicable eVisa fee and bank transaction charge are shown before payment. No emergency fee exists.', link: 'Understand fees →', route: '/(tabs)/help' },
              { eyebrow: 'Return with confidence', title: 'Track every update', desc: 'See submission, payment, document review and decision as one readable timeline.', link: 'Track an application →', route: '/(tabs)/track' },
            ].map((f, i) => (
              <Card key={i} style={[s.featureCard, i === 1 && { backgroundColor: '#f4ebe1' }, i === 2 && { backgroundColor: '#e5eee9' }]}>
                <View style={s.featureCardPad}>
                  <Eyebrow>{f.eyebrow}</Eyebrow>
                  <Text style={s.featureCardTitle}>{f.title}</Text>
                  <Text style={s.featureCardDesc}>{f.desc}</Text>
                  <TouchableOpacity onPress={() => router.push(f.route as any)}>
                    <Text style={s.featureLink}>{f.link}</Text>
                  </TouchableOpacity>
                </View>
              </Card>
            ))}
          </View>
        </View>

        {/* ── Requirements ── */}
        <View style={s.section}>
          <Eyebrow>Document checklist</Eyebrow>
          <Text style={[s.sectionTitle, { marginTop: 10, marginBottom: 6 }]}>Prepare once.{'\n'}Upload with confidence.</Text>
          <Text style={[s.bodyMuted, { marginBottom: 24 }]}>Clear, complete files prevent avoidable delays and make re-upload requests less likely.</Text>
          {[
            { n: '01', t: 'Passport bio page', d: 'A clear scan showing your photograph, name, date of birth, nationality and expiry date.' },
            { n: '02', t: 'Recent photograph', d: 'Front-facing, full face, plain white background, without borders or distracting shadows.' },
            { n: '03', t: 'Business evidence', d: 'Your business card, or an invitation from the Indian company with address and phone number.' },
          ].map(r => (
            <Card key={r.n} style={s.reqCard}>
              <View style={s.reqPad}>
                <Text style={s.reqNum}>{r.n}</Text>
                <Text style={s.reqTitle}>{r.t}</Text>
                <Text style={s.reqDesc}>{r.d}</Text>
              </View>
            </Card>
          ))}
          <View style={s.advisory}>
            <Text style={s.advisoryStrong}>Give yourself enough time.</Text>
            <Text style={s.advisoryText}>Normal e‑Business applications should be made at least 4 days before arrival and can generally be made up to 120 days ahead.</Text>
          </View>
        </View>

        {/* ── FAQ ── */}
        <View style={[s.section, s.sectionSand]}>
          <Eyebrow>Plain answers</Eyebrow>
          <Text style={[s.sectionTitle, { marginTop: 10, marginBottom: 6 }]}>Before you ask.</Text>
          <Text style={[s.bodyMuted, { marginBottom: 20 }]}>The essentials, without sending you through a maze of notices and PDFs.</Text>
          <Accordion items={faqItems} defaultOpen={0} />
          <Button title="Visit the help centre →" variant="ghost" onPress={() => router.push('/(tabs)/help')} style={{ marginTop: 16 }} />
        </View>

        {/* ── CTA Band ── */}
        <View style={s.ctaBand}>
          <Text style={s.ctaTitle}>India is waiting. The paperwork shouldn{"\u2019"}t be.</Text>
          <Text style={s.ctaDesc}>Start with the normal business route and know what you need before you type a single passport number.</Text>
          <Button title="Start your application ↗" variant="light" onPress={() => router.push('/apply')} style={{ marginTop: 20 }} />
        </View>

        {/* ── Footer ── */}
        <View style={s.footer}>
          <View style={s.footerBrand}>
            <Image
              source={require('../../assets/images/e-visa-logo.png')}
              style={{ width: 60, height: 40 }}
              resizeMode="contain"
            />
            <Text style={[s.brandName, { color: '#fff', marginLeft: 8 }]}>e-Visa India</Text>
          </View>
          <Text style={s.footerDesc}>A clearer way to understand and complete the Indian eVisa journey.</Text>
          <View style={s.footerLinks}>
            <TouchableOpacity onPress={() => router.push('/apply')}><Text style={s.footerLink}>New application</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/(tabs)/track')}><Text style={s.footerLink}>Track application</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/(tabs)/eligibility')}><Text style={s.footerLink}>Check eligibility</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/(tabs)/help')}><Text style={s.footerLink}>Help centre</Text></TouchableOpacity>
          </View>
          <View style={s.footerBottom}>
            <Text style={s.footerCopy}>© {new Date().getFullYear()} e-Visa India</Text>
            <Text style={s.footerDisclaimer}>Travel requirements can change. Confirm final requirements with the relevant official authority.</Text>
          </View>
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.paper },
  scroll: { flex: 1 },

  // Hero
  hero: { minHeight: 620, justifyContent: 'flex-end' },
  heroOverlay: { flex: 1 },
  heroPad: { paddingHorizontal: Spacing.containerPadding, paddingBottom: 40 },
  announcement: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, paddingVertical: 8, marginBottom: 16, marginHorizontal: -Spacing.containerPadding, paddingHorizontal: Spacing.containerPadding, backgroundColor: 'rgba(23,63,53,0.5)' },
  annDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#a8c298' },
  annText: { color: '#dce9e3', fontSize: 11 },
  officialHeaderRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8, paddingBottom: 12, borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.1)' },
  brand: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 8 },
  brandMark: { fontSize: 24, color: Colors.clay },
  brandName: { fontSize: 16, fontWeight: '800', color: '#fff', letterSpacing: -0.5 },
  brandSub: { fontSize: 7, color: '#9ba9a3', letterSpacing: 1.1, textTransform: 'uppercase' },
  heroTitle: { ...Typography.heroTitle, color: '#fff', marginTop: 14, marginBottom: 16 },
  heroLead: { ...Typography.heroLead, color: '#dce2dd', maxWidth: 340 },
  heroActions: { flexDirection: 'column', gap: 10, marginTop: 24 },
  trustRow: { marginTop: 24, gap: 12 },
  trustItem: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  trustIcon: { color: '#e9b772', fontSize: 13 },
  trustText: { color: '#ccd7d1', fontSize: 11 },

  // Hero card
  heroCardWrap: { marginTop: -20, paddingHorizontal: Spacing.containerPadding, marginBottom: 8 },
  heroCard: { borderRadius: 20 },
  heroCardPad: { padding: 22 },
  heroCardTop: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: 14, paddingBottom: 16, borderBottomWidth: 1, borderBottomColor: Colors.line },
  heroCardTitle: { ...Typography.h2, marginTop: 5 },
  factList: { paddingVertical: 16, gap: 12 },
  factRow: { flexDirection: 'row', justifyContent: 'space-between', gap: 20 },
  factLabel: { color: Colors.muted, fontSize: 12 },
  factValue: { color: Colors.ink, fontSize: 13, fontWeight: '700' },
  heroDocs: { paddingTop: 16, borderTopWidth: 1, borderTopColor: Colors.line, borderStyle: 'dashed', marginBottom: 16 },
  heroDocsTitle: { fontSize: 11, fontWeight: '700', marginBottom: 10 },
  docItem: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 6 },
  tick: { width: 16, height: 16, borderRadius: 8, backgroundColor: '#e7eee5', alignItems: 'center', justifyContent: 'center' },
  tickText: { fontSize: 10, fontWeight: '900', color: '#587451' },
  docText: { color: Colors.muted, fontSize: 11 },

  // Proof strip
  proofStrip: { borderBottomWidth: 1, borderBottomColor: Colors.line, backgroundColor: Colors.white },
  proofContent: { paddingHorizontal: Spacing.containerPadding, paddingVertical: 16, gap: 20 },
  proofItem: { flexDirection: 'row', alignItems: 'center', gap: 12, minWidth: 200 },
  proofIcon: { width: 35, height: 35, borderRadius: 10, backgroundColor: Colors.sand, alignItems: 'center', justifyContent: 'center' },
  proofIconText: { color: Colors.clay, fontSize: 13, fontWeight: '800' },
  proofTitle: { fontSize: 12, fontWeight: '700' },
  proofSub: { fontSize: 10, color: Colors.muted, marginTop: 2 },

  // Sections
  section: { paddingHorizontal: Spacing.containerPadding, paddingVertical: 48 },
  sectionSand: { backgroundColor: Colors.sand },
  sectionTitle: { ...Typography.sectionTitle },
  bodyMuted: { ...Typography.body, color: Colors.muted },

  // Quick start
  quickCard: { overflow: 'hidden' },
  quickPad: { padding: 22 },
  routeResult: { marginTop: 18, padding: 18, borderRadius: 13, backgroundColor: '#eef3eb', borderWidth: 1, borderColor: '#ccd9c8' },
  routeTop: { flexDirection: 'row', justifyContent: 'space-between', gap: 14 },

  // Stats
  statsRow: { gap: 0 },
  stat: { paddingVertical: 20, borderTopWidth: 1, borderTopColor: Colors.line },
  statNum: { ...Typography.statNumber, color: Colors.clay },
  statDesc: { ...Typography.helper, color: Colors.muted, marginTop: 6 },

  // Steps
  stepCard: { flexDirection: 'row', alignItems: 'flex-start', gap: 16, paddingVertical: 18, borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.15)' },
  stepNum: { width: 33, height: 33, borderRadius: 17, borderWidth: 1, borderColor: '#e6b377', alignItems: 'center', justifyContent: 'center' },
  stepNumText: { fontFamily: Typography.serif, color: '#e6b377', fontSize: 14 },
  stepTitle: { color: '#fff', fontSize: 17, fontWeight: '700', marginBottom: 6 },
  stepDesc: { color: '#b7c5be', fontSize: 12, lineHeight: 18 },

  // Feature cards
  featureCards: { gap: 14 },
  featureCard: {},
  featureCardPad: { padding: 22, minHeight: 170, justifyContent: 'space-between' },
  featureCardTitle: { ...Typography.h3, marginTop: 6, marginBottom: 8 },
  featureCardDesc: { ...Typography.bodySmall, color: Colors.muted },
  featureLink: { color: Colors.clayDark, fontSize: 11, fontWeight: '750', marginTop: 18 },

  // Requirements
  reqCard: { marginBottom: 12 },
  reqPad: { padding: 22 },
  reqNum: { color: Colors.clay, fontSize: 11, fontWeight: '800', letterSpacing: 0.5, marginBottom: 10 },
  reqTitle: { ...Typography.h3, marginBottom: 6 },
  reqDesc: { ...Typography.bodySmall, color: Colors.muted },

  // Advisory
  advisory: { marginTop: 20, padding: 18, backgroundColor: '#fff5e6', borderRadius: 14, borderLeftWidth: 3, borderLeftColor: Colors.gold },
  advisoryStrong: { fontWeight: '700', color: '#7e5722', fontSize: 13, marginBottom: 4 },
  advisoryText: { color: '#8a704a', fontSize: 12, lineHeight: 18 },

  // CTA Band
  ctaBand: { backgroundColor: Colors.clay, paddingHorizontal: Spacing.containerPadding, paddingVertical: 48, alignItems: 'center' },
  ctaTitle: { ...Typography.h2, color: '#fff', textAlign: 'center' },
  ctaDesc: { ...Typography.body, color: 'rgba(255,255,255,0.85)', textAlign: 'center', marginTop: 10, maxWidth: 340 },

  // Footer
  footer: { backgroundColor: '#101b17', paddingHorizontal: Spacing.containerPadding, paddingVertical: 40 },
  footerBrand: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 12 },
  footerDesc: { color: '#9ba9a3', fontSize: 13, lineHeight: 20, marginBottom: 24 },
  footerLinks: { gap: 12, marginBottom: 24 },
  footerLink: { color: '#9ba9a3', fontSize: 13 },
  footerBottom: { borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.1)', paddingTop: 18 },
  footerCopy: { color: '#6b7a74', fontSize: 11 },
  footerDisclaimer: { color: '#6b7a74', fontSize: 10, marginTop: 6, lineHeight: 15 },
});
