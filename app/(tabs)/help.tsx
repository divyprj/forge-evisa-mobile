// Forge eVisa — Help Centre Screen
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/src/theme/colors';
import { Typography } from '@/src/theme/typography';
import { Spacing } from '@/src/theme/spacing';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import Eyebrow from '@/src/components/Eyebrow';
import Accordion from '@/src/components/Accordion';

export default function HelpScreen() {
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
              <Text style={s.breadCurrent}>Help centre</Text>
            </View>
            <View style={{ height: 28 }} />
            <Eyebrow light>Help without the hold music</Eyebrow>
            <Text style={s.heroTitle}>Answers that move you forward.</Text>
            <Text style={s.heroLead}>Find the next action for eligibility, documents, payment, tracking and travel.</Text>
          </SafeAreaView>
        </LinearGradient>

        <View style={s.content}>
          {/* Getting started */}
          <View style={s.block}>
            <Eyebrow>Getting started</Eyebrow>
            <Text style={s.blockTitle}>Start with eligibility, not paperwork.</Text>
            <Accordion items={[
              { question: 'When should I apply?', answer: 'Normal e\u2011Business applicants should apply at least four days before arrival and can generally apply up to 120 days ahead.' },
              { question: 'How long is the visa valid?', answer: '365 days from the date ETA is granted, with multiple entries. Continuous stay on each visit should not exceed 180 days.' },
              { question: 'Can I use this for a conference?', answer: 'Conference travel has specific documentary requirements and may use a different business sub-category. Check the activity before starting a normal business application.' },
            ]} defaultOpen={0} />
          </View>

          {/* Documents */}
          <View style={s.block}>
            <Eyebrow>Documents</Eyebrow>
            <Text style={s.blockTitle}>Clear files prevent unclear delays.</Text>
            <Accordion items={[
              { question: 'What business evidence is required?', answer: 'Upload your business card. An invitation letter from the Indian company including company information, address and phone number can also support the application.' },
              { question: 'What happens if an image is rejected?', answer: 'You may be advised by email to upload a clearer or corrected file. The tracking page identifies the document and provides the recovery action.' },
              { question: 'What should the photograph look like?', answer: 'Use a recent front-facing photograph showing the full face against a plain white background, without blur, borders or distracting shadows.' },
            ]} defaultOpen={0} />
          </View>

          {/* Fees */}
          <View style={s.block}>
            <Eyebrow>Fees and payment</Eyebrow>
            <Text style={s.blockTitle}>The total before the transaction.</Text>
            <Text style={s.bodyMuted}>The eVisa fee is country- or territory-specific. Official guidance states that card or payment-gateway transaction charges can be up to 3% of the applicable visa fee; PayPal charges may differ. The breakdown should be shown on the payment page.</Text>
            <View style={s.notice}>
              <Text style={s.noticeText}>There is no emergency or express eVisa fee. Treat claims of guaranteed or faster grant for an additional government fee as suspicious.</Text>
            </View>
            <Text style={s.subHead}>If your account was debited but payment failed</Text>
            <Text style={s.bodyMuted}>Do not immediately repeat the transaction. Official guidance recommends checking payment status after a short interval. Failed debits are handled through payment reconciliation.</Text>
          </View>

          {/* Tracking */}
          <View style={s.block}>
            <Eyebrow>Tracking</Eyebrow>
            <Text style={s.blockTitle}>One reference, every update.</Text>
            <Text style={s.bodyMuted}>Your application reference is issued after submission and is used for payment status, document updates and the decision. Keep it with the email address used to apply.</Text>
            <Button title="Track an application →" variant="dark" onPress={() => router.push('/(tabs)/track')} style={{ marginTop: 18 }} />
          </View>

          {/* Arrival */}
          <View style={s.block}>
            <Eyebrow>Arrival in India</Eyebrow>
            <Text style={s.blockTitle}>Bring the passport that matches.</Text>
            <Text style={s.bodyMuted}>Travel with the same passport used in the application and an accessible copy of the granted ETA. Immigration may capture biometric details and stamp the eVisa at an authorised check post.</Text>
          </View>

          {/* Official support */}
          <View style={s.block}>
            <Eyebrow>Official support</Eyebrow>
            <Text style={s.blockTitle}>When you need the source.</Text>
            <Text style={s.bodyMuted}>For case-specific decisions, payment disputes or changes to eligibility, use the Government of India's official services.</Text>
            <View style={s.officialGrid}>
              <Card style={s.officialCard}>
                <TouchableOpacity style={s.officialPad} onPress={() => Linking.openURL('https://indianvisaonline.gov.in/evisa/')}>
                  <Text style={s.officialTitle}>Indian Visa Online ↗</Text>
                  <Text style={s.officialDesc}>Official eVisa categories, instructions, payment and application services.</Text>
                </TouchableOpacity>
              </Card>
              <Card style={s.officialCard}>
                <TouchableOpacity style={s.officialPad} onPress={() => Linking.openURL('https://boi.gov.in/')}>
                  <Text style={s.officialTitle}>Bureau of Immigration ↗</Text>
                  <Text style={s.officialDesc}>Official arrival and immigration information.</Text>
                </TouchableOpacity>
              </Card>
            </View>
          </View>

          <View style={s.footerMin}>
            <Text style={s.footerCopy}>© {new Date().getFullYear()} Forge eVisa</Text>
            <Text style={s.footerDisc}>Never share payment OTPs or passwords with anyone claiming to process your visa.</Text>
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
  block: { paddingVertical: 28, borderBottomWidth: 1, borderBottomColor: Colors.line },
  blockTitle: { ...Typography.h2, marginTop: 8, marginBottom: 14 },
  bodyMuted: { ...Typography.body, color: Colors.muted },
  subHead: { ...Typography.h3, fontSize: 15, marginTop: 18, marginBottom: 8 },
  notice: { marginTop: 16, padding: 16, backgroundColor: '#fff6e8', borderRadius: 12, borderLeftWidth: 3, borderLeftColor: Colors.gold },
  noticeText: { color: '#8a704a', fontSize: 12, lineHeight: 18 },
  officialGrid: { marginTop: 16, gap: 12 },
  officialCard: {},
  officialPad: { padding: 20 },
  officialTitle: { fontWeight: '700', fontSize: 14, marginBottom: 6 },
  officialDesc: { color: Colors.muted, fontSize: 12, lineHeight: 18 },
  footerMin: { paddingVertical: 24, borderTopWidth: 1, borderTopColor: Colors.line, marginTop: 16 },
  footerCopy: { color: Colors.muted, fontSize: 11 },
  footerDisc: { color: Colors.muted, fontSize: 10, marginTop: 4, lineHeight: 15 },
});
