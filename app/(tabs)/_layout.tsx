// Forge eVisa — Tab Layout
import { Tabs, useRouter } from 'expo-router';
import { Text, View, StyleSheet, Platform } from 'react-native';

const C = {
  clay: '#c75f3d',
  muted: '#676b63',
  white: '#fffefa',
  line: '#dedbcf',
  forest: '#173f35',
};

function TabIcon({ name, focused }: { name: string; focused: boolean }) {
  const icons: Record<string, string> = {
    Home: '⌂',
    Eligibility: '◈',
    Apply: '✦',
    Track: '◎',
    Help: '?',
  };
  return (
    <View style={[tabStyles.iconWrap, focused && tabStyles.iconActive]}>
      <Text style={[tabStyles.icon, focused && tabStyles.iconFocused]}>
        {icons[name] || '•'}
      </Text>
    </View>
  );
}

const tabStyles = StyleSheet.create({
  iconWrap: {
    width: 36,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconActive: {
    backgroundColor: 'rgba(199,95,61,0.1)',
  },
  icon: {
    fontSize: 18,
    color: C.muted,
  },
  iconFocused: {
    color: C.clay,
  },
});

export default function TabLayout() {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: C.clay,
        tabBarInactiveTintColor: C.muted,
        tabBarStyle: {
          backgroundColor: C.white,
          borderTopColor: C.line,
          borderTopWidth: 1,
          height: Platform.OS === 'ios' ? 88 : 64,
          paddingTop: 6,
          paddingBottom: Platform.OS === 'ios' ? 28 : 8,
        },
        tabBarLabelStyle: {
          fontSize: 9,
          fontWeight: '600',
          letterSpacing: 0.3,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabIcon name="Home" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="eligibility"
        options={{
          title: 'Eligibility',
          tabBarIcon: ({ focused }) => <TabIcon name="Eligibility" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="apply-tab"
        options={{
          title: 'Apply',
          tabBarIcon: ({ focused }) => <TabIcon name="Apply" focused={focused} />,
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            router.push('/apply');
          },
        }}
      />
      <Tabs.Screen
        name="track"
        options={{
          title: 'Track',
          tabBarIcon: ({ focused }) => <TabIcon name="Track" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="help"
        options={{
          title: 'Help',
          tabBarIcon: ({ focused }) => <TabIcon name="Help" focused={focused} />,
        }}
      />
    </Tabs>
  );
}
