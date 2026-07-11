// Forge eVisa — Digital ETA Screen
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/src/theme/colors';
import { Typography } from '@/src/theme/typography';
import { Spacing } from '@/src/theme/spacing';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import Eyebrow from '@/src/components/Eyebrow';
import { showToast } from '@/src/components/Toast';

export default function EtaScreen() {
  const router = useRouter();

  return (
    <View style={s.root}>
      <SafeAreaView edges={['top']} style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.scrollContent}>
          <TouchableOpacity onPress={() => router.push('/(tabs)/track')}>
            <Text style={s.backLink}>← Back to tracking</Text>
          </TouchableOpacity>

          <View style={s.etaHeader}>
            <Eyebrow>Electronic Travel Authorisation</Eyebrow>
            <Text style={s.headerTitle}>Approved means ready.</Text>
            <Text style={s.headerDesc}>Keep this ETA with the passport used in your application. Your visa will be stamped by immigration on arrival.</Text>
          </View>

          {/* ETA Card */}
          <LinearGradient
            colors={['#173f35', '#0f2e26', '#0a2119']}
            style={s.etaCard}
          >
            {/* Decorative circles */}
            <View style={s.decoCircle1} />
            <View style={s.decoCircle2} />

            {/* Top */}
            <View style={s.etaTop}>
              <View style={s.etaBrand}>
                <Image
                  source={require('../assets/images/e-visa-logo.png')}
                  style={{ width: 45, height: 30 }}
                  resizeMode="contain"
                />
                <View style={{ marginLeft: 8 }}>
                  <Text style={s.etaBrandName}>e-Visa India</Text>
                  <Text style={s.etaBrandSub}>Official Portal</Text>
                </View>
              </View>
              <View style={s.approvedBadge}>
                <View style={s.approvedDot} />
                <Text style={s.approvedText}>Approved</Text>
              </View>
            </View>

            {/* Name */}
            <Text style={s.etaName}>Aarav Sharma</Text>
            <Text style={s.etaType}>Normal e‑Business Visa · India</Text>

            {/* Details grid */}
            <View style={s.etaDetails}>
              {[
                ['Validity', '365 days'],
                ['Entries', 'Multiple'],
                ['Stay per visit', 'Up to 180 days'],
                ['Valid from', '18 July 2026'],
                ['Valid until', '17 July 2027'],
                ['Passport', '•••• 2847'],
              ].map(([k, v]) => (
                <View key={k} style={s.etaDetail}>
                  <Text style={s.etaDetailLabel}>{k}</Text>
                  <Text style={s.etaDetailValue}>{v}</Text>
                </View>
              ))}
            </View>

            {/* Bottom */}
            <View style={s.etaBottom}>
              <Text style={s.etaRef}>IND-BIZ-26-7K92</Text>
              <View style={s.qrPlaceholder}>
                {Array.from({ length: 49 }).map((_, i) => (
                  <View
                    key={i}
                    style={[
                      s.qrCell,
                      (i % 3 === 0 || i % 5 === 0) && s.qrCellFilled,
                    ]}
                  />
                ))}
              </View>
            </View>
          </LinearGradient>

          {/* Before you fly */}
          <Card style={s.sideCard}>
            <View style={s.sidePad}>
              <Eyebrow>Before you fly</Eyebrow>
              <Text style={s.sideTitle}>Keep these together</Text>
              {['The passport used to apply', 'An accessible copy of this ETA', 'Return or onward journey details', 'Business contact information'].map(item => (
                <View key={item} style={s.checkItem}>
                  <View style={s.tick}><Text style={s.tickText}>✓</Text></View>
                  <Text style={s.checkText}>{item}</Text>
                </View>
              ))}
              <Button title="Save ETA ↓" onPress={() => showToast('Your eVisa is ready to save')} fullWidth style={{ marginTop: 16 }} />
            </View>
          </Card>

          {/* On arrival */}
          <Card style={s.sideCard}>
            <View style={s.sidePad}>
              <Eyebrow>On arrival</Eyebrow>
              <Text style={s.sideTitle}>Immigration completes the journey</Text>
              <Text style={s.sideDesc}>Biometric details may be captured at immigration. Present this ETA with your passport at an authorised check post.</Text>
              <Button title="Arrival questions →" variant="ghost" onPress={() => router.push('/(tabs)/help')} style={{ marginTop: 12 }} />
            </View>
          </Card>

          <View style={{ height: 30 }} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#eae8df' },
  scrollContent: { paddingHorizontal: Spacing.containerPadding, paddingBottom: 30 },
  backLink: { color: Colors.clayDark, fontSize: 13, fontWeight: '600', paddingVertical: 16 },

  etaHeader: { marginBottom: 24 },
  headerTitle: { ...Typography.pageTitle, marginTop: 8, marginBottom: 10 },
  headerDesc: { ...Typography.body, color: Colors.muted },

  // ETA Card
  etaCard: { borderRadius: 20, padding: 24, marginBottom: 16, overflow: 'hidden', position: 'relative' },
  decoCircle1: { position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: 80, borderWidth: 1, borderColor: 'rgba(255,255,255,0.06)' },
  decoCircle2: { position: 'absolute', top: -20, right: -20, width: 120, height: 120, borderRadius: 60, borderWidth: 1, borderColor: 'rgba(255,255,255,0.04)' },

  etaTop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 },
  etaBrand: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  brandMark: { fontSize: 22 },
  etaBrandName: { color: '#fff', fontSize: 16, fontWeight: '800', letterSpacing: -0.5 },
  etaBrandSub: { color: '#92a69d', fontSize: 7, letterSpacing: 1, textTransform: 'uppercase' },
  approvedBadge: { flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: 'rgba(140,162,128,0.2)', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 999 },
  approvedDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: Colors.sage },
  approvedText: { color: Colors.sage, fontSize: 10, fontWeight: '800', letterSpacing: 0.5, textTransform: 'uppercase' },

  etaName: { ...Typography.etaName, color: '#fff', marginBottom: 4 },
  etaType: { color: '#92a69d', fontSize: 13, marginBottom: 24 },

  etaDetails: { flexDirection: 'row', flexWrap: 'wrap', gap: 0 },
  etaDetail: { width: '50%', paddingVertical: 12, borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.1)' },
  etaDetailLabel: { color: '#7a9a8d', fontSize: 10, marginBottom: 4 },
  etaDetailValue: { color: '#fff', fontSize: 14, fontWeight: '700' },

  etaBottom: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 20, paddingTop: 16, borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.1)' },
  etaRef: { fontFamily: Typography.mono, color: '#7a9a8d', fontSize: 11, fontWeight: '700', letterSpacing: 0.5 },
  qrPlaceholder: { width: 70, height: 70, flexDirection: 'row', flexWrap: 'wrap', gap: 1 },
  qrCell: { width: 8, height: 8, borderRadius: 1, backgroundColor: 'rgba(255,255,255,0.08)' },
  qrCellFilled: { backgroundColor: 'rgba(255,255,255,0.3)' },

  // Side cards
  sideCard: { marginBottom: 14 },
  sidePad: { padding: 20 },
  sideTitle: { ...Typography.h3, marginTop: 6, marginBottom: 12 },
  sideDesc: { ...Typography.body, color: Colors.muted },
  checkItem: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 8 },
  tick: { width: 18, height: 18, borderRadius: 9, backgroundColor: '#e7eee5', alignItems: 'center', justifyContent: 'center' },
  tickText: { fontSize: 10, fontWeight: '900', color: '#587451' },
  checkText: { color: Colors.muted, fontSize: 12 },
});
