// Forge eVisa — Root Layout
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Toast from '@/src/components/Toast';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="apply"
          options={{ presentation: 'modal', animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name="eta"
          options={{ presentation: 'modal', animation: 'slide_from_bottom' }}
        />
      </Stack>
      <Toast />
    </>
  );
}
