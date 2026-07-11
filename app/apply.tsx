// Forge eVisa — Apply Screen (5-Step Application Flow)
import React, { useState } from 'react';
import {
  View, Text, ScrollView, StyleSheet, TextInput,
  TouchableOpacity, Switch, Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Colors } from '@/src/theme/colors';
import { Typography } from '@/src/theme/typography';
import { Spacing } from '@/src/theme/spacing';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import Eyebrow from '@/src/components/Eyebrow';
import ProgressBar from '@/src/components/ProgressBar';
import { showToast } from '@/src/components/Toast';

const STEPS = [
  { n: 1, label: 'Applicant' },
  { n: 2, label: 'Business' },
  { n: 3, label: 'Documents' },
  { n: 4, label: 'Payment' },
  { n: 5, label: 'Review' },
];

export default function ApplyScreen() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [feeConsented, setFeeConsented] = useState(false);
  const [uploads, setUploads] = useState({ passport: false, photo: false, business: false });

  const goStep = (n: number) => { setStep(n); };
  const handleSubmit = () => { setSubmitted(true); showToast('Application submitted'); };
  const toggleUpload = (key: 'passport' | 'photo' | 'business') => {
    setUploads(p => ({ ...p, [key]: !p[key] }));
    showToast('Document ready to review');
  };

  const copyRef = () => { showToast('Reference copied'); };

  return (
    <View style={s.root}>
      <SafeAreaView edges={['top']} style={{ flex: 1 }}>
        {/* App Header */}
        <View style={s.appHeader}>
          <View style={s.brandRow}>
            <Text style={s.brandMark}>✦</Text>
            <View>
              <Text style={s.brandName}>Forge</Text>
              <Text style={s.brandSub}>INDIA EVISA</Text>
            </View>
          </View>
          <Text style={s.secureLabel}>◈ Secure application</Text>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={s.exitLink}>Exit ×</Text>
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.scrollContent}>
          {/* Title */}
          <Eyebrow>Normal e‑Business Visa</Eyebrow>
          <Text style={s.pageTitle}>Let's get you to India.</Text>
          <Text style={s.pageSub}>You'll need your passport, a recent photograph and business evidence. Most people finish in about 10 minutes.</Text>

          {/* Progress */}
          <ProgressBar currentStep={step} submitted={submitted} steps={STEPS} />

          {/* Visa Summary Card */}
          <Card style={s.summaryCard}>
            <View style={s.summaryPad}>
              <Eyebrow>Your visa</Eyebrow>
              <Text style={s.summaryTitle}>Normal e‑Business</Text>
              {[['Validity', '365 days'], ['Entries', 'Multiple'], ['Stay', 'Up to 180 days per visit'], ['Apply', '4–120 days ahead'], ['Fee', 'Varies by nationality']].map(([k, v]) => (
                <View key={k} style={s.summaryRow}>
                  <Text style={s.summaryLabel}>{k}</Text>
                  <Text style={s.summaryValue}>{v}</Text>
                </View>
              ))}
            </View>
          </Card>

          {/* Steps */}
          <Card style={s.formCard}>
            <View style={s.formPad}>
              {/* Step 1: Applicant */}
              {step === 1 && !submitted && (
                <View>
                  <Text style={s.formTitle}>About you and your trip</Text>
                  <Text style={s.formIntro}>Enter details exactly as they appear in the passport you will travel with.</Text>
                  <View style={s.formGrid}>
                    <FormField label="Given name" placeholder="Aarav" />
                    <FormField label="Surname" placeholder="Sharma" />
                    <FormField label="Passport nationality" placeholder="United Kingdom" />
                    <FormField label="Date of birth" placeholder="12/06/1990" />
                    <FormField label="Passport number" placeholder="533912847" />
                    <FormField label="Passport expiry" placeholder="28/05/2031" />
                    <FormField label="Planned arrival" placeholder="10/08/2026" />
                    <FormField label="Expected arrival port" placeholder="Delhi — Indira Gandhi International" />
                    <FormField label="Email address" placeholder="aarav@example.com" full />
                  </View>
                  <Text style={s.sectionLabel}>Passport check</Text>
                  <CheckItem label="Valid for at least six months" sub="From the date of your application." />
                  <CheckItem label="At least two blank pages" sub="Available for immigration stamps." />
                  <View style={s.formActions}>
                    <Text style={s.saveStatus}>✓ Saved locally</Text>
                    <Button title="Continue to business details →" onPress={() => goStep(2)} fullWidth />
                  </View>
                </View>
              )}

              {/* Step 2: Business */}
              {step === 2 && !submitted && (
                <View>
                  <Text style={s.formTitle}>Your business visit</Text>
                  <Text style={s.formIntro}>Tell us why you're travelling and who you'll meet in India.</Text>
                  <View style={s.formGrid}>
                    <FormField label="Primary business activity" placeholder="Business meetings or negotiations" full />
                    <FormField label="Your employer" placeholder="Northstar Labs Ltd" />
                    <FormField label="Your job title" placeholder="Product Director" />
                    <FormField label="Indian company" placeholder="Aster Technologies Pvt Ltd" />
                    <FormField label="Contact person in India" placeholder="Priya Mehta" />
                    <FormField label="Indian organisation address" placeholder="Full office address in India" full multiline />
                    <FormField label="Indian contact phone" placeholder="+91 98…" />
                    <FormField label="Expected stay" placeholder="Under 14 days" />
                  </View>
                  <Text style={s.sectionLabel}>Travel confirmation</Text>
                  <CheckItem label="Return or onward journey" sub="I can provide travel plans if requested." />
                  <CheckItem label="Sufficient funds" sub="I can support myself during the visit." />
                  <View style={s.formActions}>
                    <TouchableOpacity onPress={() => goStep(1)}><Text style={s.backLink}>← Back</Text></TouchableOpacity>
                    <Button title="Continue to documents →" onPress={() => goStep(3)} fullWidth />
                  </View>
                </View>
              )}

              {/* Step 3: Documents */}
              {step === 3 && !submitted && (
                <View>
                  <Text style={s.formTitle}>Your documents</Text>
                  <Text style={s.formIntro}>Use clear, current files. We'll show the status of each one before you continue.</Text>
                  {([
                    { key: 'passport' as const, icon: '▣', label: 'Passport bio page', sub: 'JPG, PNG or PDF · maximum 5 MB' },
                    { key: 'photo' as const, icon: '◉', label: 'Recent photograph', sub: 'Front-facing · white background' },
                    { key: 'business' as const, icon: '▤', label: 'Business card or invitation', sub: 'Company details, address and phone' },
                  ]).map(doc => (
                    <View key={doc.key} style={[s.uploadCard, uploads[doc.key] && s.uploadCardReady]}>
                      <View style={s.uploadInfo}>
                        <Text style={s.uploadIcon}>{doc.icon}</Text>
                        <View style={{ flex: 1 }}>
                          <Text style={s.uploadLabel}>{doc.label}</Text>
                          <Text style={s.uploadSub}>{uploads[doc.key] ? 'document.pdf' : doc.sub}</Text>
                        </View>
                      </View>
                      <View style={s.uploadActions}>
                        <View style={[s.statusBadge, uploads[doc.key] && s.statusReady]}>
                          <Text style={[s.statusText, uploads[doc.key] && s.statusTextReady]}>{uploads[doc.key] ? 'Ready' : 'Missing'}</Text>
                        </View>
                        <TouchableOpacity style={s.chooseBtn} onPress={() => toggleUpload(doc.key)}>
                          <Text style={s.chooseBtnText}>{uploads[doc.key] ? 'Replace' : 'Choose file'}</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))}
                  <View style={s.criteria}>
                    {[['Readable', 'No glare, blur or shadows'], ['Complete', 'All edges and details visible'], ['Current', 'Matches this application']].map(([t, d]) => (
                      <View key={t} style={s.criterionItem}>
                        <Text style={s.criterionTitle}>{t}</Text>
                        <Text style={s.criterionDesc}>{d}</Text>
                      </View>
                    ))}
                  </View>
                  <View style={s.notice}>
                    <Text style={s.noticeText}>If a document is not clear or does not meet the specification, you may be asked by email to upload it again.</Text>
                  </View>
                  <View style={s.formActions}>
                    <TouchableOpacity onPress={() => goStep(2)}><Text style={s.backLink}>← Back</Text></TouchableOpacity>
                    <Button title="Continue to fee →" onPress={() => goStep(4)} fullWidth />
                  </View>
                </View>
              )}

              {/* Step 4: Payment */}
              {step === 4 && !submitted && (
                <View>
                  <Text style={s.formTitle}>Review the fee before paying</Text>
                  <Text style={s.formIntro}>The applicable eVisa fee depends on passport nationality. The full amount is shown before payment.</Text>
                  <View style={s.feeBox}>
                    <Eyebrow>United Kingdom passport</Eyebrow>
                    <View style={s.feeRow}><Text style={s.feeLabel}>Normal e‑Business Visa fee</Text><Text style={s.feeValue}>Calculated for nationality</Text></View>
                    <View style={s.feeRow}><Text style={s.feeLabel}>Bank transaction charge</Text><Text style={s.feeValue}>Up to 3%</Text></View>
                    <View style={[s.feeRow, s.feeTotal]}><Text style={[s.feeLabel, { fontWeight: '700' }]}>Total due</Text><Text style={[s.feeValue, { fontWeight: '800' }]}>Shown at checkout</Text></View>
                  </View>
                  <View style={s.advisory}>
                    <Text style={s.advisoryStrong}>No emergency or express fee.</Text>
                    <Text style={s.advisoryText}>India's official advisory states there is no additional emergency charge for granting an eVisa.</Text>
                  </View>
                  <View style={s.consentRow}>
                    <Switch
                      value={feeConsented}
                      onValueChange={setFeeConsented}
                      trackColor={{ false: Colors.line, true: Colors.sage }}
                      thumbColor={feeConsented ? Colors.forest : '#f4f3f4'}
                    />
                    <Text style={s.consentText}>I understand the visa fee is nationality-specific, bank charges are added at payment, and the application fee is not refunded if the visa is refused.</Text>
                  </View>
                  <View style={s.formActions}>
                    <TouchableOpacity onPress={() => goStep(3)}><Text style={s.backLink}>← Back</Text></TouchableOpacity>
                    <Button title="Continue to review →" onPress={() => goStep(5)} disabled={!feeConsented} fullWidth />
                  </View>
                </View>
              )}

              {/* Step 5: Review */}
              {step === 5 && !submitted && (
                <View>
                  <Text style={s.formTitle}>Check everything once</Text>
                  <Text style={s.formIntro}>You are responsible for ensuring your name, nationality, passport number, date of birth and photograph are correct before submission.</Text>
                  {[
                    { dt: 'Applicant', dd: 'Aarav Sharma\nUnited Kingdom · passport ending 2847', editStep: 1 },
                    { dt: 'Trip', dd: 'Business meetings · Arrival 10 August 2026', editStep: 1 },
                    { dt: 'Business contact', dd: 'Aster Technologies Pvt Ltd · Bengaluru', editStep: 2 },
                    { dt: 'Documents', dd: 'Passport, photo and business evidence ready', editStep: 3 },
                    { dt: 'Payment', dd: 'Nationality-specific fee + transaction charge', editStep: 4 },
                  ].map(r => (
                    <View key={r.dt} style={s.reviewRow}>
                      <View style={{ flex: 1 }}>
                        <Text style={s.reviewDt}>{r.dt}</Text>
                        <Text style={s.reviewDd}>{r.dd}</Text>
                      </View>
                      <TouchableOpacity onPress={() => goStep(r.editStep)}>
                        <Text style={s.editLink}>Edit</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                  <View style={s.formActions}>
                    <TouchableOpacity onPress={() => goStep(4)}><Text style={s.backLink}>← Back</Text></TouchableOpacity>
                    <Button title="Submit application ↗" onPress={handleSubmit} fullWidth />
                  </View>
                </View>
              )}

              {/* Success */}
              {submitted && (
                <View style={s.success}>
                  <View style={s.successIcon}><Text style={s.successCheck}>✓</Text></View>
                  <Eyebrow>Application received</Eyebrow>
                  <Text style={s.successTitle}>We'll take it from here.</Text>
                  <Text style={s.successDesc}>Your reference has been sent by email. Keep it close—you'll use it to track payment, document review and the decision.</Text>
                  <TouchableOpacity style={s.refBtn} onPress={copyRef}>
                    <Text style={s.refText}>IND-BIZ-26-7K92 ⧉</Text>
                  </TouchableOpacity>
                  <Button title="Track application →" onPress={() => router.push('/(tabs)/track')} fullWidth style={{ marginTop: 16 }} />
                </View>
              )}
            </View>
          </Card>
          <View style={{ height: 40 }} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

// Sub-components
function FormField({ label, placeholder, full, multiline }: { label: string; placeholder: string; full?: boolean; multiline?: boolean }) {
  return (
    <View style={[fieldStyles.field, full && fieldStyles.full]}>
      <Text style={fieldStyles.label}>{label.toUpperCase()}</Text>
      <TextInput
        style={[fieldStyles.input, multiline && { minHeight: 80, textAlignVertical: 'top' }]}
        placeholder={placeholder}
        placeholderTextColor={Colors.muted}
        multiline={multiline}
      />
    </View>
  );
}

function CheckItem({ label, sub }: { label: string; sub: string }) {
  const [checked, setChecked] = useState(true);
  return (
    <TouchableOpacity style={checkStyles.row} onPress={() => setChecked(!checked)} activeOpacity={0.7}>
      <View style={[checkStyles.box, checked && checkStyles.boxChecked]}>
        {checked && <Text style={checkStyles.checkmark}>✓</Text>}
      </View>
      <View style={{ flex: 1 }}>
        <Text style={checkStyles.label}>{label}</Text>
        <Text style={checkStyles.sub}>{sub}</Text>
      </View>
    </TouchableOpacity>
  );
}

const fieldStyles = StyleSheet.create({
  field: { marginBottom: 14 },
  full: {},
  label: { fontSize: 9, fontWeight: '800', letterSpacing: 0.9, textTransform: 'uppercase', color: Colors.muted, marginBottom: 7 },
  input: { width: '100%', minHeight: 48, paddingHorizontal: 13, paddingVertical: 11, borderWidth: 1, borderColor: '#d4d1c6', borderRadius: 10, backgroundColor: '#fbfaf6', color: Colors.ink, fontSize: 13 },
});

const checkStyles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'flex-start', gap: 12, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: Colors.line },
  box: { width: 20, height: 20, borderRadius: 5, borderWidth: 1.5, borderColor: Colors.line, alignItems: 'center', justifyContent: 'center', marginTop: 2 },
  boxChecked: { backgroundColor: Colors.forest, borderColor: Colors.forest },
  checkmark: { color: '#fff', fontSize: 12, fontWeight: '700' },
  label: { fontWeight: '700', fontSize: 13 },
  sub: { color: Colors.muted, fontSize: 11, marginTop: 2 },
});

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.appBg },
  scrollContent: { paddingHorizontal: Spacing.containerPadding, paddingBottom: 30 },

  appHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Spacing.containerPadding, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: Colors.line, backgroundColor: Colors.white },
  brandRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  brandMark: { fontSize: 20, color: Colors.clay },
  brandName: { fontSize: 14, fontWeight: '800', letterSpacing: -0.4 },
  brandSub: { fontSize: 6, color: Colors.muted, letterSpacing: 0.8, textTransform: 'uppercase' },
  secureLabel: { color: Colors.muted, fontSize: 9, fontWeight: '600' },
  exitLink: { color: Colors.muted, fontSize: 12 },

  pageTitle: { ...Typography.h2, marginTop: 20, marginBottom: 6 },
  pageSub: { ...Typography.body, color: Colors.muted, marginBottom: 8 },

  summaryCard: { marginBottom: 16 },
  summaryPad: { padding: 18 },
  summaryTitle: { ...Typography.h3, marginTop: 4, marginBottom: 12 },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderTopWidth: 1, borderTopColor: Colors.line },
  summaryLabel: { color: Colors.muted, fontSize: 12 },
  summaryValue: { fontWeight: '700', fontSize: 12 },

  formCard: { marginBottom: 16 },
  formPad: { padding: 20 },
  formTitle: { fontSize: 20, fontWeight: '700', marginBottom: 8 },
  formIntro: { color: Colors.muted, fontSize: 13, lineHeight: 20, marginBottom: 20 },
  formGrid: {},
  sectionLabel: { fontSize: 14, fontWeight: '700', marginTop: 20, marginBottom: 8 },
  formActions: { marginTop: 24, gap: 12 },
  saveStatus: { color: Colors.sage, fontSize: 11, fontWeight: '600', textAlign: 'center', marginBottom: 4 },
  backLink: { color: Colors.clayDark, fontSize: 13, fontWeight: '600', textAlign: 'center' },

  // Uploads
  uploadCard: { borderWidth: 1, borderColor: Colors.line, borderRadius: 14, padding: 16, marginBottom: 12, backgroundColor: Colors.white },
  uploadCardReady: { borderColor: Colors.sage, backgroundColor: '#f5f8f4' },
  uploadInfo: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 12 },
  uploadIcon: { fontSize: 24, color: Colors.clay, width: 40, height: 40, textAlign: 'center', lineHeight: 40, backgroundColor: Colors.sand, borderRadius: 10, overflow: 'hidden' },
  uploadLabel: { fontWeight: '700', fontSize: 13 },
  uploadSub: { color: Colors.muted, fontSize: 11, marginTop: 2 },
  uploadActions: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  statusBadge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6, backgroundColor: '#fff0d4' },
  statusReady: { backgroundColor: '#e7eee5' },
  statusText: { fontSize: 9, fontWeight: '800', color: '#865f21', textTransform: 'uppercase' },
  statusTextReady: { color: '#52714e' },
  chooseBtn: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8, borderWidth: 1, borderColor: Colors.line },
  chooseBtnText: { fontSize: 11, fontWeight: '700' },

  criteria: { flexDirection: 'row', gap: 12, marginTop: 16 },
  criterionItem: { flex: 1, padding: 12, backgroundColor: Colors.sand, borderRadius: 10 },
  criterionTitle: { fontWeight: '700', fontSize: 11, marginBottom: 3 },
  criterionDesc: { color: Colors.muted, fontSize: 9 },

  notice: { marginTop: 16, padding: 14, backgroundColor: '#fff6e8', borderRadius: 10, borderLeftWidth: 3, borderLeftColor: Colors.gold },
  noticeText: { color: '#8a704a', fontSize: 11, lineHeight: 16 },

  // Fee
  feeBox: { padding: 18, backgroundColor: Colors.sand, borderRadius: 14, marginBottom: 14 },
  feeRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: Colors.line, gap: 16 },
  feeTotal: { borderBottomWidth: 0 },
  feeLabel: { color: Colors.muted, fontSize: 12 },
  feeValue: { fontSize: 12, fontWeight: '600', textAlign: 'right', flex: 1 },
  advisory: { padding: 16, backgroundColor: '#fff5e6', borderRadius: 12, borderLeftWidth: 3, borderLeftColor: Colors.gold, marginBottom: 16 },
  advisoryStrong: { fontWeight: '700', color: '#7e5722', fontSize: 13, marginBottom: 4 },
  advisoryText: { color: '#8a704a', fontSize: 12, lineHeight: 18 },
  consentRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 12, paddingVertical: 14 },
  consentText: { flex: 1, color: Colors.muted, fontSize: 12, lineHeight: 18 },

  // Review
  reviewRow: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: Colors.line, gap: 16 },
  reviewDt: { fontWeight: '700', fontSize: 13, marginBottom: 4 },
  reviewDd: { color: Colors.muted, fontSize: 12, lineHeight: 18 },
  editLink: { color: Colors.clayDark, fontSize: 11, fontWeight: '700' },

  // Success
  success: { alignItems: 'center', paddingVertical: 24 },
  successIcon: { width: 56, height: 56, borderRadius: 28, backgroundColor: Colors.successBg, alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  successCheck: { color: Colors.successText, fontSize: 24, fontWeight: '700' },
  successTitle: { ...Typography.h2, textAlign: 'center', marginTop: 8, marginBottom: 10 },
  successDesc: { ...Typography.body, color: Colors.muted, textAlign: 'center', marginBottom: 20 },
  refBtn: { paddingHorizontal: 20, paddingVertical: 14, borderWidth: 1, borderColor: Colors.line, borderRadius: 12, backgroundColor: Colors.white },
  refText: { fontFamily: Typography.mono, fontSize: 14, fontWeight: '800', letterSpacing: 0.5 },
});
