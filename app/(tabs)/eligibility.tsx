// Forge eVisa — Eligibility Screen
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/src/theme/colors';
import { Typography } from '@/src/theme/typography';
import { Spacing } from '@/src/theme/spacing';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import Eyebrow from '@/src/components/Eyebrow';

export default function EligibilityScreen() {
  const router = useRouter();

  return (
    <View style={s.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero */}
        <LinearGradient colors={['#0c1f1b', '#173f35', '#1a4a3d']} style={s.hero}>
          <SafeAreaView edges={['top']} style={s.heroPad}>
            <View style={s.breadcrumb}>
              <TouchableOpacity onPress={() => router.push('/')}><Text style={s.breadLink}>Home</Text></TouchableOpacity>
              <Text style={s.breadSep}>›</Text>
              <Text style={s.breadCurrent}>Eligibility</Text>
            </View>
            <View style={{ height: 28 }} />
            <Eyebrow light>Know before you begin</Eyebrow>
            <Text style={s.heroTitle}>A clear route into business India.</Text>
            <Text style={s.heroLead}>Passport rules, eligible activity, documents and timing for the normal Indian e‑Business Visa—brought together in one readable place.</Text>
          </SafeAreaView>
        </LinearGradient>

        <View style={s.content}>
          {/* Your route */}
          <View style={s.block}>
            <Eyebrow>Normal e‑Business</Eyebrow>
            <Text style={s.blockTitle}>Is this the right visa?</Text>
            <Text style={s.bodyMuted}>This route is intended for eligible foreign nationals visiting India for normal business purposes such as meetings, negotiations, trade, supplier relationships, recruitment, internal company activity or technical consultation.</Text>
            <View style={s.detailTable}>
              {[['Validity', '365 days from the date ETA is granted'], ['Entries', 'Multiple'], ['Continuous stay', 'Up to 180 days on each visit'], ['Application timing', 'At least 4 days and generally up to 120 days before arrival']].map(([k, v]) => (
                <View key={k} style={s.detailRow}>
                  <Text style={s.detailLabel}>{k}</Text>
                  <Text style={s.detailValue}>{v}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Passport */}
          <View style={s.block}>
            <Eyebrow>Passport readiness</Eyebrow>
            <Text style={s.blockTitle}>Travel on the same passport.</Text>
            <Text style={s.bodyMuted}>Your passport should normally have at least six months of validity when you apply and at least two blank pages for immigration stamping. The bio page must be clear and show your photograph and personal details.</Text>
            <View style={s.notice}>
              <Text style={s.noticeText}>Applicants holding Pakistani passports or of Pakistani origin are directed by the official instructions to use the regular visa route rather than the eVisa route.</Text>
            </View>
          </View>

          {/* Business purpose */}
          <View style={s.block}>
            <Eyebrow>Business purpose</Eyebrow>
            <Text style={s.blockTitle}>One route, specific activity.</Text>
            <Text style={s.bodyMuted}>Describe the purpose of your visit precisely. Specialist purposes—including conferences, sports, film work, academic programmes and protected-area travel—can require additional evidence or a different sub-category.</Text>
            <Text style={s.subHead}>Normal business examples</Text>
            {['Meetings, negotiations or board activity', 'Supplier, customer or partner visits', 'Sales, trade or commercial discussions', 'Recruitment and internal company meetings', 'Technical consultation or project discussions'].map(a => (
              <View key={a} style={s.bulletItem}>
                <Text style={s.bullet}>•</Text>
                <Text style={s.bulletText}>{a}</Text>
              </View>
            ))}
          </View>

          {/* Documents */}
          <View style={s.block}>
            <Eyebrow>Prepare your files</Eyebrow>
            <Text style={s.blockTitle}>Three core documents.</Text>
            <View style={s.docGrid}>
              {[
                { t: 'Passport bio page', d: 'Photograph, name, date of birth, nationality and expiry date fully visible.' },
                { t: 'Recent photograph', d: 'Front-facing, full face, plain white background and clear image quality.' },
                { t: 'Business card', d: 'A card supplied by the organisation you currently work for.' },
                { t: 'Or Indian invitation', d: 'Company information, address and phone number in India. Additional invitation evidence may be requested.' },
              ].map(doc => (
                <Card key={doc.t} style={s.docCard}>
                  <View style={s.docCardPad}>
                    <Text style={s.docCardTitle}>{doc.t}</Text>
                    <Text style={s.docCardDesc}>{doc.d}</Text>
                  </View>
                </Card>
              ))}
            </View>
          </View>

          {/* Timing */}
          <View style={s.block}>
            <Eyebrow>Dates that matter</Eyebrow>
            <Text style={s.blockTitle}>Give the application room.</Text>
            <Text style={s.bodyMuted}>Eligible e‑Business applicants may apply online a minimum of four days before arrival, and generally up to 120 days ahead of the proposed journey. The 365-day visa validity begins when ETA is granted—not when you first arrive.</Text>
            <View style={s.advisory}>
              <Text style={s.advisoryStrong}>Do not book around an assumed decision.</Text>
              <Text style={s.advisoryText}>Wait for confirmation or grant of ETA before travelling to India.</Text>
            </View>
          </View>

          {/* Limits */}
          <View style={s.block}>
            <Eyebrow>Important limits</Eyebrow>
            <Text style={s.blockTitle}>What the eVisa does not cover.</Text>
            {[
              'The eVisa is non-extendable and non-convertible.',
              'It is not valid for visiting Protected, Restricted or Cantonment Areas without prior permission from the relevant civil authority.',
              'Biometric details are captured at immigration on arrival.',
              'A return or onward ticket and sufficient funds may be required.',
              'The application fee is not refundable if the application is refused.',
            ].map(l => (
              <View key={l} style={s.bulletItem}>
                <Text style={s.bullet}>•</Text>
                <Text style={s.bulletText}>{l}</Text>
              </View>
            ))}
            <Button title="I'm ready to apply →" onPress={() => router.push('/apply')} style={{ marginTop: 24 }} />
          </View>

          {/* Footer */}
          <View style={s.footerMin}>
            <Text style={s.footerCopy}>© {new Date().getFullYear()} e-Visa India</Text>
            <Text style={s.footerDisc}>Requirements summarised from Indian Visa Online. Confirm final eligibility with official guidance.</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.paper },
  hero: { paddingBottom: 40 },
  heroPad: { paddingHorizontal: Spacing.containerPadding },
  breadcrumb: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 12 },
  breadLink: { color: '#b0c5bb', fontSize: 12 },
  breadSep: { color: '#6b8a7d', fontSize: 12 },
  breadCurrent: { color: '#dce9e3', fontSize: 12 },
  heroTitle: { ...Typography.pageTitle, color: '#fff', marginTop: 12, marginBottom: 14 },
  heroLead: { ...Typography.body, color: '#bac8c1', lineHeight: 22 },
  content: { paddingHorizontal: Spacing.containerPadding },
  block: { paddingVertical: 32, borderBottomWidth: 1, borderBottomColor: Colors.line },
  blockTitle: { ...Typography.h2, marginTop: 8, marginBottom: 12 },
  bodyMuted: { ...Typography.body, color: Colors.muted },
  subHead: { ...Typography.h3, fontSize: 15, marginTop: 18, marginBottom: 10 },
  bulletItem: { flexDirection: 'row', gap: 10, marginBottom: 8, paddingLeft: 4 },
  bullet: { color: Colors.clay, fontSize: 14, marginTop: 1 },
  bulletText: { flex: 1, ...Typography.body, color: Colors.muted },
  detailTable: { marginTop: 18, borderTopWidth: 1, borderTopColor: Colors.line },
  detailRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: Colors.line, gap: 16 },
  detailLabel: { color: Colors.muted, fontSize: 12 },
  detailValue: { color: Colors.ink, fontSize: 13, fontWeight: '700', flex: 1, textAlign: 'right' },
  notice: { marginTop: 18, padding: 16, backgroundColor: '#fff6e8', borderRadius: 12, borderLeftWidth: 3, borderLeftColor: Colors.gold },
  noticeText: { color: '#8a704a', fontSize: 12, lineHeight: 18 },
  advisory: { marginTop: 18, padding: 16, backgroundColor: '#fff5e6', borderRadius: 12, borderLeftWidth: 3, borderLeftColor: Colors.gold },
  advisoryStrong: { fontWeight: '700', color: '#7e5722', fontSize: 13, marginBottom: 4 },
  advisoryText: { color: '#8a704a', fontSize: 12, lineHeight: 18 },
  docGrid: { marginTop: 16, gap: 12 },
  docCard: {},
  docCardPad: { padding: 20 },
  docCardTitle: { fontWeight: '700', fontSize: 14, marginBottom: 6 },
  docCardDesc: { color: Colors.muted, fontSize: 12, lineHeight: 18 },
  footerMin: { paddingVertical: 24, borderTopWidth: 1, borderTopColor: Colors.line, marginTop: 16 },
  footerCopy: { color: Colors.muted, fontSize: 11 },
  footerDisc: { color: Colors.muted, fontSize: 10, marginTop: 4, lineHeight: 15 },
});
