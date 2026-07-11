// Forge eVisa — Track Screen
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Colors } from '@/src/theme/colors';
import { Typography } from '@/src/theme/typography';
import { Spacing } from '@/src/theme/spacing';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import Eyebrow from '@/src/components/Eyebrow';
import Pill from '@/src/components/Pill';
import Timeline from '@/src/components/Timeline';
import { showToast } from '@/src/components/Toast';

const timelineEvents = [
  { title: 'Application submitted', description: 'Your application entered the review queue.', time: '11 Jul · 12:42', status: 'done' as const },
  { title: 'Payment confirmed', description: 'Your transaction was successful.', time: '11 Jul · 12:43', status: 'done' as const },
  { title: 'Documents under review', description: 'Your passport, photograph and business evidence are being checked.', time: 'In progress', status: 'current' as const },
  { title: 'Decision', description: 'Your ETA will be sent to the email used in your application.', time: '—', status: 'pending' as const },
];

export default function TrackScreen() {
  const router = useRouter();
  const [reference, setReference] = useState('IND-BIZ-26-7K92');
  const [statusRef, setStatusRef] = useState('IND-BIZ-26-7K92');

  const handleStatus = () => {
    if (!reference.trim()) {
      showToast('Enter your application reference');
      return;
    }
    setStatusRef(reference.trim().toUpperCase());
    showToast('Status refreshed');
  };

  return (
    <View style={s.root}>
      <SafeAreaView edges={['top']} style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.scrollContent}>
          {/* Header */}
          <View style={s.header}>
            <View style={s.brandRow}>
              <Text style={s.brandMark}>✦</Text>
              <View>
                <Text style={s.brandName}>Forge</Text>
                <Text style={s.brandSub}>INDIA EVISA</Text>
              </View>
            </View>
          </View>

          {/* Lookup */}
          <View style={s.lookup}>
            <Eyebrow>Application status</Eyebrow>
            <Text style={s.pageTitle}>Know where you stand.</Text>
            <Text style={s.bodyMuted}>Enter the reference sent to your email. You'll see payment, document review, any action needed and your decision in one place.</Text>

            <Card style={s.lookupCard}>
              <View style={s.lookupPad}>
                <Text style={s.fieldLabel}>APPLICATION REFERENCE</Text>
                <TextInput
                  style={s.input}
                  value={reference}
                  onChangeText={setReference}
                  placeholder="IND-BIZ-26-7K92"
                  placeholderTextColor={Colors.muted}
                  autoCapitalize="characters"
                />
                <Button title="Check status →" onPress={handleStatus} fullWidth />
                <Text style={s.helper}>Example: IND-BIZ-26-7K92</Text>
              </View>
            </Card>
          </View>

          {/* Status Card */}
          <Card style={s.statusCard}>
            <View style={s.statusPad}>
              <View style={s.statusHead}>
                <View style={{ flex: 1 }}>
                  <Eyebrow>{statusRef}</Eyebrow>
                  <Text style={s.statusTitle}>Documents under review</Text>
                </View>
                <Pill label="In progress" variant="warning" />
              </View>

              <Timeline events={timelineEvents} />

              {/* Action needed */}
              <View style={s.actionNeeded}>
                <View style={{ flex: 1 }}>
                  <Text style={s.actionTitle}>If we need something clearer</Text>
                  <Text style={s.actionDesc}>The exact document and a replacement deadline will appear here. You'll also receive an email.</Text>
                </View>
                <Button title="Manage documents" variant="outline" size="sm" onPress={() => router.push('/apply')} />
              </View>

              {/* Bottom actions */}
              <View style={s.bottomActions}>
                <Button title="Get help →" variant="ghost" onPress={() => router.push('/(tabs)/help')} />
                <Button title="Preview approved ETA" variant="dark" size="sm" onPress={() => router.push('/eta')} />
              </View>
            </View>
          </Card>

          {/* Footer */}
          <View style={s.footerMin}>
            <Text style={s.footerCopy}>© {new Date().getFullYear()} Forge eVisa</Text>
            <Text style={s.footerDisc}>For final travel decisions, rely on the ETA sent to your registered email and official immigration guidance.</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.appBg },
  scrollContent: { paddingHorizontal: Spacing.containerPadding, paddingBottom: 30 },
  header: { paddingVertical: 14 },
  brandRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  brandMark: { fontSize: 22, color: Colors.clay },
  brandName: { fontSize: 16, fontWeight: '800', letterSpacing: -0.5 },
  brandSub: { fontSize: 7, color: Colors.muted, letterSpacing: 1, textTransform: 'uppercase' },

  lookup: { paddingVertical: 20 },
  pageTitle: { ...Typography.pageTitle, marginTop: 8, marginBottom: 10 },
  bodyMuted: { ...Typography.body, color: Colors.muted, marginBottom: 20 },
  lookupCard: { marginTop: 4 },
  lookupPad: { padding: 20 },
  fieldLabel: { fontSize: 9, fontWeight: '800', letterSpacing: 0.9, textTransform: 'uppercase', color: Colors.muted, marginBottom: 7 },
  input: { width: '100%', minHeight: 48, paddingHorizontal: 13, paddingVertical: 11, borderWidth: 1, borderColor: '#d4d1c6', borderRadius: 10, backgroundColor: '#fbfaf6', color: Colors.ink, fontSize: 13, marginBottom: 14 },
  helper: { color: Colors.muted, fontSize: 11, marginTop: 10 },

  statusCard: { marginTop: 16 },
  statusPad: { padding: 20 },
  statusHead: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: 14, paddingBottom: 16, borderBottomWidth: 1, borderBottomColor: Colors.line },
  statusTitle: { ...Typography.h2, fontSize: 20, marginTop: 6 },

  actionNeeded: { marginTop: 8, padding: 16, backgroundColor: Colors.sand, borderRadius: 14, gap: 12 },
  actionTitle: { fontWeight: '700', fontSize: 13, marginBottom: 4 },
  actionDesc: { color: Colors.muted, fontSize: 12, lineHeight: 18 },

  bottomActions: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, paddingTop: 18, borderTopWidth: 1, borderTopColor: Colors.line, gap: 14 },

  footerMin: { paddingVertical: 24, borderTopWidth: 1, borderTopColor: Colors.line, marginTop: 20 },
  footerCopy: { color: Colors.muted, fontSize: 11 },
  footerDisc: { color: Colors.muted, fontSize: 10, marginTop: 4, lineHeight: 15 },
});
