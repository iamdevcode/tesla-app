import { ScrollView } from 'react-native'

export default function ControlsView() {
  return (
    <ScrollView
      contentContainerStyle={{ padding: 20 }}
      showsVerticalScrollIndicator={false}
      className="gap-y-2 bg-[#161818]"
    ></ScrollView>
  )
}
