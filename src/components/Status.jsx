import { FontAwesome } from '@expo/vector-icons'
import { Text, View } from 'react-native'

export const Status = () => (
  <View className="gap-y-1">
    <Text className="text-2xl text-white font-bold">My Model S</Text>
    <View className="flex-row items-center gap-x-2">
      <FontAwesome name="battery-4" size={24} color="gray" />
      <Text className="text-gray-400">317 mil</Text>
    </View>
    <Text className="text-gray-400 font-medium">Parked</Text>
  </View>
)
