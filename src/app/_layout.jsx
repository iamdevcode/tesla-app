import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack screenOptions={{ statusBarStyle: 'dark', headerShown: false }} />
    </SafeAreaView>
  )
}
